import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, SlideIn } from "@/components/ui/motion";
import InspectionForm from "@/components/inspection/inspection-form";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Clipboard,
  Car,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inspeksi Mobil | OttoFikri",
  description: "Layanan inspeksi mobil profesional dari OttoFikri",
};

export default function InspectionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/80 z-10" />
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Inspeksi Mobil"
            width={1200}
            height={600}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Inspeksi Mobil Profesional
                </h1>
                <p className="text-xl text-gray-200 mb-6">
                  Dapatkan kepastian kondisi mobil dengan layanan inspeksi
                  menyeluruh dari tim teknisi berpengalaman kami.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  <a href="#inspection-form">Jadwalkan Inspeksi</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Inspection Points */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Inspeksi 175+ Titik
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim teknisi kami melakukan pemeriksaan menyeluruh pada lebih dari
              175 titik untuk memastikan kondisi mobil yang sebenarnya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Car className="h-10 w-10 text-red-600" />,
                title: "Eksterior & Bodi",
                points: [
                  "Kondisi cat dan bodi",
                  "Keaslian panel",
                  "Bekas tabrakan atau perbaikan",
                  "Kondisi kaca dan lampu",
                  "Kondisi ban dan velg",
                ],
              },
              {
                icon: <Wrench className="h-10 w-10 text-red-600" />,
                title: "Mesin & Performa",
                points: [
                  "Kondisi mesin dan suara",
                  "Sistem pendingin",
                  "Sistem bahan bakar",
                  "Transmisi dan kopling",
                  "Sistem rem dan suspensi",
                ],
              },
              {
                icon: <Clipboard className="h-10 w-10 text-red-600" />,
                title: "Interior & Dokumen",
                points: [
                  "Kondisi interior dan jok",
                  "Fungsi fitur elektronik",
                  "AC dan sistem audio",
                  "Keaslian odometer",
                  "Kelengkapan dokumen",
                ],
              },
            ].map((category, index) => (
              <SlideIn key={index} direction="up" delay={index * 0.1}>
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">
                        {category.title}
                      </h3>
                      <ul className="space-y-2 flex-grow">
                        {category.points.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            ))}
          </div>
        </section>

        {/* Inspection Process */}
        <section className="mb-16 bg-gray-50 py-16 rounded-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Proses Inspeksi
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kami melakukan inspeksi dengan standar tinggi untuk memberikan
                hasil yang akurat dan transparan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Jadwalkan Inspeksi",
                  description:
                    "Isi formulir dan pilih waktu yang sesuai untuk inspeksi mobil Anda.",
                },
                {
                  step: "2",
                  title: "Inspeksi Dilakukan",
                  description:
                    "Tim teknisi kami akan melakukan inspeksi menyeluruh pada mobil Anda.",
                },
                {
                  step: "3",
                  title: "Laporan Disiapkan",
                  description:
                    "Kami menyiapkan laporan detail tentang kondisi mobil Anda.",
                },
                {
                  step: "4",
                  title: "Hasil Inspeksi",
                  description:
                    "Anda menerima laporan lengkap dengan rekomendasi dan estimasi nilai mobil.",
                },
              ].map((step, index) => (
                <SlideIn key={index} direction="up" delay={index * 0.1}>
                  <div className="relative">
                    <div className="absolute top-0 left-0 -mt-2 -ml-2 bg-red-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <Card className="border-0 shadow-lg pt-8 h-full">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </CardContent>
                    </Card>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </section>

        {/* Inspection Form */}
        <section id="inspection-form" className="mb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <SlideIn direction="left" className="w-full lg:w-[61.8%]">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Jadwalkan Inspeksi
                  </h2>
                  <InspectionForm />
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" className="w-full lg:w-[38.2%]">
              <div className="space-y-6">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Mengapa Inspeksi dengan OttoFikri?
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Tim Ahli
                          </h4>
                          <p className="text-gray-600">
                            Inspeksi dilakukan oleh teknisi berpengalaman dengan
                            sertifikasi resmi.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Inspeksi Menyeluruh
                          </h4>
                          <p className="text-gray-600">
                            Pemeriksaan lebih dari 175 titik untuk memastikan
                            kondisi mobil yang sebenarnya.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Laporan Detail
                          </h4>
                          <p className="text-gray-600">
                            Anda mendapatkan laporan lengkap dengan foto dan
                            rekomendasi perbaikan.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Estimasi Nilai
                          </h4>
                          <p className="text-gray-600">
                            Dapatkan estimasi nilai jual mobil Anda berdasarkan
                            kondisi aktual.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Biaya Inspeksi
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">
                          Mobil Sedan/Hatchback
                        </span>
                        <span className="font-bold">Rp 500.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Mobil SUV/MPV</span>
                        <span className="font-bold">Rp 650.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Mobil Mewah/Sport</span>
                        <span className="font-bold">Rp 850.000</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        * Biaya inspeksi akan dikembalikan jika Anda menjual
                        atau membeli mobil melalui OttoFikri.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden bg-gray-900 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Butuh Bantuan?</h3>
                    <p className="text-gray-300 mb-4">
                      Tim kami siap membantu Anda dengan pertanyaan seputar
                      layanan inspeksi mobil.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center mr-3">
                          <Phone className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Telepon</p>
                          <p className="font-medium">+62 21 1234 5678</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center mr-3">
                          <Mail className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="font-medium">inspeksi@ottofikri.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* Inspection Sample */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contoh Laporan Inspeksi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Laporan inspeksi kami memberikan informasi detail tentang kondisi
              mobil yang diperiksa.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl mb-4">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Inspection Report"
                      alt="Laporan Inspeksi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="relative aspect-[4/3] w-full overflow-hidden rounded-md"
                      >
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Detail ${i}`}
                          alt={`Detail Inspeksi ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">
                        Honda Civic Turbo 2020
                      </h3>
                      <Badge className="bg-green-100 text-green-800">
                        Sangat Baik
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Kilometer</p>
                        <p className="font-medium">25.000 km</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Transmisi</p>
                        <p className="font-medium">Otomatis</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Bahan Bakar</p>
                        <p className="font-medium">Bensin</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Warna</p>
                        <p className="font-medium">Merah Metalik</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Kondisi Eksterior
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                          <span>Cat Original</span>
                        </div>
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                          <span>Panel Asli</span>
                        </div>
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                          <span>Tidak Bekas Banjir</span>
                        </div>
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                          <span>Tidak Bekas Tabrakan</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Kondisi Mesin
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                          <span>Mesin Halus</span>
                        </div>
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                          <span>Transmisi Responsif</span>
                        </div>
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                          <span>Sistem Pendingin Baik</span>
                        </div>
                        <div className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                          <span>Oli Bersih</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Rekomendasi
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Mobil dalam kondisi sangat baik dan terawat. Beberapa
                        rekomendasi:
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Ganti oli dan filter dalam 1.000 km</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Periksa kampas rem depan dalam 5.000 km</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <FadeIn>
          <section className="bg-red-600 rounded-2xl overflow-hidden">
            <div className="container mx-auto px-4 py-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">
                    Dapatkan Kepastian Sebelum Membeli
                  </h2>
                  <p className="text-xl opacity-90 mb-6">
                    Jadwalkan inspeksi mobil sekarang dan dapatkan laporan
                    detail tentang kondisi mobil yang ingin Anda beli.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100"
                  >
                    <a href="#inspection-form" className="flex items-center">
                      Jadwalkan Inspeksi
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="relative w-full md:w-auto h-[200px] md:h-[300px] aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Inspection"
                    alt="Inspeksi Mobil"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </FadeIn>
    </div>
  );
}
