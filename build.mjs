import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

const RUNTIME_DIRS = ['assets', 'css', 'js', 'ecours-asset', 'sanad-asset', 'healthtrack'];

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy all HTML pages and favicon.svg to dist/
for (const entry of fs.readdirSync(__dirname, { withFileTypes: true })) {
  if (entry.isFile() && (entry.name.endsWith('.html') || entry.name === 'favicon.svg')) {
    fs.copyFileSync(path.join(__dirname, entry.name), path.join(distDir, entry.name));
  }
}

// Copy clean asset, CSS, and JS directories without .git, node_modules, or dev scripts
for (const dir of RUNTIME_DIRS) {
  const src = path.join(__dirname, dir);
  if (fs.existsSync(src)) {
    fs.cpSync(src, path.join(distDir, dir), { recursive: true });
  }
}

console.log('Static production bundle built cleanly in dist/');
