import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FadeIn, SlideIn } from "@/components/ui/motion"
import CheckoutForm from "@/components/checkout/checkout-form"
import PaymentMethod from "@/components/checkout/payment-method"
import { getCar } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { ArrowLeft, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Checkout | AutoBekas",
  description: "Selesaikan pembelian mobil bekas Anda di AutoBekas",
}

export default function CheckoutPage({ searchParams }: { searchParams: { id?: string } }) {
  const carId = searchParams.id ? Number.parseInt(searchParams.id) : null
  const car = carId ? getCar(carId) : null

  if (!car) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        <div className="mb-8">
          <Link href={`/mobil/${car.id}`} className="flex items-center text-red-600 hover:text-red-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Detail Mobil
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="w-full lg:w-[61.8%]">
            <SlideIn direction="left">
              <div className="space-y-8">
                <CheckoutForm />
                <PaymentMethod />
              </div>
            </SlideIn>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[38.2%]">
            <SlideIn direction="right">
              <div className="sticky top-24 space-y-6">
                <Card className="border shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Ringkasan Pesanan</h2>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                        <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{car.name}</h3>
                        <p className="text-sm text-gray-500">
                          Tahun {car.year} • {car.mileage}
                        </p>
                        <p className="mt-1 font-semibold">{formatPrice(car.price)}</p>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Harga Mobil</span>
                        <span className="font-medium">{formatPrice(car.price)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Biaya Administrasi</span>
                        <span className="font-medium">{formatPrice(2500000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pajak</span>
                        <span className="font-medium">{formatPrice(car.price * 0.01)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Biaya Pengiriman</span>
                        <span className="font-medium">{formatPrice(1000000)}</span>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{formatPrice(car.price + 2500000 + car.price * 0.01 + 1000000)}</span>
                    </div>

                    <div className="mt-6 flex items-center gap-2 rounded-lg bg-gray-50 p-4 text-sm">
                      <ShieldCheck className="h-5 w-5 text-green-600" />
                      <p>Pembayaran aman & terjamin dengan perlindungan pembeli AutoBekas.</p>
                    </div>
                  </div>
                </Card>

                <div className="bg-white rounded-lg border p-6 shadow-sm">
                  <h3 className="font-semibold text-lg mb-4">Butuh Bantuan?</h3>
                  <p className="text-gray-600 mb-4">
                    Tim kami siap membantu Anda dengan pertanyaan seputar proses pembelian.
                  </p>
                  <Button variant="outline" className="w-full">
                    Hubungi Customer Service
                  </Button>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
