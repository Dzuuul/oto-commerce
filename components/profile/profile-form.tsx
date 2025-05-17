"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { User, Mail, Phone, Calendar, Camera } from "lucide-react"

interface ProfileFormProps {
  user: {
    id: string
    name: string
    email: string
    phone: string
    birthDate: string
    avatar: string
  }
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [birthDate, setBirthDate] = useState(user.birthDate)
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate saving process
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative">
          <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src={user.avatar || "/placeholder.svg?height=100&width=100&text=BS"}
              alt={user.name}
              className="h-full w-full object-cover"
            />
          </div>
          <button
            type="button"
            className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md hover:bg-red-700 transition-colors"
          >
            <Camera className="h-4 w-4" />
          </button>
        </div>
        <div>
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <div className="mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              {isEditing ? "Batal" : "Edit Profil"}
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="space-y-2"
              animate={isEditing ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Label htmlFor="name">Nama Lengkap</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  disabled={!isEditing}
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-2"
              animate={isEditing ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  disabled={!isEditing}
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-2"
              animate={isEditing ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Label htmlFor="phone">Nomor Telepon</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10"
                  disabled={!isEditing}
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-2"
              animate={isEditing ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Label htmlFor="birthDate">Tanggal Lahir</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="pl-10"
                  disabled={!isEditing}
                />
              </div>
            </motion.div>
          </div>

          {isEditing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-end mt-6"
            >
              <Button type="submit" className="bg-red-600 hover:bg-red-700" disabled={isSaving}>
                {isSaving ? "Menyimpan..." : "Simpan Perubahan"}
              </Button>
            </motion.div>
          )}
        </div>
      </form>

      <Separator />

      <div>
        <h3 className="font-semibold text-lg mb-4">Keamanan Akun</h3>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            Ubah Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Pengaturan Notifikasi
          </Button>
          <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            Hapus Akun
          </Button>
        </div>
      </div>
    </div>
  )
}
