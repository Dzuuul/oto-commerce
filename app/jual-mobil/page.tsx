import { AccordionContent } from "@/components/ui/accordion";
import { AccordionTrigger } from "@/components/ui/accordion";
import { AccordionItem } from "@/components/ui/accordion";
import { Accordion } from "@/components/ui/accordion";
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn, SlideIn } from "@/components/ui/motion";
import SellForm from "@/components/sell/sell-form";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  Car,
  Phone,
  Mail,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jual Mobil | OttoFikri",
  description: "Jual mobil Anda dengan cepat dan harga terbaik di OttoFikri",
};

export default function SellCarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/80 z-10" />
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Jual Mobil"
            width={1200}
            height={600}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Jual Mobil Anda dengan Mudah
                </h1>
                <p className="text-xl text-gray-200 mb-6">
                  Dapatkan penawaran terbaik untuk mobil Anda dalam waktu 24
                  jam. Proses cepat, aman, dan transparan.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  <a href="#sell-form">Jual Sekarang</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bagaimana Cara Kerjanya?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses menjual mobil di OttoFikri sangat mudah dan cepat. Ikuti
              langkah-langkah berikut:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Car className="h-10 w-10 text-red-600" />,
                title: "Isi Data Mobil",
                description:
                  "Lengkapi formulir dengan data mobil Anda seperti merek, model, tahun, dan kondisi mobil.",
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-red-600" />,
                title: "Inspeksi Mobil",
                description:
                  "Tim kami akan melakukan inspeksi menyeluruh pada mobil Anda untuk menentukan nilai jual terbaik.",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-red-600" />,
                title: "Dapatkan Pembayaran",
                description:
                  "Terima pembayaran langsung ke rekening Anda setelah deal disepakati. Proses cepat dan aman.",
              },
            ].map((step, index) => (
              <SlideIn key={index} direction="up" delay={index * 0.1}>
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            ))}
          </div>
        </section>

        {/* Sell Form */}
        <section id="sell-form" className="mb-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <SlideIn direction="left" className="w-full lg:w-[61.8%]">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Jual Mobil Anda
                  </h2>
                  <Tabs defaultValue="sell">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger value="sell">Jual Cepat</TabsTrigger>
                      <TabsTrigger value="consign">Titip Jual</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sell">
                      <div className="mb-6">
                        <p className="text-gray-600">
                          Jual mobil Anda langsung kepada OttoFikri. Dapatkan
                          penawaran dalam 24 jam dan pembayaran langsung ke
                          rekening Anda.
                        </p>
                      </div>
                      <SellForm type="sell" />
                    </TabsContent>
                    <TabsContent value="consign">
                      <div className="mb-6">
                        <p className="text-gray-600">
                          Titipkan mobil Anda untuk dijual oleh OttoFikri. Kami
                          akan memasarkan mobil Anda dan Anda mendapatkan harga
                          terbaik.
                        </p>
                      </div>
                      <SellForm type="consign" />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" className="w-full lg:w-[38.2%]">
              <div className="space-y-6">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Mengapa Menjual di OttoFikri?
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Proses Cepat
                          </h4>
                          <p className="text-gray-600">
                            Dapatkan penawaran dalam 24 jam dan selesaikan
                            transaksi dalam 3 hari.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Harga Terbaik
                          </h4>
                          <p className="text-gray-600">
                            Kami menawarkan harga kompetitif berdasarkan kondisi
                            dan nilai pasar mobil Anda.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Proses Mudah
                          </h4>
                          <p className="text-gray-600">
                            Kami menangani semua dokumen dan administrasi untuk
                            Anda.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Pembayaran Aman
                          </h4>
                          <p className="text-gray-600">
                            Pembayaran langsung ke rekening Anda setelah
                            inspeksi dan deal disepakati.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden bg-gray-900 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Butuh Bantuan?</h3>
                    <p className="text-gray-300 mb-4">
                      Tim kami siap membantu Anda dengan pertanyaan seputar
                      penjualan mobil Anda.
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
                          <p className="font-medium">jual@ottofikri.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengalaman penjual yang telah menjual mobil melalui OttoFikri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                role: "Penjual Toyota Avanza",
                content:
                  "Proses penjualan sangat cepat dan mudah. Saya mendapatkan penawaran yang fair dan pembayaran langsung masuk ke rekening saya dalam 2 hari.",
                avatar: "/placeholder.svg?height=100&width=100&text=BS",
              },
              {
                name: "Siti Rahayu",
                role: "Penjual Honda Jazz",
                content:
                  "Awalnya ragu, tapi ternyata proses di OttoFikri sangat profesional. Inspeksi detail dan transparan, harga yang ditawarkan juga sangat baik.",
                avatar: "/placeholder.svg?height=100&width=100&text=SR",
              },
              {
                name: "Andi Wijaya",
                role: "Penjual Mitsubishi Pajero",
                content:
                  "Saya titip jual mobil di OttoFikri dan dalam 2 minggu sudah terjual dengan harga yang memuaskan. Sangat direkomendasikan!",
                avatar: "/placeholder.svg?height=100&width=100&text=AW",
              },
            ].map((testimonial, index) => (
              <SlideIn
                key={testimonial.name}
                direction="up"
                delay={index * 0.1}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-red-600 opacity-50" />
                      </div>
                      <p className="text-gray-700 mb-6 flex-grow">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jawaban untuk pertanyaan yang sering diajukan tentang penjualan
              mobil di OttoFikri
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Berapa lama proses penjualan mobil di OttoFikri?",
                  answer:
                    "Proses penjualan di OttoFikri sangat cepat. Anda akan mendapatkan penawaran dalam 24 jam setelah mengisi formulir. Jika penawaran disetujui, proses inspeksi dan pembayaran dapat diselesaikan dalam 3-5 hari kerja.",
                },
                {
                  question: "Bagaimana cara menentukan harga mobil saya?",
                  answer:
                    "Harga mobil ditentukan berdasarkan beberapa faktor seperti merek, model, tahun, kilometer, kondisi fisik, kondisi mesin, riwayat servis, dan nilai pasar saat ini. Tim penilai kami akan melakukan inspeksi menyeluruh untuk memberikan penawaran terbaik.",
                },
                {
                  question: "Apa saja dokumen yang perlu saya siapkan?",
                  answer:
                    "Dokumen yang perlu disiapkan antara lain: BPKB asli, STNK asli, bukti pembayaran pajak terbaru, KTP pemilik sesuai BPKB, buku servis (jika ada), dan kunci cadangan.",
                },
                {
                  question:
                    "Apakah ada biaya untuk menjual mobil di OttoFikri?",
                  answer:
                    "Tidak ada biaya untuk menjual mobil Anda di OttoFikri. Seluruh proses inspeksi dan penilaian gratis. Untuk opsi titip jual, kami akan mengenakan komisi dari harga jual yang disepakati.",
                },
                {
                  question: "Bagaimana jika mobil saya masih dalam kredit?",
                  answer:
                    "Anda tetap bisa menjual mobil yang masih dalam kredit. Tim kami akan membantu proses pelunasan kredit dan pengurusan dokumen dengan pihak leasing. Nilai pelunasan akan dikurangkan dari harga jual mobil.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <FadeIn>
          <section className="bg-red-600 rounded-2xl overflow-hidden">
            <div className="container mx-auto px-4 py-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">
                    Siap Menjual Mobil Anda?
                  </h2>
                  <p className="text-xl opacity-90 mb-6">
                    Dapatkan penawaran terbaik untuk mobil Anda dalam waktu 24
                    jam. Proses cepat, aman, dan transparan.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100"
                  >
                    <a href="#sell-form" className="flex items-center">
                      Jual Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="relative w-full md:w-auto h-[200px] md:h-[300px] aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Sell Now"
                    alt="Jual Mobil"
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
