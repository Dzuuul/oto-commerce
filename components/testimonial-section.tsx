import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Quote } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pengusaha",
    content:
      "Saya sangat puas dengan pelayanan OttoFikri. Mobil yang saya beli dalam kondisi prima dan sesuai dengan deskripsi. Proses pembeliannya juga sangat mudah dan cepat.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Dokter",
    content:
      "OttoFikri memberikan pengalaman belanja mobil bekas yang menyenangkan. Pilihan mobilnya banyak dan berkualitas. Saya merekomendasikan OttoFikri kepada semua teman dan keluarga.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Andi Wijaya",
    role: "Dosen",
    content:
      "Harga yang ditawarkan sangat kompetitif dan transparan. Tidak ada biaya tersembunyi. Customer service-nya juga sangat membantu dan responsif.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Apa Kata Mereka</h2>
          <p className="mt-2 text-lg text-gray-600">
            Pengalaman pelanggan yang telah membeli mobil melalui OttoFikri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-red-600 mb-4 opacity-50" />
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
