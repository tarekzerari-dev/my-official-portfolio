const fs = require('fs');
const glob = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const f of glob) {
  let c = fs.readFileSync(f, 'utf8');
  
  // Replace visible email text
  c = c.replace(/your@email\.com/g, 'nt_zerari@esi.dz');
  
  // Replace links in contact__link
  c = c.replace(/href="#" class="contact__link" aria-label="LinkedIn"/g, 'href="https://www.linkedin.com/in/tarek-zerari-197736331/" target="_blank" rel="noopener noreferrer" class="contact__link" aria-label="LinkedIn"');
  c = c.replace(/href="#" class="contact__link" aria-label="GitHub"/g, 'href="https://github.com/TiREEEEX" target="_blank" rel="noopener noreferrer" class="contact__link" aria-label="GitHub"');
  c = c.replace(/href="#" class="contact__link" aria-label="Email"/g, 'href="mailto:nt_zerari@esi.dz" class="contact__link" aria-label="Email"');
  
  fs.writeFileSync(f, c, 'utf8');
}
console.log('Fixed contact links');
