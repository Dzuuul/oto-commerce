# OttoFikri - Marketplace Jual Beli Mobil Bekas

OttoFikri adalah sebuah platform marketplace yang dirancang untuk memudahkan proses jual beli mobil bekas di Indonesia. Proyek ini dibangun menggunakan Next.js dan bertujuan untuk menyediakan antarmuka yang ramah pengguna, transparan, dan aman bagi penjual maupun pembeli mobil bekas.

## Fitur Utama

*   **Pencarian Mobil:** Pengguna dapat mencari mobil bekas berdasarkan berbagai kriteria seperti merek, model, tahun, lokasi, dan harga.
*   **Daftar Mobil:** Menampilkan daftar mobil yang tersedia dengan detail informasi dan gambar.
*   **Detail Mobil:** Halaman detail untuk setiap mobil yang menampilkan spesifikasi lengkap, galeri foto, informasi penjual, dan fitur terkait.
*   **Inspeksi Mobil:** Menyediakan layanan atau informasi mengenai inspeksi mobil untuk memastikan kualitas kendaraan.
*   **Jual Mobil:** Fitur bagi pengguna untuk mendaftarkan mobil bekas mereka untuk dijual di platform.
*   **Autentikasi Pengguna:** Sistem registrasi dan login untuk pengguna.
*   **Profil Pengguna:** Halaman profil di mana pengguna dapat mengelola informasi pribadi, daftar mobil favorit, dan riwayat transaksi.
*   **Checkout & Pembayaran:** Proses checkout yang mudah dengan berbagai metode pembayaran.
*   **Favorit:** Pengguna dapat menyimpan mobil yang diminati ke daftar favorit.
*   **Desain Responsif:** Tampilan yang optimal di berbagai perangkat (desktop, tablet, mobile).

## Teknologi yang Digunakan

*   **Framework:** [Next.js](https://nextjs.org/) (React Framework)
*   **Bahasa Pemrograman:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Manajemen State (Kemungkinan):** React Context/Hooks, atau pustaka state management lainnya.
*   **UI Komponen:** Kemungkinan menggunakan [Shadcn/UI](https://ui.shadcn.com/) atau komponen kustom.

## Struktur Folder Utama
oto-commerce/
├── app/                  # Direktori utama untuk routing dan halaman (Next.js App Router)
│   ├── (area-fitur)/     # Contoh: blog, checkout, daftar-mobil, inspeksi, dll.
│   │   └── page.tsx      # Komponen halaman utama untuk fitur tersebut
│   ├── layout.tsx        # Layout utama aplikasi
│   └── globals.css       # Gaya global
├── components/           # Komponen React yang dapat digunakan kembali
│   ├── ui/               # Komponen UI dasar (Button, Card, Input, dll.)
│   ├── auth/             # Komponen terkait autentikasi (Login Form, Register Form)
│   └── ...               # Komponen spesifik fitur lainnya
├── lib/                  # Fungsi utilitas, helper, koneksi data, dll.
│   ├── data.ts           # Kemungkinan berisi fungsi untuk mengambil data
│   └── utils.ts          # Fungsi utilitas umum
├── public/               # Aset statis (gambar, font, dll.)
├── styles/               # File gaya tambahan (jika ada)
├── .gitignore
├── next.config.mjs       # Konfigurasi Next.js
├── package.json          # Informasi proyek dan dependensi
├── tsconfig.json         # Konfigurasi TypeScript
└── README.md             # File yang sedang Anda baca


## Memulai Proyek

1.  **Clone repository (jika ada):**
    ```bash
    git clone <URL_REPOSITORY_ANDA>
    cd oto-commerce
    ```

2.  **Install dependensi:**
    Pastikan Anda memiliki Node.js dan pnpm (atau npm/yarn) terinstal.
    ```bash
    pnpm install
    # atau
    # npm install
    # atau
    # yarn install
    ```

3.  **Jalankan server development:**
    ```bash
    pnpm dev
    # atau
    # npm run dev
    # atau
    # yarn dev
    ```
    Aplikasi akan berjalan di `http://localhost:3000`.

## Skrip yang Tersedia

Dalam file `package.json`, Anda akan menemukan beberapa skrip:

*   `pnpm dev`: Menjalankan aplikasi dalam mode development.
*   `pnpm build`: Mem-build aplikasi untuk production.
*   `pnpm start`: Menjalankan aplikasi yang sudah di-build (production mode).
*   `pnpm lint`: Menjalankan linter untuk memeriksa kualitas kode.

## Kontribusi

Saat ini, panduan kontribusi belum tersedia. Jika Anda tertarik untuk berkontribusi, silakan hubungi pemilik proyek.