import fs from 'fs';

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

const baseUrl = 'https://www.smarttest.cc';
const pages = [
  '',
  '/smart-test',
  '/smart-test-for-intelligence',
  '/smart-test-questions-from-experts',
  '/online-intelligence-test-free',
  '/iq-test-questions-from-mensa',
  '/smart-test-based-on-psychological-research',
  '/smart-test-inspired-by-ravens-progressive-matrices',
  '/interactive-iq-test',
  '/gamified-intelligence-test',
  '/about',
  '/faq'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

fs.writeFileSync('dist/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');