"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { formatCurrency } from "@/lib/utils"
import { MessageSquare } from "lucide-react"

interface PriceNegotiationProps {
  carId: string
  carName: string
  originalPrice: number
}

export default function PriceNegotiation({ carId, carName, originalPrice }: PriceNegotiationProps) {
  const [open, setOpen] = useState(false)
  const [offerPrice, setOfferPrice] = useState(originalPrice * 0.9) // Default offer is 90% of original price
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Success notification
    toast({
      title: "Penawaran Terkirim!",
      description: `Penawaran Anda sebesar ${formatCurrency(offerPrice)} untuk ${carName} telah terkirim. Penjual akan menghubungi Anda segera.`,
    })

    setIsSubmitting(false)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <MessageSquare className="h-4 w-4" />
          Negosiasi Harga
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajukan Penawaran Harga</DialogTitle>
          <DialogDescription>
            Ajukan penawaran harga untuk {carName}. Harga asli: {formatCurrency(originalPrice)}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="offerPrice" className="text-right">
                Penawaran
              </Label>
              <div className="col-span-3">
                <Input
                  id="offerPrice"
                  type="number"
                  value={offerPrice}
                  onChange={(e) => setOfferPrice(Number(e.target.value))}
                  min={originalPrice * 0.7} // Minimum offer is 70% of original price
                  max={originalPrice}
                  required
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {formatCurrency(offerPrice)} ({Math.round((offerPrice / originalPrice) * 100)}% dari harga asli)
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                Pesan
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tambahkan pesan untuk penjual (opsional)"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Mengirim..." : "Kirim Penawaran"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
