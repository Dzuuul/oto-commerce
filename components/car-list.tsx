import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn, SlideIn } from "@/components/ui/motion"
import AddToFavoriteButton from "@/components/product/add-to-favorite-button"
import { formatPrice } from "@/lib/utils"
import { Car, MapPin, Star } from "lucide-react"

interface CarListProps {
  cars: any[]
  layout?: "grid" | "list"
}

export default function CarList({ cars = [], layout = "grid" }: CarListProps) {
  if (layout === "list") {
    return (
      <div className="space-y-6">
        {cars.map((car, index) => (
          <SlideIn key={car.id} direction="up" delay={index * 0.05}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-[280px] h-[200px]">
                    <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <Badge className="bg-red-600">{car.year}</Badge>
                      <AddToFavoriteButton carId={car.id} />
                    </div>
                  </div>
                  <div className="flex-grow p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">
                          <Link href={`/mobil/${car.id}`} className="hover:text-red-600 transition-colors">
                            {car.name}
                          </Link>
                        </h2>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center text-amber-500">
                            <Star className="fill-current h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">{car.rating}</span>
                          </div>
                          <span className="text-gray-400">•</span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            {car.location}
                          </div>
                        </div>
                        <p className="text-xl font-bold text-gray-900 mb-4">{formatPrice(car.price)}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Car className="h-4 w-4" />
                            <span>Kondisi: {car.condition}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>🛣️</span>
                            <span>{car.mileage}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 mt-4 md:mt-0">
                        <Button className="bg-red-600 hover:bg-red-700">
                          <Link href={`/mobil/${car.id}`} className="flex items-center justify-center w-full h-full">
                            Lihat Detail
                          </Link>
                        </Button>
                        <Button variant="outline">
                          <Link
                            href={`/checkout?id=${car.id}`}
                            className="flex items-center justify-center w-full h-full"
                          >
                            Beli Sekarang
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideIn>
        ))}
      </div>
    )
  }

  return (
    <FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cars.map((car, index) => (
          <SlideIn key={car.id} direction="up" delay={index * 0.1}>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <Badge className="bg-red-600 hover:bg-red-700">{car.year}</Badge>
                  <AddToFavoriteButton carId={car.id} />
                </div>
              </div>
              <CardContent className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-900">{car.name}</h3>
                  <div className="flex items-center text-amber-500">
                    <Star className="fill-current h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                </div>
                <p className="text-xl font-bold text-gray-900 my-2">{formatPrice(car.price)}</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-1">📍</span> {car.location}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">🛣️</span> {car.mileage}
                  </div>
                  <div className="flex items-center col-span-2">
                    <span className="mr-1">✅</span> Kondisi: {car.condition}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-2">
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                  <Link href={`/mobil/${car.id}`} className="w-full">
                    Lihat Detail
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </SlideIn>
        ))}
      </div>
    </FadeIn>
  )
}
