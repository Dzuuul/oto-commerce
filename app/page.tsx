import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import SearchForm from "@/components/search-form"
import CarList from "@/components/car-list"
import TestimonialSection from "@/components/testimonial-section"
import Footer from "@/components/footer"
import { getAllCars } from "@/lib/data"

export default function Home() {
  const cars = getAllCars()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SearchForm />
        <CarList cars={cars} />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  )
}
