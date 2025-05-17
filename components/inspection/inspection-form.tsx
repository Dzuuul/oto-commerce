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
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

const inspectionFormSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon minimal 10 digit"),
  carBrand: z.string().min(1, "Merek mobil harus diisi"),
  carModel: z.string().min(1, "Model mobil harus diisi"),
  carYear: z.string().min(1, "Tahun mobil harus diisi"),
  inspectionDate: z.date({
    required_error: "Tanggal inspeksi harus dipilih",
  }),
  inspectionTime: z.string().min(1, "Waktu inspeksi harus dipilih"),
  inspectionLocation: z.string().min(1, "Lokasi inspeksi harus dipilih"),
  additionalNotes: z.string().optional(),
})

type InspectionFormValues = z.infer<typeof inspectionFormSchema>

const inspectionTimes = [
  { value: "09:00", label: "09:00" },
  { value: "10:00", label: "10:00" },
  { value: "11:00", label: "11:00" },
  { value: "13:00", label: "13:00" },
  { value: "14:00", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "16:00", label: "16:00" },
]

const inspectionLocations = [
  { value: "jakarta_pusat", label: "Jakarta Pusat" },
  { value: "jakarta_selatan", label: "Jakarta Selatan" },
  { value: "jakarta_barat", label: "Jakarta Barat" },
  { value: "jakarta_timur", label: "Jakarta Timur" },
  { value: "jakarta_utara", label: "Jakarta Utara" },
  { value: "tangerang", label: "Tangerang" },
  { value: "bekasi", label: "Bekasi" },
  { value: "depok", label: "Depok" },
]

export default function InspectionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<InspectionFormValues>({
    resolver: zodResolver(inspectionFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      carBrand: "",
      carModel: "",
      carYear: "",
      inspectionLocation: "",
      additionalNotes: "",
    },
  })

  const onSubmit = async (data: InspectionFormValues) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Jadwal Inspeksi Berhasil Dibuat!",
      description: `Inspeksi mobil Anda dijadwalkan pada ${format(data.inspectionDate, "EEEE, dd MMMM yyyy", { locale: id })} pukul ${data.inspectionTime} di ${inspectionLocations.find((loc) => loc.value === data.inspectionLocation)?.label}.`,
    })

    setIsSubmitting(false)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

        <div className="bg-muted/50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Informasi Mobil</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="carBrand"
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
              name="carModel"
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
              name="carYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahun</FormLabel>
                  <FormControl>
                    <Input placeholder="2018" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Jadwal Inspeksi</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="inspectionDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Tanggal Inspeksi</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                        >
                          {field.value ? format(field.value, "PPP", { locale: id }) : <span>Pilih tanggal</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={
                          (date) => date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0 // Disable Sundays
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Inspeksi tersedia Senin-Sabtu</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="inspectionTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Waktu Inspeksi</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih waktu" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {inspectionTimes.map((time) => (
                        <SelectItem key={time.value} value={time.value}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="inspectionLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lokasi Inspeksi</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih lokasi" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {inspectionLocations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="additionalNotes"
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormLabel>Catatan Tambahan</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Informasi tambahan yang perlu diketahui oleh tim inspeksi"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Mengirim..." : "Jadwalkan Inspeksi"}
        </Button>
      </form>
    </Form>
  )
}
