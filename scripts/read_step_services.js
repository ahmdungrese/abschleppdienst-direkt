const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/PC-Bashar/.gemini/antigravity/brain/98ac32d5-d1f1-4327-9444-7e0ead66aef2/.system_generated/logs/transcript_full.jsonl')
});
rl.on('line', (line) => {
  if (line.includes('"step_index":1076')) {
    const obj = JSON.parse(line);
    console.log(JSON.stringify(obj.tool_calls?.[0]?.args?.Replacement));
  }
});
