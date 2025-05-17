"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { formatCurrency } from "@/lib/utils"

const sellFormSchema = z.object({
  brand: z.string().min(1, "Merek mobil harus diisi"),
  model: z.string().min(1, "Model mobil harus diisi"),
  year: z.string().min(1, "Tahun mobil harus diisi"),
  mileage: z.string().min(1, "Kilometer mobil harus diisi"),
  price: z.string().min(1, "Harga mobil harus diisi"),
  condition: z.string().min(1, "Kondisi mobil harus diisi"),
  description: z.string().min(10, "Deskripsi minimal 10 karakter"),
  features: z.array(z.string()).optional(),
  name: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon minimal 10 digit"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Anda harus menyetujui syarat dan ketentuan",
  }),
})

type SellFormValues = z.infer<typeof sellFormSchema>

const carConditions = [
  { value: "excellent", label: "Sangat Baik" },
  { value: "good", label: "Baik" },
  { value: "fair", label: "Cukup" },
  { value: "poor", label: "Butuh Perbaikan" },
]

const carFeatures = [
  { id: "ac", label: "AC" },
  { id: "power_steering", label: "Power Steering" },
  { id: "power_window", label: "Power Window" },
  { id: "central_lock", label: "Central Lock" },
  { id: "airbag", label: "Airbag" },
  { id: "abs", label: "ABS" },
  { id: "electric_mirror", label: "Spion Elektrik" },
  { id: "fog_lamp", label: "Fog Lamp" },
]

export default function SellForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)

  const form = useForm<SellFormValues>({
    resolver: zodResolver(sellFormSchema),
    defaultValues: {
      brand: "",
      model: "",
      year: "",
      mileage: "",
      price: "",
      condition: "",
      description: "",
      features: [],
      name: "",
      email: "",
      phone: "",
      acceptTerms: false,
    },
  })

  const onSubmit = async (data: SellFormValues) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Mobil Berhasil Didaftarkan!",
      description: "Tim kami akan menghubungi Anda untuk proses selanjutnya.",
    })

    setIsSubmitting(false)
    form.reset()
    setEstimatedPrice(null)
  }

  const calculateEstimatedPrice = () => {
    const brand = form.getValues("brand")
    const year = Number.parseInt(form.getValues("year") || "0")
    const mileage = Number.parseInt(form.getValues("mileage") || "0")
    const condition = form.getValues("condition")

    if (!brand || !year || !mileage || !condition) {
      toast({
        title: "Data Tidak Lengkap",
        description: "Lengkapi data merek, tahun, kilometer, dan kondisi untuk mendapatkan estimasi harga",
        variant: "destructive",
      })
      return
    }

    // Simple price estimation algorithm (just for demonstration)
    let basePrice = 0
    switch (brand.toLowerCase()) {
      case "toyota":
        basePrice = 200000000
        break
      case "honda":
        basePrice = 180000000
        break
      case "suzuki":
        basePrice = 150000000
        break
      default:
        basePrice = 170000000
    }

    // Adjust for year
    const yearFactor = (year - 2000) / 20 // Newer cars are worth more

    // Adjust for mileage (lower is better)
    const mileageFactor = 1 - mileage / 200000

    // Adjust for condition
    let conditionFactor = 0.7
    switch (condition) {
      case "excellent":
        conditionFactor = 1
        break
      case "good":
        conditionFactor = 0.9
        break
      case "fair":
        conditionFactor = 0.8
        break
      case "poor":
        conditionFactor = 0.6
        break
    }

    const estimatedPrice = basePrice * yearFactor * Math.max(0.5, mileageFactor) * conditionFactor
    setEstimatedPrice(Math.round(estimatedPrice))

    // Set the calculated price in the form
    form.setValue("price", estimatedPrice.toString())
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-muted/50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Informasi Mobil</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Merek Mobil</FormLabel>
                  <FormControl>
                    <Input placeholder="Toyota, Honda, dll" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input placeholder="Avanza, Jazz, dll" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahun</FormLabel>
                  <FormControl>
                    <Input placeholder="2018" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mileage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kilometer</FormLabel>
                  <FormControl>
                    <Input placeholder="50000" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kondisi</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kondisi mobil" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {carConditions.map((condition) => (
                        <SelectItem key={condition.value} value={condition.value}>
                          {condition.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-end">
              <Button type="button" variant="outline" onClick={calculateEstimatedPrice} className="mb-2">
                Hitung Estimasi Harga
              </Button>
            </div>

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga (Rp)</FormLabel>
                  <FormControl>
                    <Input placeholder="150000000" type="number" {...field} />
                  </FormControl>
                  {estimatedPrice && (
                    <FormDescription>Estimasi harga: {formatCurrency(estimatedPrice)}</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormLabel>Deskripsi</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ceritakan tentang kondisi mobil Anda secara detail"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="features"
            render={() => (
              <FormItem className="mt-6">
                <div className="mb-4">
                  <FormLabel>Fitur</FormLabel>
                  <FormDescription>Pilih fitur yang tersedia pada mobil Anda</FormDescription>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {carFeatures.map((feature) => (
                    <FormField
                      key={feature.id}
                      control={form.control}
                      name="features"
                      render={({ field }) => {
                        return (
                          <FormItem key={feature.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(feature.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), feature.id])
                                    : field.onChange(field.value?.filter((value) => value !== feature.id))
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{feature.label}</FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="bg-muted/50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Informasi Kontak</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama Anda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Telepon</FormLabel>
                  <FormControl>
                    <Input placeholder="08123456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Saya menyetujui syarat dan ketentuan yang berlaku</FormLabel>
                <FormDescription>Dengan mencentang ini, Anda menyetujui untuk dihubungi oleh tim kami.</FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Mengirim..." : "Jual Mobil Sekarang"}
        </Button>
      </form>
    </Form>
  )
}
