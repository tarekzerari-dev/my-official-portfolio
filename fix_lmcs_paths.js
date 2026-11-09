const fs = require('fs');
const glob = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const f of glob) {
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('assets/lmcs/')) {
      c = c.replace(/assets\/lmcs\//g, 'assets/LMCS/');
      fs.writeFileSync(f, c, 'utf8');
  }
}
console.log('Fixed LMCS paths for case sensitivity.');
