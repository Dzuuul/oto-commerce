import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FadeIn, SlideIn } from "@/components/ui/motion"
import BlogCard from "@/components/blog/blog-card"
import { getBlogPost, getRelatedPosts } from "@/lib/blog"
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, Calendar, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Detail Artikel | AutoBekas",
  description: "Baca artikel lengkap di blog AutoBekas",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.categories[0])

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/blog" className="flex items-center text-red-600 hover:text-red-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Blog
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-[70%]">
            <SlideIn direction="up">
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category) => (
                    <Badge key={category} className="bg-red-100 text-red-800 hover:bg-red-200">
                      {category}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center text-gray-500 gap-4 mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime} menit membaca</span>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.1}>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-8">
                <Image
                  src={post.coverImage || "/placeholder.svg?height=600&width=1200"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.2}>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>

                <h2>Pendahuluan</h2>
                <p>
                  Membeli mobil bekas bisa menjadi pilihan cerdas untuk mendapatkan kendaraan berkualitas dengan harga
                  yang lebih terjangkau. Namun, proses ini juga memiliki tantangan tersendiri. Artikel ini akan membahas
                  beberapa tips penting yang perlu diperhatikan saat membeli mobil bekas.
                </p>

                <h2>Kenali Kebutuhan Anda</h2>
                <p>
                  Sebelum mulai mencari mobil bekas, tentukan terlebih dahulu kebutuhan Anda. Pertimbangkan
                  faktor-faktor seperti:
                </p>
                <ul>
                  <li>Ukuran mobil yang sesuai dengan kebutuhan keluarga</li>
                  <li>Jenis bahan bakar yang lebih ekonomis</li>
                  <li>Fitur keselamatan yang diinginkan</li>
                  <li>Budget yang tersedia</li>
                </ul>

                <h2>Periksa Riwayat Mobil</h2>
                <p>
                  Salah satu langkah paling penting saat membeli mobil bekas adalah memeriksa riwayat mobil tersebut.
                  Pastikan untuk:
                </p>
                <ul>
                  <li>Meminta buku servis untuk melihat riwayat perawatan</li>
                  <li>Memeriksa riwayat kecelakaan</li>
                  <li>Memastikan pajak dan dokumen lainnya lengkap</li>
                </ul>

                <div className="bg-gray-100 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold mb-2">Tips Penting</h3>
                  <p>
                    Selalu lakukan test drive sebelum memutuskan untuk membeli. Test drive akan membantu Anda merasakan
                    performa mobil secara langsung dan mendeteksi masalah yang mungkin tidak terlihat secara visual.
                  </p>
                </div>

                <h2>Inspeksi Fisik</h2>
                <p>Lakukan inspeksi fisik menyeluruh pada mobil yang akan dibeli. Perhatikan:</p>
                <ul>
                  <li>Kondisi cat dan bodi mobil</li>
                  <li>Kondisi mesin dan suara yang dihasilkan</li>
                  <li>Kondisi ban dan rem</li>
                  <li>Kondisi interior dan fitur elektronik</li>
                </ul>

                <h2>Negosiasi Harga</h2>
                <p>
                  Setelah yakin dengan kondisi mobil, lakukan negosiasi harga dengan penjual. Gunakan informasi yang
                  Anda dapatkan dari inspeksi sebagai bahan negosiasi. Jangan ragu untuk menawar jika menemukan
                  kekurangan pada mobil.
                </p>

                <h2>Kesimpulan</h2>
                <p>
                  Membeli mobil bekas memang memerlukan ketelitian dan kesabaran. Dengan mengikuti tips di atas, Anda
                  dapat meminimalisir risiko dan mendapatkan mobil bekas berkualitas yang sesuai dengan kebutuhan dan
                  budget Anda.
                </p>
              </div>
            </SlideIn>

            <Separator className="my-8" />

            {/* Author Info */}
            <SlideIn direction="up" delay={0.3}>
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src={post.authorImage || "/placeholder.svg?height=100&width=100"}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-gray-600 mb-2">Editor Otomotif</p>
                  <p className="text-sm text-gray-600">
                    Penulis dengan pengalaman lebih dari 10 tahun di industri otomotif. Spesialis dalam review mobil dan
                    tips pembelian mobil bekas.
                  </p>
                </div>
              </div>
            </SlideIn>

            {/* Share */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Bagikan Artikel</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[30%]">
            <SlideIn direction="right" className="sticky top-24">
              <div className="space-y-8">
                {/* Related Posts */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">Artikel Terkait</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.slug} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={relatedPost.coverImage || "/placeholder.svg?height=100&width=100"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2">
                            <Link href={`/blog/${relatedPost.slug}`} className="hover:text-red-600">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(relatedPost.date).toLocaleDateString("id-ID", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">Kategori</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Tips Membeli", "Perawatan", "Review", "Berita", "Teknologi", "Finansial"].map((category) => (
                      <Badge key={category} variant="outline" className="bg-white">
                        <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}>{category}</Link>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">Artikel Populer</h3>
                  <div className="space-y-4">
                    {relatedPosts.slice(0, 3).map((popularPost, index) => (
                      <div key={popularPost.slug} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center">
                          <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2">
                            <Link href={`/blog/${popularPost.slug}`} className="hover:text-red-600">
                              {popularPost.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{popularPost.readTime} menit membaca</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gray-900 text-white p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Jual Mobil Anda</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ingin menjual mobil Anda dengan cepat dan harga terbaik? AutoBekas siap membantu Anda.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Link href="/jual-mobil">Jual Sekarang</Link>
                  </Button>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>

        {/* More Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Artikel Lainnya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.slice(0, 3).map((post, index) => (
              <SlideIn key={post.slug} direction="up" delay={index * 0.1}>
                <BlogCard post={post} />
              </SlideIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
