import { cn } from "@/lib/utils"
import { Tag } from "lucide-react"

interface DiscountBadgeProps {
  originalPrice: number
  discountedPrice: number
  eventName?: string
  className?: string
}

export default function DiscountBadge({ originalPrice, discountedPrice, eventName, className }: DiscountBadgeProps) {
  const discountPercentage = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)

  if (discountPercentage <= 0) return null

  return (
    <div
      className={cn(
        "absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 z-10",
        className,
      )}
    >
      <Tag className="h-3 w-3" />
      {eventName ? (
        <span>
          {eventName}: {discountPercentage}% OFF
        </span>
      ) : (
        <span>{discountPercentage}% OFF</span>
      )}
    </div>
  )
}
