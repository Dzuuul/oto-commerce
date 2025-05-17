import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, SlideIn } from "@/components/ui/motion";
import { Check, Users, ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | OttoFikri",
  description:
    "Pelajari lebih lanjut tentang OttoFikri, marketplace jual beli mobil bekas terpercaya di Indonesia",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative overflow-hidden rounded-2xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/80 z-10" />
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="OttoFikri Team"
            width={1200}
            height={600}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Tentang OttoFikri
                </h1>
                <p className="text-xl text-gray-200 mb-6">
                  Marketplace jual beli mobil bekas terpercaya di Indonesia.
                  Kami menghubungkan pembeli dan penjual dengan cara yang aman,
                  transparan, dan terpercaya.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Our Story */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <SlideIn direction="left" className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Our Story"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </SlideIn>
          <SlideIn direction="right" className="w-full md:w-1/2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Cerita Kami</h2>
              <p className="text-gray-700">
                OttoFikri didirikan pada tahun 2018 dengan visi untuk merevolusi
                cara orang membeli dan menjual mobil bekas di Indonesia. Kami
                melihat bahwa pasar mobil bekas sering kali penuh dengan
                ketidakpastian dan kurangnya transparansi, yang membuat banyak
                orang ragu untuk bertransaksi.
              </p>
              <p className="text-gray-700">
                Berangkat dari masalah tersebut, kami membangun platform yang
                mengedepankan transparansi, keamanan, dan kemudahan. Setiap
                mobil yang terdaftar di OttoFikri melalui proses inspeksi ketat
                untuk memastikan kualitasnya.
              </p>
              <p className="text-gray-700">
                Saat ini, OttoFikri telah menjadi salah satu marketplace mobil
                bekas terbesar di Indonesia dengan jaringan yang tersebar di
                lebih dari 20 kota besar. Kami terus berinovasi untuk memberikan
                pengalaman terbaik bagi pengguna kami.
              </p>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Our Values */}
      <FadeIn>
        <section className="mb-16 py-16 bg-gray-50 rounded-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nilai-Nilai Kami
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kami berkomitmen untuk memberikan layanan terbaik dengan
                berpedoman pada nilai-nilai berikut:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SlideIn direction="up" delay={0.1}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                        <ShieldCheck className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Kepercayaan</h3>
                      <p className="text-gray-600">
                        Kami membangun kepercayaan melalui transparansi dan
                        kejujuran dalam setiap transaksi.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>

              <SlideIn direction="up" delay={0.2}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Kualitas</h3>
                      <p className="text-gray-600">
                        Kami memastikan setiap mobil yang terdaftar memenuhi
                        standar kualitas yang tinggi.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>

              <SlideIn direction="up" delay={0.3}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Pelayanan</h3>
                      <p className="text-gray-600">
                        Kami berkomitmen untuk memberikan pelayanan terbaik dan
                        pengalaman yang menyenangkan.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <SlideIn
            direction="left"
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Mengapa Memilih OttoFikri?
              </h2>
              <p className="text-gray-700">
                OttoFikri hadir untuk memberikan pengalaman jual beli mobil
                bekas yang aman, nyaman, dan terpercaya. Berikut adalah beberapa
                alasan mengapa Anda harus memilih OttoFikri:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Inspeksi Ketat
                    </h3>
                    <p className="text-gray-700">
                      Setiap mobil melalui 175+ titik inspeksi oleh teknisi
                      berpengalaman untuk memastikan kualitasnya.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Garansi Mesin & Transmisi
                    </h3>
                    <p className="text-gray-700">
                      Kami memberikan garansi hingga 1 tahun untuk mesin dan
                      transmisi pada mobil yang Anda beli.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Dokumen Terjamin
                    </h3>
                    <p className="text-gray-700">
                      Kami memastikan semua dokumen mobil lengkap dan sah secara
                      hukum untuk ketenangan Anda.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Proses Mudah
                    </h3>
                    <p className="text-gray-700">
                      Proses jual beli yang mudah dan cepat, dengan dukungan tim
                      customer service yang responsif.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </SlideIn>
          <SlideIn
            direction="right"
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Why Choose Us"
                alt="Why Choose OttoFikri"
                fill
                className="object-cover"
              />
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Our Achievements */}
      <FadeIn>
        <section className="mb-16 py-16 bg-gray-900 text-white rounded-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pencapaian Kami</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dalam perjalanan kami, OttoFikri telah mencapai berbagai
                milestone yang membanggakan.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <SlideIn direction="up" delay={0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">
                    50.000+
                  </div>
                  <p className="text-gray-300">Mobil Terjual</p>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.2}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">
                    20+
                  </div>
                  <p className="text-gray-300">Kota di Indonesia</p>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.3}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">
                    100.000+
                  </div>
                  <p className="text-gray-300">Pengguna Aktif</p>
                </div>
              </SlideIn>
              <SlideIn direction="up" delay={0.4}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">
                    4.8/5
                  </div>
                  <p className="text-gray-300">Rating Kepuasan</p>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Our Team */}
      <FadeIn>
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kenali orang-orang hebat di balik kesuksesan OttoFikri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Budi Santoso",
                role: "CEO & Founder",
                image: "/placeholder.svg?height=400&width=400&text=BS",
              },
              {
                name: "Siti Rahayu",
                role: "COO",
                image: "/placeholder.svg?height=400&width=400&text=SR",
              },
              {
                name: "Andi Wijaya",
                role: "CTO",
                image: "/placeholder.svg?height=400&width=400&text=AW",
              },
              {
                name: "Maya Putri",
                role: "CMO",
                image: "/placeholder.svg?height=400&width=400&text=MP",
              },
            ].map((member, index) => (
              <SlideIn key={member.name} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="mb-16 bg-red-600 rounded-2xl overflow-hidden">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">
                  Siap Bergabung dengan OttoFikri?
                </h2>
                <p className="text-xl opacity-90 mb-6">
                  Temukan mobil bekas impian Anda atau jual mobil Anda dengan
                  cepat dan aman bersama OttoFikri.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary">
                    Jual Mobil Anda
                  </Button>
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100"
                  >
                    Cari Mobil Bekas
                  </Button>
                </div>
              </div>
              <div className="relative w-full md:w-auto h-[200px] md:h-[300px] aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Join Us"
                  alt="Join OttoFikri"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
