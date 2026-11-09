const fs = require('fs');
const glob = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const imgHtmlEn = `<img src="photo.png" alt="Tarek Zerari" style="width: 120px; height: 120px; border-radius: 50%; margin-bottom: var(--space-6); object-fit: cover; border: 1px solid var(--border);">\n            <p>I'm Tarek Zerari`;
const imgHtmlAr = `<img src="photo.png" alt="طارق زراري" style="width: 120px; height: 120px; border-radius: 50%; margin-bottom: var(--space-6); object-fit: cover; border: 1px solid var(--border);">\n            <p>أنا طارق زراري`;

for (const f of glob) {
  let c = fs.readFileSync(f, 'utf8');
  
  // Footer replacements
  c = c.replace(/href="mailto:your@email\.com"/g, 'href="mailto:nt_zerari@esi.dz"');
  c = c.replace(/href="#" class="footer__link">LinkedIn<\/a>/g, 'href="https://www.linkedin.com/in/tarek-zerari-197736331/" target="_blank" rel="noopener noreferrer" class="footer__link">LinkedIn</a>');
  c = c.replace(/href="#" class="footer__link">GitHub<\/a>/g, 'href="https://github.com/TiREEEEX" target="_blank" rel="noopener noreferrer" class="footer__link">GitHub</a>');
  
  // Add photo to index.html and index-ar.html if not already there
  if (f === 'index.html' && !c.includes('photo.png')) {
      c = c.replace("<p>I'm Tarek Zerari", imgHtmlEn);
  } else if (f === 'index-ar.html' && !c.includes('photo.png')) {
      c = c.replace("<p>أنا طارق زراري", imgHtmlAr);
  }
  
  fs.writeFileSync(f, c, 'utf8');
}
console.log('Added photo and links successfully.');
