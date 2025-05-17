"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Car } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-gray-900">AutoBekas</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-red-600 transition-colors">
              Beranda
            </Link>
            <Link
              href="/daftar-mobil"
              className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
            >
              Daftar Mobil
            </Link>
            <Link href="/tentang" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
              Tentang
            </Link>
            <Link href="/kontak" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
              Kontak
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="h-9 px-4 text-sm">
              Masuk
            </Button>
            <Button className="h-9 px-4 text-sm bg-red-600 hover:bg-red-700">Daftar</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/daftar-mobil"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Daftar Mobil
            </Link>
            <Link
              href="/tentang"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </Link>
            <Link
              href="/kontak"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </Link>
            <div className="mt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-center">
                Masuk
              </Button>
              <Button className="w-full justify-center bg-red-600 hover:bg-red-700">Daftar</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
