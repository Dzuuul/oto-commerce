import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, SlideIn } from "@/components/ui/motion";
import CarList from "@/components/car-list";
import { Search, SlidersHorizontal } from "lucide-react";
import { getAllCars } from "@/lib/data";

export const metadata: Metadata = {
  title: "Daftar Mobil | OttoFikri",
  description:
    "Temukan mobil bekas berkualitas dengan harga terbaik di OttoFikri",
};

export default function CarsListPage() {
  const cars = getAllCars();

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Filter Section - Desktop */}
          <div className="hidden md:block w-full md:w-[23.6%] sticky top-24 self-start">
            <SlideIn direction="left">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Filter</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 p-0 h-auto"
                  >
                    Reset
                  </Button>
                </div>

                <Accordion
                  type="multiple"
                  defaultValue={["brand", "price", "year", "condition"]}
                  className="space-y-4"
                >
                  <AccordionItem value="brand" className="border-b-0">
                    <AccordionTrigger className="py-3 hover:no-underline">
                      <span className="text-base font-medium">Merek</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {[
                          "Toyota",
                          "Honda",
                          "Suzuki",
                          "Daihatsu",
                          "Mitsubishi",
                          "Nissan",
                          "Mazda",
                        ].map((brand) => (
                          <div
                            key={brand}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox id={`brand-${brand.toLowerCase()}`} />
                            <label
                              htmlFor={`brand-${brand.toLowerCase()}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="price" className="border-b-0">
                    <AccordionTrigger className="py-3 hover:no-underline">
                      <span className="text-base font-medium">Harga</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-1">
                        <Slider
                          defaultValue={[50, 250]}
                          min={0}
                          max={500}
                          step={10}
                        />
                        <div className="flex items-center justify-between">
                          <Input
                            type="text"
                            placeholder="Min"
                            className="w-[45%]"
                            defaultValue="Rp 50.000.000"
                          />
                          <span className="text-gray-500">-</span>
                          <Input
                            type="text"
                            placeholder="Max"
                            className="w-[45%]"
                            defaultValue="Rp 250.000.000"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="year" className="border-b-0">
                    <AccordionTrigger className="py-3 hover:no-underline">
                      <span className="text-base font-medium">Tahun</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-1">
                        <Slider
                          defaultValue={[2018, 2023]}
                          min={2010}
                          max={2025}
                          step={1}
                        />
                        <div className="flex items-center justify-between">
                          <Input
                            type="text"
                            placeholder="Min"
                            className="w-[45%]"
                            defaultValue="2018"
                          />
                          <span className="text-gray-500">-</span>
                          <Input
                            type="text"
                            placeholder="Max"
                            className="w-[45%]"
                            defaultValue="2023"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="condition" className="border-b-0">
                    <AccordionTrigger className="py-3 hover:no-underline">
                      <span className="text-base font-medium">Kondisi</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {["Sangat Baik", "Baik", "Cukup Baik"].map(
                          (condition) => (
                            <div
                              key={condition}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`condition-${condition
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                              />
                              <label
                                htmlFor={`condition-${condition
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {condition}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="transmission" className="border-b-0">
                    <AccordionTrigger className="py-3 hover:no-underline">
                      <span className="text-base font-medium">Transmisi</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {["Otomatis", "Manual"].map((transmission) => (
                          <div
                            key={transmission}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`transmission-${transmission.toLowerCase()}`}
                            />
                            <label
                              htmlFor={`transmission-${transmission.toLowerCase()}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {transmission}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="fuel" className="border-b-0">
                    <AccordionTrigger className="py-3 hover:no-underline">
                      <span className="text-base font-medium">Bahan Bakar</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {["Bensin", "Diesel", "Listrik", "Hybrid"].map(
                          (fuel) => (
                            <div
                              key={fuel}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox id={`fuel-${fuel.toLowerCase()}`} />
                              <label
                                htmlFor={`fuel-${fuel.toLowerCase()}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {fuel}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Separator className="my-6" />

                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Terapkan Filter
                </Button>
              </div>
            </SlideIn>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-[76.4%]">
            <SlideIn direction="up">
              <div className="bg-white rounded-lg border shadow-sm p-6 mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Cari mobil berdasarkan merek, model, atau tahun"
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Urutkan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Terbaru</SelectItem>
                        <SelectItem value="price-low">
                          Harga: Rendah ke Tinggi
                        </SelectItem>
                        <SelectItem value="price-high">
                          Harga: Tinggi ke Rendah
                        </SelectItem>
                        <SelectItem value="year-new">Tahun: Terbaru</SelectItem>
                        <SelectItem value="year-old">Tahun: Terlama</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Mobile Filter Button */}
                    <Button variant="outline" className="md:hidden">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Daftar Mobil Bekas
                </h1>
                <p className="text-gray-600">
                  Menampilkan {cars.length} mobil bekas berkualitas dengan harga
                  terbaik
                </p>
              </div>
            </SlideIn>

            <CarList cars={cars} layout="list" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
