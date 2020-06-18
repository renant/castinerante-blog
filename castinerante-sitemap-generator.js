const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://castinerante.com',
  pagesDirectory: __dirname + "/pages",
  targetDirectory: 'static/',
  nextConfigPath: __dirname + "/next.config.js",
  ignoredExtensions: [
    'png',
    'jpg'
  ]
});

console.log(`✅ sitemap.xml generated!`);
