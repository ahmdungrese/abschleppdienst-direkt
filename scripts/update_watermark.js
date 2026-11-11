const fs = require('fs');

const svgContent = fs.readFileSync('scripts/watermark_generated.svg', 'utf8').trim();
let template = fs.readFileSync('invoicing-app/template.html', 'utf8');

const oldWatermarkRegex = /<!-- Subtle Watermark Silhouette[\s\S]*?<\/div>\s*(?=<!-- TOP PORTION)/;

const newWatermarkHtml = `<!-- Subtle Distributed Watermark Pattern (Discrete Tow Trucks, Flatbeds, Roadside Tools, 24h & Transport Shields) -->
          <div id="pdf-watermark-container" class="pdf-watermark" style="position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.07; pointer-events: none; z-index: 0; overflow: hidden;">
            ${svgContent}
          </div>\n\n          `;

if (!oldWatermarkRegex.test(template)) {
  console.error('ERROR: oldWatermarkRegex did not match!');
  process.exit(1);
}

template = template.replace(oldWatermarkRegex, newWatermarkHtml);

// Also update the select dropdown options for opacity
const oldSelectRegex = /<select id="select-watermark-opacity"[\s\S]*?<\/select>/;
const newSelectHtml = `<select id="select-watermark-opacity" onchange="setWatermarkOpacity(this.value)" class="bg-slate-900 text-amber-400 font-bold border border-slate-700 rounded-lg px-2 py-0.5 text-[11px] outline-none cursor-pointer">
            <option value="0.07" selected>7% (Empfohlen - زارت)</option>
            <option value="0.10">10% (Dezent)</option>
            <option value="0.15">15% (Sichtbar)</option>
            <option value="0.22">22% (Kräftig)</option>
            <option value="0.04">4% (Sehr zart)</option>
            <option value="0">0% (Aus)</option>
          </select>`;

if (!oldSelectRegex.test(template)) {
  console.error('ERROR: oldSelectRegex did not match!');
  process.exit(1);
}

template = template.replace(oldSelectRegex, newSelectHtml);

// Update default opacity fallback in JS
template = template.replace(
  "const op = settings.watermarkOpacity || '0.16';",
  "const op = settings.watermarkOpacity || '0.07';"
);

fs.writeFileSync('invoicing-app/template.html', template, 'utf8');
console.log('Successfully updated template.html with distributed watermark!');
