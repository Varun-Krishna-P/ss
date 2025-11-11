import fs from 'fs';
import path from 'path';

const distDir = './public';
const headersFile = path.join(distDir, '_headers');

const basicAuthCredentials = process.env.BASIC_AUTH_CREDENTIALS;

if (!basicAuthCredentials) {
  console.log('BASIC_AUTH_CREDENTIALS not found, skipping _headers file generation');
  process.exit(0);
}

// const headersContent = `/admin
//   Basic-Auth: ${basicAuthCredentials}
// `;

const headersContent = `/admin\n  Basic-Auth: ${basicAuthCredentials}\n`;
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(headersFile, headersContent);
console.log('Generated _headers file with Basic Auth credentials');