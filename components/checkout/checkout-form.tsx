"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getUserProfile } from "@/lib/data"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"

export default function CheckoutForm() {
  const user = getUserProfile()
  const [selectedAddress, setSelectedAddress] = useState(user.addresses?.[0]?.id || "")
  const [showNewAddressForm, setShowNewAddressForm] = useState(false)

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-3">
        <h2 className="text-xl font-bold text-gray-900">Informasi Pengiriman</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {user.addresses && user.addresses.length > 0 ? (
            <div className="space-y-4">
              <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
                {user.addresses.map((address) => (
                  <motion.div
                    key={address.id}
                    className={`border rounded-lg p-4 cursor-pointer ${
                      selectedAddress === address.id ? "border-red-600 bg-red-50" : "border-gray-200"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-start">
                      <RadioGroupItem value={address.id} id={`address-${address.id}`} className="mt-1" />
                      <Label htmlFor={`address-${address.id}`} className="flex-grow pl-3 cursor-pointer">
                        <div className="flex justify-between">
                          <div className="font-medium">{address.label}</div>
                          {address.isDefault && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Utama</span>
                          )}
                        </div>
                        <div className="text-gray-700 mt-1">{address.name}</div>
                        <div className="text-gray-700">{address.phone}</div>
                        <div className="text-gray-700 mt-1">
                          {address.street}, {address.city}, {address.province}, {address.postalCode}
                        </div>
                      </Label>
                    </div>
                  </motion.div>
                ))}
              </RadioGroup>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setShowNewAddressForm(!showNewAddressForm)}
              >
                <Plus className="mr-2 h-4 w-4" />
                Tambah Alamat Baru
              </Button>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-600 mb-4">Anda belum memiliki alamat pengiriman. Tambahkan alamat baru.</p>
              <Button type="button" variant="outline" onClick={() => setShowNewAddressForm(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Tambah Alamat Baru
              </Button>
            </div>
          )}

          {showNewAddressForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border rounded-lg p-6 mt-4"
            >
              <h3 className="font-semibold text-lg mb-4">Tambah Alamat Baru</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="label">Label Alamat</Label>
                  <Input id="label" placeholder="Rumah, Kantor, dll." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Penerima</Label>
                  <Input id="name" placeholder="Nama lengkap penerima" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input id="phone" placeholder="Nomor telepon penerima" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="province">Provinsi</Label>
                  <Input id="province" placeholder="Provinsi" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Kota/Kabupaten</Label>
                  <Input id="city" placeholder="Kota/Kabupaten" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Kode Pos</Label>
                  <Input id="postalCode" placeholder="Kode Pos" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="street">Alamat Lengkap</Label>
                  <Textarea id="street" placeholder="Nama jalan, nomor rumah, RT/RW, dll." rows={3} />
                </div>
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <Button type="button" variant="outline" onClick={() => setShowNewAddressForm(false)}>
                  Batal
                </Button>
                <Button type="button" className="bg-red-600 hover:bg-red-700">
                  Simpan Alamat
                </Button>
              </div>
            </motion.div>
          )}

          <div className="border-t pt-6">
            <h3 className="font-semibold text-lg mb-4">Catatan Tambahan</h3>
            <Textarea placeholder="Tambahkan catatan untuk pengiriman (opsional)" rows={3} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
