"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, MapPin, Edit, Trash2 } from "lucide-react"

interface Address {
  id: string
  label: string
  name: string
  phone: string
  street: string
  city: string
  province: string
  postalCode: string
  isDefault: boolean
}

interface AddressFormProps {
  addresses: Address[]
}

export default function AddressForm({ addresses }: AddressFormProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const handleAddAddress = () => {
    setShowAddForm(true)
    setEditingAddressId(null)
  }

  const handleEditAddress = (id: string) => {
    setEditingAddressId(id)
    setShowAddForm(false)
  }

  const handleDeleteAddress = (id: string) => {
    setIsDeleting(id)

    // Simulate deletion process
    setTimeout(() => {
      setIsDeleting(null)
    }, 1000)
  }

  const handleCancelEdit = () => {
    setEditingAddressId(null)
  }

  const handleCancelAdd = () => {
    setShowAddForm(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate saving process
    setTimeout(() => {
      setShowAddForm(false)
      setEditingAddressId(null)
    }, 1000)
  }

  const editingAddress = editingAddressId ? addresses.find((address) => address.id === editingAddressId) : null

  return (
    <div className="space-y-6">
      {addresses.length > 0 ? (
        <div className="space-y-4">
          {addresses.map((address) => (
            <motion.div
              key={address.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`relative ${editingAddressId === address.id ? "ring-2 ring-red-600 ring-offset-2" : ""}`}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{address.label}</h3>
                          {address.isDefault && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Utama</span>
                          )}
                        </div>
                        <p className="text-gray-700">{address.name}</p>
                        <p className="text-gray-700">{address.phone}</p>
                        <p className="text-gray-700 mt-1">
                          {address.street}, {address.city}, {address.province}, {address.postalCode}
                        </p>
                      </div>
                    </div>
                    <div className="flex sm:flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-600"
                        onClick={() => handleEditAddress(address.id)}
                      >
                        <Edit className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-200 hover:bg-red-50"
                        onClick={() => handleDeleteAddress(address.id)}
                        disabled={isDeleting === address.id}
                      >
                        {isDeleting === address.id ? (
                          "Menghapus..."
                        ) : (
                          <>
                            <Trash2 className="h-4 w-4 mr-1" /> Hapus
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <MapPin className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-900 mb-2">Belum Ada Alamat</h4>
          <p className="text-gray-600 mb-4">
            Anda belum menambahkan alamat pengiriman. Tambahkan alamat untuk memudahkan proses checkout.
          </p>
        </div>
      )}

      {!showAddForm && !editingAddressId && (
        <Button onClick={handleAddAddress} className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Tambah Alamat Baru
        </Button>
      )}

      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tambah Alamat Baru</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <div className="md:col-span-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="isDefault" />
                        <Label htmlFor="isDefault">Jadikan sebagai alamat utama</Label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button type="button" variant="outline" onClick={handleCancelAdd}>
                      Batal
                    </Button>
                    <Button type="submit" className="bg-red-600 hover:bg-red-700">
                      Simpan Alamat
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {editingAddress && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Edit Alamat</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-label">Label Alamat</Label>
                      <Input id="edit-label" defaultValue={editingAddress.label} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-name">Nama Penerima</Label>
                      <Input id="edit-name" defaultValue={editingAddress.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-phone">Nomor Telepon</Label>
                      <Input id="edit-phone" defaultValue={editingAddress.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-province">Provinsi</Label>
                      <Input id="edit-province" defaultValue={editingAddress.province} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-city">Kota/Kabupaten</Label>
                      <Input id="edit-city" defaultValue={editingAddress.city} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-postalCode">Kode Pos</Label>
                      <Input id="edit-postalCode" defaultValue={editingAddress.postalCode} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="edit-street">Alamat Lengkap</Label>
                      <Textarea id="edit-street" defaultValue={editingAddress.street} rows={3} />
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="edit-isDefault" defaultChecked={editingAddress.isDefault} />
                        <Label htmlFor="edit-isDefault">Jadikan sebagai alamat utama</Label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button type="button" variant="outline" onClick={handleCancelEdit}>
                      Batal
                    </Button>
                    <Button type="submit" className="bg-red-600 hover:bg-red-700">
                      Simpan Perubahan
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
