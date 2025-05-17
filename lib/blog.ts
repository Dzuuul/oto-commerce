export interface BlogAuthor {
  name: string;
  avatar: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  categories: string[];
  tags: string[];
  author: BlogAuthor;
  readTime?: number;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

// Dummy data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "tips-membeli-mobil-bekas",
    title: "10 Tips Membeli Mobil Bekas yang Berkualitas",
    excerpt:
      "Panduan lengkap untuk membeli mobil bekas yang berkualitas dan terhindar dari penipuan.",
    content: "Content goes here...",
    coverImage: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-05-15T10:00:00Z",
    categories: ["Tips & Trik", "Pembelian"],
    tags: ["mobil bekas", "tips membeli", "inspeksi mobil"],
    author: {
      name: "Ahmad Fauzi",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Pakar otomotif dengan pengalaman 15 tahun di industri mobil bekas",
    },
    readTime: 8,
  },
  {
    id: "2",
    slug: "cara-merawat-mobil-bekas",
    title: "Panduan Lengkap Merawat Mobil Bekas Agar Tetap Prima",
    excerpt:
      "Pelajari cara merawat mobil bekas agar tetap dalam kondisi prima dan memperpanjang usia pakainya.",
    content: "Content goes here...",
    coverImage: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-06-22T14:30:00Z",
    categories: ["Perawatan", "Tips & Trik"],
    tags: ["perawatan mobil", "mobil bekas", "tips merawat"],
    author: {
      name: "Siti Nurhaliza",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Mekanik berpengalaman dan penulis artikel otomotif",
    },
    readTime: 10,
  },
  {
    id: "3",
    slug: "tren-mobil-bekas-2023",
    title: "Tren Pasar Mobil Bekas di Indonesia 2023",
    excerpt:
      "Analisis tren pasar mobil bekas di Indonesia tahun 2023 dan prediksi untuk tahun mendatang.",
    content: "Content goes here...",
    coverImage: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-07-10T09:15:00Z",
    categories: ["Analisis Pasar", "Tren"],
    tags: ["tren mobil", "pasar mobil bekas", "analisis"],
    author: {
      name: "Budi Santoso",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Analis pasar otomotif dan konsultan industri",
    },
    readTime: 12,
  },
  {
    id: "4",
    slug: "mobil-bekas-terbaik-2023",
    title: "10 Mobil Bekas Terbaik untuk Dibeli di 2023",
    excerpt:
      "Daftar 10 mobil bekas terbaik yang layak dibeli di tahun 2023 berdasarkan nilai, keandalan, dan kepuasan pemilik.",
    content: "Content goes here...",
    coverImage: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-08-05T11:45:00Z",
    categories: ["Rekomendasi", "Pembelian"],
    tags: ["mobil bekas terbaik", "rekomendasi mobil", "mobil bekas 2023"],
    author: {
      name: "Dewi Lestari",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Editor otomotif dan penggemar mobil",
    },
    readTime: 15,
  },
  {
    id: "5",
    slug: "panduan-kredit-mobil-bekas",
    title: "Panduan Lengkap Kredit Mobil Bekas: Tips dan Trik",
    excerpt:
      "Panduan lengkap untuk mendapatkan kredit mobil bekas dengan suku bunga terbaik dan syarat yang menguntungkan.",
    content: "Content goes here...",
    coverImage: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-09-12T13:20:00Z",
    categories: ["Pembiayaan", "Tips & Trik"],
    tags: ["kredit mobil", "pembiayaan mobil", "tips kredit"],
    author: {
      name: "Rudi Hartono",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Konsultan keuangan dan pakar pembiayaan otomotif",
    },
    readTime: 9,
  },
  {
    id: "6",
    slug: "inspeksi-mobil-bekas",
    title: "Pentingnya Inspeksi Profesional Sebelum Membeli Mobil Bekas",
    excerpt:
      "Mengapa inspeksi profesional sangat penting sebelum membeli mobil bekas dan apa saja yang diperiksa dalam inspeksi.",
    content: "Content goes here...",
    coverImage: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-10-20T15:10:00Z",
    categories: ["Inspeksi", "Pembelian"],
    tags: ["inspeksi mobil", "mobil bekas", "tips membeli"],
    author: {
      name: "Joko Widodo",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Kepala mekanik di OttoFikri dengan pengalaman 20 tahun",
    },
    readTime: 7,
  },
  {
    id: "7",
    slug: "negosiasi-harga-mobil-bekas",
    title: "Strategi Jitu Negosiasi Harga Mobil Bekas",
    excerpt:
      "Tips dan trik untuk menegosiasikan harga mobil bekas dan mendapatkan penawaran terbaik.",
    content: "Content goes here...",
    coverImage: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-11-08T08:30:00Z",
    categories: ["Negosiasi", "Pembelian"],
    tags: ["negosiasi harga", "tips membeli", "strategi"],
    author: {
      name: "Rina Marlina",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Pakar negosiasi dan mantan dealer mobil",
    },
    readTime: 6,
  },
  {
    id: "8",
    slug: "mobil-listrik-bekas",
    title: "Panduan Membeli Mobil Listrik Bekas: Apa yang Perlu Diperhatikan",
    excerpt:
      "Hal-hal yang perlu diperhatikan saat membeli mobil listrik bekas, dari kondisi baterai hingga infrastruktur pengisian.",
    content: "Content goes here...",
    coverImage: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-11-25T16:40:00Z",
    categories: ["Mobil Listrik", "Pembelian"],
    tags: ["mobil listrik", "mobil bekas", "tips membeli"],
    author: {
      name: "Arief Wicaksono",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Spesialis teknologi otomotif dan mobil listrik",
    },
    readTime: 14,
  },
];

// Function to get all blog posts
export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

// Function to get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Function to get related blog posts
export function getRelatedPosts(
  currentSlug: string,
  category?: string
): BlogPost[] {
  let relatedPosts = blogPosts.filter((post) => post.slug !== currentSlug);

  if (category) {
    relatedPosts = relatedPosts.filter((post) =>
      post.categories.includes(category)
    );
  }

  // If we don't have enough related posts by category, add some random ones
  if (relatedPosts.length < 3) {
    const randomPosts = blogPosts
      .filter(
        (post) => post.slug !== currentSlug && !relatedPosts.includes(post)
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 3 - relatedPosts.length);

    relatedPosts = [...relatedPosts, ...randomPosts];
  }

  return relatedPosts.slice(0, 5);
}

// Function to get blog categories
export function getBlogCategories(): BlogCategory[] {
  const categoryCounts: Record<string, number> = {};

  blogPosts.forEach((post) => {
    post.categories.forEach((category) => {
      if (categoryCounts[category]) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    });
  });

  return Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    count,
  }));
}

// Function to get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) =>
    post.categories.some(
      (cat) => cat.toLowerCase().replace(/\s+/g, "-") === category
    )
  );
}

// Function to get blog posts by tag
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase().replace(/\s+/g, "-") === tag)
  );
}

// Function to get featured blog post
export function getFeaturedBlogPost(): BlogPost {
  return blogPosts[0];
}

// Function to search blog posts
export function searchBlogPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();

  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.categories.some((cat) =>
        cat.toLowerCase().includes(lowercaseQuery)
      ) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
