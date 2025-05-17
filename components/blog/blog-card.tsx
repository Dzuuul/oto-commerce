import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
  variant?: "default" | "compact"
}

export default function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  if (variant === "compact") {
    return (
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="flex flex-col md:flex-row h-full">
          <div className="relative h-48 md:h-auto md:w-1/3 flex-shrink-0">
            <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <div className="flex flex-col flex-grow p-4">
            <div className="flex gap-2 mb-2">
              {post.categories.slice(0, 1).map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-lg font-bold hover:text-red-600 transition-colors mb-2 line-clamp-2">{post.title}</h3>
            </Link>
            <p className="text-gray-500 text-sm mb-2 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {formattedDate}
              <span className="mx-2">•</span>
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime} menit membaca
            </p>
            <p className="line-clamp-2 text-sm text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
            <div className="flex items-center gap-2 mt-auto">
              <div className="relative h-6 w-6 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-medium">{post.author.name}</span>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      <CardContent className="flex-1 pt-4">
        <div className="flex gap-2 mb-2">
          {post.categories.slice(0, 2).map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold hover:text-red-600 transition-colors mb-2 line-clamp-2">{post.title}</h3>
        </Link>
        <p className="text-gray-500 text-sm mb-2 flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          {formattedDate}
          <span className="mx-2">•</span>
          <Clock className="h-3 w-3 mr-1" />
          {post.readTime} menit membaca
        </p>
        <p className="line-clamp-3 text-sm text-gray-600">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
