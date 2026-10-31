RUANG JARINGAN — Website belajar IT Infrastructure

ISI FOLDER
index.html          halaman utama
assets/style.css    tampilan (PC + mobile)
assets/app.js       logika: materi, kuis, poster, kalkulator subnet
assets/data.js      isi materi dan bank soal (edit di sini untuk menambah materi/soal)

CARA MENJALANKAN DI KOMPUTER
Ekstrak zip, lalu klik dua kali index.html. Tidak butuh instalasi.
(Font Google butuh internet; tanpa internet tampilan tetap jalan dengan font bawaan.)

CARA ONLINE (GRATIS, pilih salah satu)
1. Netlify Drop: buka app.netlify.com/drop, seret FOLDER ini. Selesai, dapat link.
2. GitHub Pages: buat repo, upload semua file, Settings > Pages > Deploy from branch (main, root).
3. Cloudflare Pages / Vercel: import repo atau upload folder, tanpa build command.

CARA MENAMBAH MATERI / SOAL
Buka assets/data.js. Materi: objek di lessons (id, title, desc, sections [[judul, isi]]).
Soal: questions.<id> berisi [pertanyaan, teks benar, [4 pilihan], indeks benar 0-3, pembahasan].
Catatan: isi kuis perlu dicek ulang dengan modul/dosen sebelum dipakai ujian.
