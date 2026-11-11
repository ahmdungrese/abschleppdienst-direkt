const fs = require('fs');

const lightBase64 = fs.readFileSync('invoicing-app/logo_light_base64.txt', 'utf8').trim();
const darkBase64 = fs.readFileSync('invoicing-app/logo_dark_base64.txt', 'utf8').trim();

let template = fs.readFileSync('invoicing-app/template.html', 'utf8');

// Simple safe string replace
template = template.replace('__LOGO_LIGHT_SRC__', lightBase64);
template = template.replace('__LOGO_DARK_SRC__', darkBase64);

fs.writeFileSync('invoicing-app/index.html', template, 'utf8');
fs.writeFileSync('invoicing-app/rechnung.html', template, 'utf8');
console.log('Successfully generated invoicing-app/index.html and invoicing-app/rechnung.html, length:', template.length);
