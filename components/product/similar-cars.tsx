import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn, SlideIn } from "@/components/ui/motion"
import { getSimilarCars } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { Star } from "lucide-react"

interface SimilarCarsProps {
  currentCarId: number
}

export default function SimilarCars({ currentCarId }: SimilarCarsProps) {
  const similarCars = getSimilarCars(currentCarId)

  if (!similarCars.length) return null

  return (
    <FadeIn className="mt-16">
      <div className="border-t pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobil Serupa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarCars.map((car, index) => (
            <SlideIn key={car.id} direction="up" delay={index * 0.1}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-red-600 hover:bg-red-700">{car.year}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
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
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
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
      </div>
    </FadeIn>
  )
}
