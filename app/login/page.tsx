import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/motion"
import LoginForm from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Masuk | AutoBekas",
  description: "Masuk ke akun AutoBekas Anda",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="w-full md:w-[38.2%] flex items-center justify-center p-8">
        <FadeIn className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <Image
                src="/placeholder.svg?height=60&width=180&text=AutoBekas"
                alt="AutoBekas Logo"
                width={180}
                height={60}
                className="mx-auto"
              />
            </Link>
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Selamat Datang Kembali</h1>
            <p className="text-gray-600">Masuk ke akun Anda untuk melanjutkan</p>
          </div>

          <LoginForm />

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Belum memiliki akun?{" "}
              <Link href="/register" className="text-red-600 hover:text-red-700 font-medium">
                Daftar sekarang
              </Link>
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-[61.8%] bg-gray-900 relative">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=AutoBekas"
          alt="AutoBekas Login"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Temukan Mobil Bekas Impian Anda</h2>
            <p className="text-xl opacity-90">
              Marketplace jual beli mobil bekas terpercaya dengan ribuan pilihan mobil berkualitas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
