import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, SlideIn } from "@/components/ui/motion"
import { formatPrice } from "@/lib/utils"
import { getFavoriteCars } from "@/lib/data"
import { Heart, Trash2, Car } from "lucide-react"

export const metadata: Metadata = {
  title: "Favorit | AutoBekas",
  description: "Daftar mobil favorit Anda di AutoBekas",
}

export default function FavoritePage() {
  const favoriteCars = getFavoriteCars()

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mobil Favorit</h1>
          <p className="text-gray-600">Daftar mobil yang Anda simpan untuk dibandingkan atau dibeli nanti.</p>
        </div>

        {favoriteCars.length > 0 ? (
          <div className="space-y-6">
            {favoriteCars.map((car, index) => (
              <SlideIn key={car.id} direction="up" delay={index * 0.1}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative w-full sm:w-[200px] h-[150px]">
                        <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                      </div>
                      <div className="flex-grow p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1">
                              <Link href={`/mobil/${car.id}`} className="hover:text-red-600 transition-colors">
                                {car.name}
                              </Link>
                            </h2>
                            <p className="text-gray-500 mb-2">
                              Tahun {car.year} • {car.mileage} • {car.location}
                            </p>
                            <p className="text-xl font-bold text-gray-900 mb-4">{formatPrice(car.price)}</p>
                            <div className="flex items-center text-sm text-gray-500">
                              <span className="inline-flex items-center mr-4">
                                <Car className="mr-1 h-4 w-4" />
                                Kondisi: {car.condition}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button className="bg-red-600 hover:bg-red-700">
                              <Link
                                href={`/mobil/${car.id}`}
                                className="flex items-center justify-center w-full h-full"
                              >
                                Lihat Detail
                              </Link>
                            </Button>
                            <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Hapus dari Favorit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            ))}

            <div className="flex justify-between items-center pt-6">
              <p className="text-gray-600">Menampilkan {favoriteCars.length} mobil favorit</p>
              <Button variant="outline">
                <Link href="/daftar-mobil" className="flex items-center">
                  Jelajahi Lebih Banyak Mobil
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <SlideIn direction="up">
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-gray-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Belum Ada Mobil Favorit</h2>
                <p className="text-gray-600 text-center max-w-md mb-6">
                  Anda belum menyimpan mobil ke daftar favorit. Jelajahi daftar mobil kami dan tambahkan ke favorit
                  untuk melihatnya di sini.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Link href="/daftar-mobil">Jelajahi Mobil</Link>
                </Button>
              </CardContent>
            </Card>
          </SlideIn>
        )}
      </FadeIn>
    </div>
  )
}
