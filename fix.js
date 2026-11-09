const fs = require('fs');

const glob = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of glob) {
  let c = fs.readFileSync(f, 'utf8');
  
  c = c.replace(/â€”/g, '—');
  c = c.replace(/â†’/g, '→');
  c = c.replace(/â€“/g, '–');
  c = c.replace(/â€œ/g, '“');
  c = c.replace(/â€ /g, '”');
  c = c.replace(/â€™/g, '’');
  
  // Some hidden variants from console logging
  c = c.replace(/â€\x9d/g, '”');
  c = c.replace(/â€/g, '”');

  fs.writeFileSync(f, c, 'utf8');
}
console.log('Fixed encoding');
