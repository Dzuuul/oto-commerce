"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { CreditCard, Landmark, Wallet, Clock, AlertCircle } from "lucide-react"

export default function PaymentMethod() {
  const [paymentType, setPaymentType] = useState("full")
  const [paymentMethod, setPaymentMethod] = useState("bank_transfer")

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-3">
        <h2 className="text-xl font-bold text-gray-900">Metode Pembayaran</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-4">Jenis Pembayaran</h3>
            <Tabs value={paymentType} onValueChange={setPaymentType} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="full">Pembayaran Penuh</TabsTrigger>
                <TabsTrigger value="tempo">Pembayaran Tempo</TabsTrigger>
              </TabsList>
              <TabsContent value="full" className="pt-4">
                <div className="rounded-lg border p-4 bg-gray-50">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Wallet className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Pembayaran Penuh</h4>
                      <p className="text-gray-600 text-sm">
                        Bayar penuh sekarang dan dapatkan mobil Anda segera setelah pembayaran diverifikasi.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="tempo" className="pt-4">
                <div className="rounded-lg border p-4 bg-gray-50">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Pembayaran Tempo</h4>
                      <p className="text-gray-600 text-sm">
                        Bayar uang muka sebesar 30% sekarang dan sisanya dalam 30 hari. Dokumen akan diserahkan setelah
                        pembayaran lunas.
                      </p>
                      <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md flex items-start">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                        <p className="text-sm text-yellow-800">
                          Pembayaran tempo memerlukan verifikasi tambahan dan persetujuan dari tim kami.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Pilih Metode Pembayaran</h3>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="space-y-3">
                <motion.div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === "bank_transfer" ? "border-red-600 bg-red-50" : "border-gray-200"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-start">
                    <RadioGroupItem value="bank_transfer" id="bank_transfer" className="mt-1" />
                    <Label htmlFor="bank_transfer" className="flex-grow pl-3 cursor-pointer">
                      <div className="flex items-center">
                        <Landmark className="h-5 w-5 mr-2 text-blue-600" />
                        <span className="font-medium">Transfer Bank</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        Transfer dari rekening bank Anda ke rekening AutoBekas. Pembayaran akan diverifikasi dalam 1-2
                        jam kerja.
                      </p>
                    </Label>
                  </div>
                </motion.div>

                <motion.div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === "credit_card" ? "border-red-600 bg-red-50" : "border-gray-200"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-start">
                    <RadioGroupItem value="credit_card" id="credit_card" className="mt-1" />
                    <Label htmlFor="credit_card" className="flex-grow pl-3 cursor-pointer">
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                        <span className="font-medium">Virtual Account</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        Pembayaran melalui virtual account dari bank pilihan Anda. Pembayaran akan diverifikasi secara
                        otomatis.
                      </p>
                    </Label>
                  </div>
                </motion.div>

                <motion.div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === "e_wallet" ? "border-red-600 bg-red-50" : "border-gray-200"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-start">
                    <RadioGroupItem value="e_wallet" id="e_wallet" className="mt-1" />
                    <Label htmlFor="e_wallet" className="flex-grow pl-3 cursor-pointer">
                      <div className="flex items-center">
                        <Wallet className="h-5 w-5 mr-2 text-green-600" />
                        <span className="font-medium">E-Wallet</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        Pembayaran melalui e-wallet seperti GoPay, OVO, atau DANA. Pembayaran akan diverifikasi secara
                        otomatis.
                      </p>
                    </Label>
                  </div>
                </motion.div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t pt-6">
        <Button className="bg-red-600 hover:bg-red-700">Lanjutkan ke Pembayaran</Button>
      </CardFooter>
    </Card>
  )
}
