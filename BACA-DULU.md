# ADIGURU untuk Android (mode lokal, bisa dipakai tanpa internet)

Aplikasi ini sama dengan versi web, tetapi:
- semua berkas aplikasi ada di dalam aplikasi, jadi terbuka tanpa internet;
- data disimpan di HP (tanpa login, tanpa Supabase);
- **data hanya ada di HP itu.** Jika HP hilang atau aplikasi dihapus, data ikut hilang. Unduh **Cadangan** (menu Backup) secara berkala dan simpan ke Google Drive/WhatsApp. Di bagian atas aplikasi ada penanda kapan cadangan terakhir dibuat;
- Cetak dan Ekspor memakai menu Bagikan Android. Untuk cetak: aplikasi menyimpan berkas HTML, buka dengan Chrome, lalu pilih Cetak atau Simpan sebagai PDF.

## Cara paling mudah: bangun APK lewat GitHub (gratis, tanpa Android Studio)
1. Buat akun di github.com, lalu buat repositori baru (pilih **Private**).
2. Unggah seluruh isi folder ini ke repositori (Add file → Upload files). Pastikan folder `.github` ikut. Jika folder tersembunyi itu tidak terunggah, pilih Add file → Create new file, ketik nama `.github/workflows/build-apk.yml`, lalu tempel isi berkas `build-apk.yml`.
3. Buka tab **Actions** → pilih **Bangun APK ADIGURU** → **Run workflow**. Tunggu sekitar 5–10 menit sampai tanda centang hijau.
4. Buka proses yang selesai itu, pada bagian **Artifacts** unduh **ADIGURU-apk** (berkas ZIP berisi `app-debug.apk`).
5. Kirim `app-debug.apk` ke HP (WhatsApp atau Google Drive), buka, lalu izinkan **instal dari sumber tidak dikenal** bila diminta.

## Cara lain: di komputer dengan Android Studio
```
npm install
npm run siapkan
npx cap add android
node scripts/ikon-android.js
npx cap sync android
npx cap open android      # lalu Build > Build APK(s) di Android Studio
```

## Untuk Play Store
APK di atas ditandatangani kunci debug, cukup untuk dipasang langsung ke HP. Untuk Play Store dibutuhkan build **release** dengan kunci tanda tangan sendiri (berkas .aab), akun pengembang (sekitar US$25 sekali bayar), kebijakan privasi, dan uji tertutup bagi akun baru. Simpan kunci tanda tangan dengan aman: bila hilang, aplikasi tidak bisa diperbarui.

## Memperbarui aplikasi
Ganti `web/index.html` dengan versi terbaru, unggah ke repositori, lalu jalankan lagi **Run workflow** dan pasang APK baru (data tetap ada selama aplikasi tidak dihapus dulu).
