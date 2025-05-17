"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface MotionProps {
  children: ReactNode
  className?: string
  delay?: number
}

interface DirectionalMotionProps extends MotionProps {
  direction: "up" | "down" | "left" | "right"
}

export function FadeIn({ children, className = "", delay = 0 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({ children, className = "", direction, delay = 0 }: DirectionalMotionProps) {
  const directionVariants = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionVariants[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, className = "", delay = 0 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RotateIn({ children, className = "", delay = 0 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -5 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
