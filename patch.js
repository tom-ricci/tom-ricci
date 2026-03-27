const fs = require("fs");

const PLACEHOLDER = "3dfd7ced-51bb-495c-9c7b-e074626315c8";

const FILE_PATH = "./dist/index.html";

const timestamp = Math.floor(Date.now() / 1000);
let content = fs.readFileSync(FILE_PATH, "utf8");

if (!content.includes(PLACEHOLDER)) {
  console.error(`No occurrence of ${JSON.stringify(PLACEHOLDER)} in ${FILE_PATH}`);
  process.exit(1);
}

content = content.split(PLACEHOLDER).join(String(timestamp));
fs.writeFileSync(FILE_PATH, content, "utf8");
console.log(`Wrote ${timestamp} into ${FILE_PATH}`);
