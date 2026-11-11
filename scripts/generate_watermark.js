const fs = require('fs');

const cols = [50, 180, 310, 440, 570, 700];
const rows = [70, 190, 310, 430, 550, 670, 790, 910, 1030];

const iconDefs = [
  // Icon 0: Tow truck
  (x, y) => `<g transform="translate(${x},${y})">
    <path d="M2 18 L2 9 Q2 7 4 7 L9 7 L14 2 Q15 1 17 1 L22 1 Q23 1 23 3 L23 18 Z" fill="#0f172a"/>
    <path d="M10 7 L14 3 L21 3 L21 7 Z" fill="#ffffff"/>
    <rect x="16" y="0" width="4" height="1.5" rx="0.5" fill="#0f172a"/>
    <polygon points="22,18 24,5 26,5 24,18" fill="#0f172a"/>
    <path d="M25 6 L32 12" stroke="#0f172a" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M32 12 L32 15 Q32 16.5 30.5 16.5" stroke="#0f172a" stroke-width="1.2" fill="none"/>
    <rect x="22" y="14" width="10" height="4" rx="0.5" fill="#0f172a"/>
    <circle cx="7" cy="18" r="3" fill="#0f172a"/>
    <circle cx="7" cy="18" r="1.2" fill="#ffffff"/>
    <circle cx="21" cy="18" r="3" fill="#0f172a"/>
    <circle cx="21" cy="18" r="1.2" fill="#ffffff"/>
    <circle cx="28" cy="18" r="3" fill="#0f172a"/>
    <circle cx="28" cy="18" r="1.2" fill="#ffffff"/>
  </g>`,

  // Icon 1: Flatbed with car
  (x, y) => `<g transform="translate(${x},${y})">
    <path d="M2 18 L2 10 Q2 8 4 8 L7 8 L11 4 Q12 3 14 3 L18 3 Q19 3 19 5 L19 18 Z" fill="#0f172a"/>
    <path d="M8 8 L11 5 L17 5 L17 8 Z" fill="#ffffff"/>
    <polygon points="18,15 34,12 34,16 18,17" fill="#0f172a"/>
    <path d="M21 13 L23 10 Q24 9 26 9 L29 9 Q31 9 32 11 L33 13 Z" fill="#0f172a"/>
    <circle cx="23.5" cy="13.5" r="1.5" fill="#ffffff"/>
    <circle cx="30.5" cy="13" r="1.5" fill="#ffffff"/>
    <circle cx="6" cy="18" r="2.8" fill="#0f172a"/>
    <circle cx="6" cy="18" r="1.2" fill="#ffffff"/>
    <circle cx="28" cy="18" r="2.8" fill="#0f172a"/>
    <circle cx="28" cy="18" r="1.2" fill="#ffffff"/>
  </g>`,

  // Icon 2: Pannenhilfe crossed tools
  (x, y) => `<g transform="translate(${x+3},${y})">
    <path d="M4 22 L12 14 M6 24 L2 20 M14 12 L16 10 C18 8 20 8 22 10 C24 12 24 14 22 16 L20 18 M16 14 L18 16" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M22 22 L14 14 M20 24 L24 20 M12 12 L10 10 C8 8 8 6 10 4 C12 2 14 2 16 4 L18 6 M14 8 L16 6" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <circle cx="13" cy="13" r="2.5" fill="#0f172a"/>
    <circle cx="13" cy="13" r="1" fill="#ffffff"/>
  </g>`,

  // Icon 3: Transport & Safety Shield
  (x, y) => `<g transform="translate(${x+3},${y})">
    <path d="M13 2 L23 5 L23 13 Q23 20 13 24 Q3 20 3 13 L3 5 Z" fill="none" stroke="#0f172a" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M13 7 L13 13 Q13 16 10.5 16 Q8.5 16 8.5 14.5" stroke="#0f172a" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <circle cx="13" cy="7" r="1.5" fill="#0f172a"/>
  </g>`,

  // Icon 4: 24h Service Emblem
  (x, y) => `<g transform="translate(${x+3},${y})">
    <circle cx="13" cy="13" r="10" fill="none" stroke="#0f172a" stroke-width="1.6"/>
    <text x="13" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="7.5" font-weight="900" text-anchor="middle" fill="#0f172a">24h</text>
  </g>`
];

let itemsSvg = '';
let idx = 0;
for (let r = 0; r < rows.length; r++) {
  const y = rows[r];
  const offsetX = (r % 2 === 1) ? 35 : 0;
  for (let c = 0; c < cols.length; c++) {
    const x = cols[c] + offsetX;
    if (x > 750) continue;
    const fn = iconDefs[idx % iconDefs.length];
    itemsSvg += '            ' + fn(x, y).trim() + '\n';
    idx++;
  }
}

const fullSvg = `<svg viewBox="0 0 794 1123" width="794" height="1123" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; display: block;">\n${itemsSvg}          </svg>`;

console.log('Generated', idx, 'icons in SVG.');
fs.writeFileSync('scripts/watermark_generated.svg', fullSvg, 'utf8');
