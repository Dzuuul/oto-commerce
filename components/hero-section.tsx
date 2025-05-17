import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/placeholder/car6.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 md:py-24 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Temukan Mobil Bekas Impian Anda
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              Mobil terbaik, harga terjangkau, kualitas terpercaya. Pilihan
              terlengkap untuk kebutuhan Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Link href="/daftar-mobil">Lihat Daftar Mobil</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative h-[400px]">
            <Image
              src="/mascot-finding.png"
              alt="Mobil Impian"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}
