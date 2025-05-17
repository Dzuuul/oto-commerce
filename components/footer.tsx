import Link from "next/link";
import { Car, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold text-white">OttoFikri</span>
            </div>
            <p className="text-sm mb-4">
              OttoFikri adalah marketplace jual beli mobil bekas terpercaya di
              Indonesia. Kami menyediakan mobil bekas berkualitas dengan harga
              terbaik.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Tautan Cepat
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/daftar-mobil"
                  className="text-sm hover:text-white transition-colors"
                >
                  Daftar Mobil
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="text-sm hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-sm hover:text-white transition-colors"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/jual-mobil"
                  className="text-sm hover:text-white transition-colors"
                >
                  Jual Mobil
                </Link>
              </li>
              <li>
                <Link
                  href="/beli-mobil"
                  className="text-sm hover:text-white transition-colors"
                >
                  Beli Mobil
                </Link>
              </li>
              <li>
                <Link
                  href="/tukar-tambah"
                  className="text-sm hover:text-white transition-colors"
                >
                  Tukar Tambah
                </Link>
              </li>
              <li>
                <Link
                  href="/inspeksi"
                  className="text-sm hover:text-white transition-colors"
                >
                  Inspeksi Mobil
                </Link>
              </li>
              <li>
                <Link
                  href="/kredit"
                  className="text-sm hover:text-white transition-colors"
                >
                  Kredit Mobil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <span className="block font-medium text-white">Alamat:</span>
                Jl. Otomotif No. 123, Jakarta Selatan, Indonesia
              </li>
              <li className="text-sm">
                <span className="block font-medium text-white">Telepon:</span>
                +62 21 1234 5678
              </li>
              <li className="text-sm">
                <span className="block font-medium text-white">Email:</span>
                info@ottofikri.com
              </li>
              <li className="text-sm">
                <span className="block font-medium text-white">
                  Jam Operasional:
                </span>
                Senin - Jumat: 08.00 - 17.00 <br />
                Sabtu: 09.00 - 15.00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} OttoFikri. Hak Cipta Dilindungi.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="/kebijakan-privasi"
              className="text-sm hover:text-white transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="text-sm hover:text-white transition-colors"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="/faq"
              className="text-sm hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
