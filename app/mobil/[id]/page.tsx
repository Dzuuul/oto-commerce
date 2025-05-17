import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FadeIn, SlideIn } from "@/components/ui/motion"
import AddToFavoriteButton from "@/components/product/add-to-favorite-button"
import SimilarCars from "@/components/product/similar-cars"
import { getCar } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { Car, Calendar, MapPin, Fuel, Gauge, Settings, ShieldCheck, ArrowRight, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Detail Mobil | AutoBekas",
  description: "Lihat detail lengkap mobil bekas berkualitas di AutoBekas",
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const carId = Number.parseInt(params.id)
  const car = getCar(carId)

  if (!car) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn className="flex flex-col md:flex-row gap-8">
        {/* Breadcrumb */}
        <div className="w-full mb-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-red-600 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href="/daftar-mobil" className="hover:text-red-600 transition-colors">
                    Daftar Mobil
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-gray-700 font-medium">{car.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Left Column - Images */}
        <div className="w-full md:w-[61.8%]">
          <SlideIn direction="left">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-4">
              <Image
                src={car.image || "/placeholder.svg?height=600&width=800"}
                alt={car.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Badge className="bg-red-600">{car.year}</Badge>
                <AddToFavoriteButton carId={car.id} />
                <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>
          </SlideIn>

          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <SlideIn key={i} direction="up" delay={i * 0.1}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md cursor-pointer hover:opacity-80 transition-opacity">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Image ${i}`}
                    alt={`${car.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SlideIn>
            ))}
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Gambaran Umum</TabsTrigger>
              <TabsTrigger value="specs">Spesifikasi</TabsTrigger>
              <TabsTrigger value="history">Riwayat</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <FadeIn>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Deskripsi</h3>
                  <p className="text-gray-700">
                    {car.name} tahun {car.year} dalam kondisi {car.condition.toLowerCase()}. Mobil ini telah melalui
                    inspeksi ketat oleh tim AutoBekas dan dinyatakan layak jual. Mobil ini memiliki kilometer rendah dan
                    terawat dengan baik oleh pemilik sebelumnya.
                  </p>
                  <p className="text-gray-700">
                    Interior dan eksterior dalam kondisi prima. Mesin responsif dan transmisi halus. Semua fitur
                    keselamatan berfungsi dengan baik. Dokumen lengkap dan pajak aktif.
                  </p>

                  <h3 className="text-lg font-semibold pt-2">Fitur Utama</h3>
                  <ul className="grid grid-cols-2 gap-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-green-600" /> Garansi Mesin 1 Tahun
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-green-600" /> Bebas Banjir & Tabrakan
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-green-600" /> Dokumen Lengkap
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-green-600" /> Pajak Aktif
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-green-600" /> Servis Rutin
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-green-600" /> Buku Manual & Servis
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </TabsContent>
            <TabsContent value="specs">
              <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Spesifikasi Umum</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span className="text-gray-500">Merek</span>
                        <span className="font-medium">{car.name.split(" ")[0]}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Model</span>
                        <span className="font-medium">{car.name.split(" ").slice(1).join(" ")}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Tahun</span>
                        <span className="font-medium">{car.year}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Warna</span>
                        <span className="font-medium">Putih Metalik</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Transmisi</span>
                        <span className="font-medium">Otomatis</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Bahan Bakar</span>
                        <span className="font-medium">Bensin</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Kapasitas Mesin</span>
                        <span className="font-medium">1.500 cc</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Kilometer</span>
                        <span className="font-medium">{car.mileage}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Fitur & Teknologi</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span className="text-gray-500">Airbag</span>
                        <span className="font-medium">Ya (Depan & Samping)</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">ABS</span>
                        <span className="font-medium">Ya</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Power Steering</span>
                        <span className="font-medium">Ya</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Power Window</span>
                        <span className="font-medium">Ya</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">AC</span>
                        <span className="font-medium">Ya (Dual Zone)</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Entertainment</span>
                        <span className="font-medium">Touchscreen 8"</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Bluetooth</span>
                        <span className="font-medium">Ya</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Kursi</span>
                        <span className="font-medium">Kulit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </TabsContent>
            <TabsContent value="history">
              <FadeIn>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Riwayat Servis</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Servis Berkala 40.000 km</h4>
                          <p className="text-sm text-gray-500">Bengkel Resmi {car.name.split(" ")[0]}</p>
                        </div>
                        <span className="text-sm text-gray-500">10 Jan 2023</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        Ganti oli, filter oli, filter udara, filter kabin, cek rem, cek suspensi, balancing & spooring.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Servis Berkala 30.000 km</h4>
                          <p className="text-sm text-gray-500">Bengkel Resmi {car.name.split(" ")[0]}</p>
                        </div>
                        <span className="text-sm text-gray-500">15 Jul 2022</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        Ganti oli, filter oli, cek rem, cek sistem pendingin, cek baterai.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Servis Berkala 20.000 km</h4>
                          <p className="text-sm text-gray-500">Bengkel Resmi {car.name.split(" ")[0]}</p>
                        </div>
                        <span className="text-sm text-gray-500">22 Jan 2022</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        Ganti oli, filter oli, filter udara, cek rem, cek suspensi.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold pt-4">Riwayat Kepemilikan</h3>
                  <p className="text-gray-700">
                    Mobil ini merupakan tangan kedua. Pemilik pertama adalah eksekutif perusahaan yang menggunakan mobil
                    ini untuk keperluan harian. Semua servis dilakukan di bengkel resmi dan tercatat dengan baik.
                  </p>
                </div>
              </FadeIn>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Details & Checkout */}
        <div className="w-full md:w-[38.2%]">
          <SlideIn direction="right">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-lg border p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h1>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{car.location}</span>
                </div>

                <div className="text-3xl font-bold text-gray-900 mb-6">{formatPrice(car.price)}</div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Tahun</p>
                      <p className="font-medium">{car.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Kilometer</p>
                      <p className="font-medium">{car.mileage}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Bahan Bakar</p>
                      <p className="font-medium">Bensin</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Transmisi</p>
                      <p className="font-medium">Otomatis</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 h-12 text-base">
                    <Link href={`/checkout?id=${car.id}`} className="flex items-center justify-center w-full h-full">
                      Beli Sekarang
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full h-12 text-base">
                    <Car className="mr-2 h-5 w-5" /> Atur Test Drive
                  </Button>
                  <Button variant="ghost" className="w-full text-base justify-start p-0 h-auto hover:bg-transparent">
                    <span className="text-red-600 hover:text-red-700 flex items-center">
                      Tanya Penjual
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Penjual</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100&text=AB"
                      alt="AutoBekas Official"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">AutoBekas Official</h4>
                    <p className="text-sm text-gray-500">Dealer Resmi</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Lihat Profil Penjual
                </Button>
              </div>
            </div>
          </SlideIn>
        </div>
      </FadeIn>

      <SimilarCars currentCarId={car.id} />
    </div>
  )
}
