import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, SlideIn } from "@/components/ui/motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontak Kami | AutoBekas",
  description: "Hubungi tim AutoBekas untuk pertanyaan, saran, atau bantuan",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <FadeIn>
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim kami siap membantu Anda dengan pertanyaan, saran, atau bantuan yang Anda butuhkan.
          </p>
        </section>
      </FadeIn>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Information */}
        <SlideIn direction="left" className="w-full lg:w-[38.2%]">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-red-600" />
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Phone className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Telepon</h3>
                      <p className="text-gray-700">+62 21 1234 5678</p>
                      <p className="text-gray-700">+62 812 3456 7890 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Mail className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">info@autobekas.com</p>
                      <p className="text-gray-700">support@autobekas.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Alamat</h3>
                      <p className="text-gray-700">
                        Gedung AutoBekas Tower, Lantai 12
                        <br />
                        Jl. Otomotif No. 123, Jakarta Selatan
                        <br />
                        Indonesia 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Clock className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Jam Operasional</h3>
                      <p className="text-gray-700">
                        Senin - Jumat: 08.00 - 17.00
                        <br />
                        Sabtu: 09.00 - 15.00
                        <br />
                        Minggu & Hari Libur: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gray-900" />
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Lokasi Kami</h2>
                <div className="aspect-[4/3] w-full bg-gray-200 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-gray-400" />
                    <span className="sr-only">Map Placeholder</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  Kantor pusat kami terletak di pusat bisnis Jakarta Selatan, mudah diakses dengan transportasi umum dan
                  memiliki area parkir yang luas.
                </p>
              </CardContent>
            </Card>
          </div>
        </SlideIn>

        {/* Contact Form */}
        <SlideIn direction="right" className="w-full lg:w-[61.8%]">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="h-2 bg-red-600" />
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nama Lengkap
                    </label>
                    <Input id="name" placeholder="Masukkan nama lengkap Anda" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Masukkan email Anda" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Nomor Telepon
                    </label>
                    <Input id="phone" placeholder="Masukkan nomor telepon Anda" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subjek
                    </label>
                    <Input id="subject" placeholder="Masukkan subjek pesan" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Pesan
                  </label>
                  <Textarea id="message" placeholder="Tulis pesan Anda di sini" rows={6} />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  <Send className="mr-2 h-4 w-4" /> Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Pertanyaan Umum</h2>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Bagaimana cara membeli mobil di AutoBekas?</h3>
                <p className="text-gray-700">
                  Anda dapat menjelajahi daftar mobil di website kami, memilih mobil yang Anda minati, melakukan
                  pemesanan, dan menyelesaikan pembayaran. Tim kami akan membantu Anda dalam setiap langkah prosesnya.
                </p>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Bagaimana cara menjual mobil di AutoBekas?</h3>
                <p className="text-gray-700">
                  Anda dapat mendaftarkan mobil Anda melalui website kami. Tim kami akan melakukan inspeksi dan membantu
                  Anda menentukan harga yang kompetitif. Setelah mobil terjual, Anda akan menerima pembayaran.
                </p>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Apakah AutoBekas menyediakan garansi?</h3>
                <p className="text-gray-700">
                  Ya, AutoBekas menyediakan garansi mesin dan transmisi hingga 1 tahun untuk mobil yang Anda beli
                  melalui platform kami.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Bagaimana jika saya memiliki pertanyaan lain yang tidak tercantum di sini?
                </h3>
                <p className="text-gray-700">
                  Anda dapat menghubungi tim customer service kami melalui telepon, email, atau mengisi formulir kontak
                  di atas. Kami akan dengan senang hati membantu Anda.
                </p>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
