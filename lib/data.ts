// Sample data for the application

// Car data
export interface Car {
  id: number
  name: string
  year: number
  price: number
  image: string
  condition: string
  location: string
  mileage: string
  rating: number
}

const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Avanza Veloz",
    year: 2022,
    price: 220000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Sangat Baik",
    location: "Jakarta Selatan",
    mileage: "15.000 km",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Honda Brio RS",
    year: 2021,
    price: 185000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Baik",
    location: "Bandung",
    mileage: "22.500 km",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Mitsubishi Xpander",
    year: 2020,
    price: 240000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Sangat Baik",
    location: "Surabaya",
    mileage: "30.000 km",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Suzuki XL7",
    year: 2021,
    price: 210000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Baik",
    location: "Semarang",
    mileage: "18.000 km",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Daihatsu Terios",
    year: 2019,
    price: 180000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Baik",
    location: "Yogyakarta",
    mileage: "45.000 km",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Nissan Livina",
    year: 2020,
    price: 195000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Sangat Baik",
    location: "Medan",
    mileage: "25.000 km",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Toyota Rush TRD",
    year: 2021,
    price: 230000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Sangat Baik",
    location: "Jakarta Timur",
    mileage: "20.000 km",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Honda HR-V",
    year: 2020,
    price: 275000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Baik",
    location: "Surabaya",
    mileage: "32.000 km",
    rating: 4.6,
  },
  {
    id: 9,
    name: "Suzuki Ertiga",
    year: 2019,
    price: 165000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Baik",
    location: "Bandung",
    mileage: "40.000 km",
    rating: 4.3,
  },
  {
    id: 10,
    name: "Mitsubishi Pajero Sport",
    year: 2018,
    price: 350000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Baik",
    location: "Jakarta Selatan",
    mileage: "55.000 km",
    rating: 4.5,
  },
  {
    id: 11,
    name: "Toyota Fortuner",
    year: 2019,
    price: 380000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Sangat Baik",
    location: "Jakarta Utara",
    mileage: "48.000 km",
    rating: 4.7,
  },
  {
    id: 12,
    name: "Honda Civic Turbo",
    year: 2020,
    price: 320000000,
    image: "/placeholder.svg?height=400&width=600",
    condition: "Sangat Baik",
    location: "Surabaya",
    mileage: "25.000 km",
    rating: 4.8,
  },
]

// User data
export interface User {
  id: string
  name: string
  email: string
  phone: string
  birthDate: string
  avatar: string
  addresses?: Address[]
  orders?: Order[]
}

export interface Address {
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

export interface Order {
  id: string
  carId: number
  carName: string
  carImage: string
  date: string
  amount: number
  status: "pending" | "processing" | "completed"
}

const user: User = {
  id: "user-1",
  name: "Budi Santoso",
  email: "budi.santoso@example.com",
  phone: "+62 812 3456 7890",
  birthDate: "1990-05-15",
  avatar: "/placeholder.svg?height=100&width=100&text=BS",
  addresses: [
    {
      id: "address-1",
      label: "Rumah",
      name: "Budi Santoso",
      phone: "+62 812 3456 7890",
      street: "Jl. Merdeka No. 123, RT 05/RW 02",
      city: "Jakarta Selatan",
      province: "DKI Jakarta",
      postalCode: "12345",
      isDefault: true,
    },
    {
      id: "address-2",
      label: "Kantor",
      name: "Budi Santoso",
      phone: "+62 812 3456 7890",
      street: "Gedung Menara Tinggi, Lantai 12, Jl. Sudirman No. 45",
      city: "Jakarta Pusat",
      province: "DKI Jakarta",
      postalCode: "10220",
      isDefault: false,
    },
  ],
  orders: [
    {
      id: "order-1",
      carId: 3,
      carName: "Mitsubishi Xpander",
      carImage: "/placeholder.svg?height=400&width=600",
      date: "2023-05-10",
      amount: 240000000,
      status: "completed",
    },
    {
      id: "order-2",
      carId: 6,
      carName: "Nissan Livina",
      carImage: "/placeholder.svg?height=400&width=600",
      date: "2023-08-22",
      amount: 195000000,
      status: "processing",
    },
  ],
}

// Data access functions
export function getAllCars(): Car[] {
  return cars
}

export function getCar(id: number): Car | undefined {
  return cars.find((car) => car.id === id)
}

export function getSimilarCars(currentCarId: number): Car[] {
  // Get 4 random cars excluding the current one
  return cars
    .filter((car) => car.id !== currentCarId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)
}

export function getFavoriteCars(): Car[] {
  // Return 3 random cars as favorites
  return cars.sort(() => 0.5 - Math.random()).slice(0, 3)
}

export function getUserProfile(): User {
  return user
}
