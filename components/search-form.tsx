"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export default function SearchForm() {
  const [brand, setBrand] = useState("")
  const [year, setYear] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Cari Mobil Bekas</h2>
            <p className="mt-2 text-lg text-gray-600">Temukan mobil bekas berkualitas sesuai dengan kebutuhan Anda</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label htmlFor="brand">Merek</Label>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger id="brand" className="w-full">
                    <SelectValue placeholder="Pilih merek" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="suzuki">Suzuki</SelectItem>
                    <SelectItem value="daihatsu">Daihatsu</SelectItem>
                    <SelectItem value="mitsubishi">Mitsubishi</SelectItem>
                    <SelectItem value="nissan">Nissan</SelectItem>
                    <SelectItem value="mazda">Mazda</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Tahun</Label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger id="year" className="w-full">
                    <SelectValue placeholder="Pilih tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2019">2019</SelectItem>
                    <SelectItem value="2018">2018</SelectItem>
                    <SelectItem value="2017">2017</SelectItem>
                    <SelectItem value="2016">2016</SelectItem>
                    <SelectItem value="2015">2015</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="min-price">Harga Minimum</Label>
                <Input
                  id="min-price"
                  type="text"
                  placeholder="Rp 50.000.000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-price">Harga Maksimum</Label>
                <Input
                  id="max-price"
                  type="text"
                  placeholder="Rp 500.000.000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button type="submit" className="w-full md:w-auto bg-red-600 hover:bg-red-700 gap-2">
                <Search className="h-4 w-4" />
                Cari Mobil
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
