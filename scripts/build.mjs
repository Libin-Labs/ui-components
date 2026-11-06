import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function buildESM() {
  console.log('Building ESM...');
  ensureDir(`${rootDir}/dist/esm`);
  
  // Copy TypeScript/JavaScript files
  const srcDir = `${rootDir}/src`;
  const distESMDir = `${rootDir}/dist/esm`;

  function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
        ensureDir(path.dirname(destPath));
        // Convert .ts/.tsx to .js/.jsx
        const jsPath = destPath.replace(/\.tsx?$/, '.js');
        const content = fs.readFileSync(srcPath, 'utf-8');
        fs.writeFileSync(jsPath, content);
        
        // Create .d.ts files
        const dtsPath = destPath.replace(/\.tsx?$/, '.d.ts');
        fs.writeFileSync(dtsPath, content);
      } else if (entry.name.endsWith('.css')) {
        ensureDir(path.dirname(destPath));
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  copyDir(srcDir, distESMDir);
  console.log('✓ ESM build complete');
}

function buildCJS() {
  console.log('Building CommonJS...');
  ensureDir(`${rootDir}/dist/cjs`);
  
  const srcDir = `${rootDir}/src`;
  const distCJSDir = `${rootDir}/dist/cjs`;

  function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
        ensureDir(path.dirname(destPath));
        const jsPath = destPath.replace(/\.tsx?$/, '.js');
        const content = fs.readFileSync(srcPath, 'utf-8');
        fs.writeFileSync(jsPath, content);
        
        const dtsPath = destPath.replace(/\.tsx?$/, '.d.ts');
        fs.writeFileSync(dtsPath, content);
      } else if (entry.name.endsWith('.css')) {
        ensureDir(path.dirname(destPath));
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  copyDir(srcDir, distCJSDir);
  console.log('✓ CommonJS build complete');
}

function copyStyles() {
  console.log('Copying styles...');
  ensureDir(`${rootDir}/dist/styles`);
  copyFile(
    `${rootDir}/src/styles/main.css`,
    `${rootDir}/dist/styles/main.css`
  );
  console.log('✓ Styles copied');
}

try {
  buildESM();
  buildCJS();
  copyStyles();
  console.log('\n✓ Build complete!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
