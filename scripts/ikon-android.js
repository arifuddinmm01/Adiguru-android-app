/* Mengganti ikon bawaan Capacitor dengan ikon ADIGURU (dijalankan setelah "npx cap add android"). */
const fs = require('fs'), path = require('path');
const res = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res');
if (!fs.existsSync(res)) { console.error('Folder android belum ada. Jalankan: npx cap add android'); process.exit(1); }
for (const d of ['mdpi', 'hdpi', 'xhdpi', 'xxhdpi', 'xxxhdpi']) {
  const dir = path.join(res, 'mipmap-' + d), src = path.join(__dirname, '..', 'ikon', d + '.png');
  for (const n of ['ic_launcher.png', 'ic_launcher_round.png', 'ic_launcher_foreground.png']) fs.copyFileSync(src, path.join(dir, n));
}
fs.rmSync(path.join(res, 'mipmap-anydpi-v26'), { recursive: true, force: true });
console.log('Ikon ADIGURU terpasang');
