/* Menyalin aplikasi web ke folder www dan menyertakan pustaka Excel supaya jalan tanpa internet. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), web = path.join(root, 'web'), www = path.join(root, 'www');
fs.rmSync(www, { recursive: true, force: true });
fs.cpSync(web, www, { recursive: true });
fs.mkdirSync(path.join(www, 'lib'), { recursive: true });
const xl = path.join(root, 'node_modules', 'xlsx', 'dist', 'xlsx.full.min.js');
if (!fs.existsSync(xl)) { console.error('xlsx belum terpasang. Jalankan: npm install'); process.exit(1); }
fs.copyFileSync(xl, path.join(www, 'lib', 'xlsx.full.min.js'));
console.log('www siap:', fs.readdirSync(www).join(', '));
