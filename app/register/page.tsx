import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";
import RegisterForm from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Daftar | OttoFikri",
  description: "Daftar akun baru di OttoFikri",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="hidden md:block md:w-[61.8%] bg-gray-900 relative">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=OttoFikri"
          alt="OttoFikri Register"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-xl text-white">
            <h2 className="text-3xl font-bold mb-4">
              Bergabunglah dengan OttoFikri
            </h2>
            <p className="text-xl opacity-90">
              Dapatkan akses ke ribuan mobil bekas berkualitas dan nikmati
              pengalaman jual beli yang aman dan terpercaya.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-[38.2%] flex items-center justify-center p-8">
        <FadeIn className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <Image
                src="/placeholder.svg?height=60&width=180&text=OttoFikri"
                alt="OttoFikri Logo"
                width={180}
                height={60}
                className="mx-auto"
              />
            </Link>
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Buat Akun Baru
            </h1>
            <p className="text-gray-600">
              Daftar untuk mulai menjelajahi mobil bekas berkualitas
            </p>
          </div>

          <RegisterForm />

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Sudah memiliki akun?{" "}
              <Link
                href="/login"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Masuk
              </Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
