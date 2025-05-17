"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

interface AddToFavoriteButtonProps {
  carId: number
}

export default function AddToFavoriteButton({ carId }: AddToFavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    setIsAnimating(true)

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <Button
      size="icon"
      variant="secondary"
      className={`h-8 w-8 rounded-full ${isFavorite ? "bg-red-100" : ""}`}
      onClick={toggleFavorite}
    >
      <motion.div
        animate={
          isAnimating
            ? {
                scale: [1, 1.5, 1],
                rotate: [0, 10, -10, 0],
              }
            : {}
        }
        transition={{ duration: 0.5 }}
      >
        <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-600 text-red-600" : ""}`} />
      </motion.div>
      <span className="sr-only">Add to favorites</span>
    </Button>
  )
}
