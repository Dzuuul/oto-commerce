import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn, SlideIn } from "@/components/ui/motion";
import BlogCard from "@/components/blog/blog-card";
import { getBlogPosts, getBlogCategories } from "@/lib/blog";
import { Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | OttoFikri",
  description: "Artikel dan tips seputar mobil bekas di OttoFikri",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = getBlogCategories();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);
  const remainingPosts = posts.slice(4);

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Blog OttoFikri
          </h1>
          <p className="text-gray-600">
            Artikel, tips, dan berita terbaru seputar dunia otomotif
          </p>
        </div>

        {/* Search and Categories */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Cari artikel..."
              className="pl-10"
            />
          </div>
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="grid grid-cols-4 md:flex md:space-x-2">
              <TabsTrigger value="all">Semua</TabsTrigger>
              {categories.slice(0, 3).map((category) => (
                <TabsTrigger key={category.slug} value={category.slug}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Featured Post */}
        <SlideIn direction="up" className="mb-12">
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={
                  featuredPost.coverImage ||
                  "/placeholder.svg?height=600&width=1200"
                }
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
              <div className="flex flex-wrap gap-2 mb-3">
                {featuredPost.categories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="bg-white/20 text-white hover:bg-white/30"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="hover:underline"
                >
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-gray-200 mb-4 line-clamp-2">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={
                        featuredPost.authorImage ||
                        "/placeholder.svg?height=100&width=100"
                      }
                      alt={featuredPost.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {featuredPost.author}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {new Date(featuredPost.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="flex items-center"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Recent Posts */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Artikel Terbaru
            </h2>
            <Button variant="ghost" className="text-red-600 hover:text-red-700">
              <Link href="/blog/category/terbaru" className="flex items-center">
                Lihat Semua
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <SlideIn key={post.slug} direction="up" delay={index * 0.1}>
                <BlogCard post={post} />
              </SlideIn>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Semua Artikel</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post, index) => (
              <SlideIn key={post.slug} direction="up" delay={index * 0.05}>
                <BlogCard post={post} variant="compact" />
              </SlideIn>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Muat Lebih Banyak
            </Button>
          </div>
        </div>

        {/* Newsletter */}
        <FadeIn className="mt-16">
          <div className="bg-gray-100 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Berlangganan Newsletter Kami
              </h2>
              <p className="text-gray-600 mb-6">
                Dapatkan artikel terbaru, tips, dan penawaran eksklusif langsung
                ke email Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-grow"
                />
                <Button className="bg-red-600 hover:bg-red-700">
                  Berlangganan
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </FadeIn>
    </div>
  );
}
