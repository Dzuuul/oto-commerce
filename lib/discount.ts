// Types for discounts
export interface Discount {
  id: string
  name: string
  description: string
  discountType: "percentage" | "fixed"
  discountValue: number
  minPurchase?: number
  maxDiscount?: number
  startDate: string
  endDate: string
  isActive: boolean
  applicableTo: "all" | "specific"
  applicableCarIds?: number[]
  eventName?: string
  couponCode?: string
}

// Sample discounts data
export const discounts: Discount[] = [
  {
    id: "disc-1",
    name: "Diskon Akhir Tahun",
    description: "Diskon spesial untuk menyambut tahun baru",
    discountType: "percentage",
    discountValue: 10,
    minPurchase: 100000000,
    maxDiscount: 20000000,
    startDate: "2023-12-01T00:00:00Z",
    endDate: "2023-12-31T23:59:59Z",
    isActive: true,
    applicableTo: "all",
    eventName: "Year End Sale",
  },
  {
    id: "disc-2",
    name: "Flash Sale",
    description: "Diskon kilat untuk mobil pilihan",
    discountType: "percentage",
    discountValue: 15,
    minPurchase: 0,
    maxDiscount: 25000000,
    startDate: "2023-11-15T00:00:00Z",
    endDate: "2023-11-20T23:59:59Z",
    isActive: true,
    applicableTo: "specific",
    applicableCarIds: [1, 3, 5, 7],
    eventName: "Flash Sale",
  },
  {
    id: "disc-3",
    name: "Promo Lebaran",
    description: "Diskon spesial untuk menyambut Lebaran",
    discountType: "fixed",
    discountValue: 10000000,
    minPurchase: 150000000,
    startDate: "2024-03-01T00:00:00Z",
    endDate: "2024-04-15T23:59:59Z",
    isActive: false,
    applicableTo: "all",
    eventName: "Lebaran Sale",
  },
  {
    id: "disc-4",
    name: "Kupon Loyalitas",
    description: "Diskon khusus untuk pelanggan setia",
    discountType: "percentage",
    discountValue: 5,
    minPurchase: 0,
    maxDiscount: 15000000,
    startDate: "2023-01-01T00:00:00Z",
    endDate: "2023-12-31T23:59:59Z",
    isActive: true,
    applicableTo: "all",
    couponCode: "LOYAL2023",
  },
]

// Function to get all active discounts
export function getActiveDiscounts(): Discount[] {
  const now = new Date()
  return discounts.filter(
    (discount) => discount.isActive && new Date(discount.startDate) <= now && new Date(discount.endDate) >= now,
  )
}

// Function to get discounts for a specific car
export function getDiscountsForCar(carId: number): Discount[] {
  const activeDiscounts = getActiveDiscounts()
  return activeDiscounts.filter(
    (discount) =>
      discount.applicableTo === "all" ||
      (discount.applicableTo === "specific" && discount.applicableCarIds?.includes(carId)),
  )
}

// Function to calculate discounted price
export function calculateDiscountedPrice(originalPrice: number, discount: Discount): number {
  if (!discount.isActive) return originalPrice

  const now = new Date()
  if (new Date(discount.startDate) > now || new Date(discount.endDate) < now) {
    return originalPrice
  }

  if (discount.minPurchase && originalPrice < discount.minPurchase) {
    return originalPrice
  }

  let discountAmount = 0

  if (discount.discountType === "percentage") {
    discountAmount = originalPrice * (discount.discountValue / 100)
    if (discount.maxDiscount && discountAmount > discount.maxDiscount) {
      discountAmount = discount.maxDiscount
    }
  } else {
    discountAmount = discount.discountValue
  }

  return Math.max(0, originalPrice - discountAmount)
}

// Function to get the best discount for a car
export function getBestDiscountForCar(carId: number, price: number): Discount | null {
  const carDiscounts = getDiscountsForCar(carId)

  if (carDiscounts.length === 0) return null

  let bestDiscount = carDiscounts[0]
  let lowestPrice = calculateDiscountedPrice(price, bestDiscount)

  carDiscounts.forEach((discount) => {
    const discountedPrice = calculateDiscountedPrice(price, discount)
    if (discountedPrice < lowestPrice) {
      lowestPrice = discountedPrice
      bestDiscount = discount
    }
  })

  return bestDiscount
}

// Function to validate a coupon code
export function validateCouponCode(code: string): Discount | null {
  const now = new Date()
  const couponDiscount = discounts.find(
    (discount) =>
      discount.couponCode === code &&
      discount.isActive &&
      new Date(discount.startDate) <= now &&
      new Date(discount.endDate) >= now,
  )

  return couponDiscount || null
}

// Function to get event discounts
export function getEventDiscounts(): Discount[] {
  return getActiveDiscounts().filter((discount) => discount.eventName)
}
