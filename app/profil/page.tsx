import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn, SlideIn } from "@/components/ui/motion";
import ProfileForm from "@/components/profile/profile-form";
import AddressForm from "@/components/profile/address-form";
import { getUserProfile } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import {
  User,
  MapPin,
  CreditCard,
  ShoppingBag,
  Heart,
  LogOut,
  Settings,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Profil | OttoFikri",
  description: "Kelola profil dan pengaturan akun Anda di OttoFikri",
};

export default function ProfilePage() {
  const user = getUserProfile();

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profil Saya</h1>
          <p className="text-gray-600">
            Kelola informasi profil dan pengaturan akun Anda
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-[23.6%]">
            <SlideIn direction="left">
              <div className="sticky top-24 space-y-6">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gray-50 p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white">
                        <Image
                          src={
                            user.avatar ||
                            "/placeholder.svg?height=100&width=100&text=BS"
                          }
                          alt={user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg">{user.name}</h2>
                        <p className="text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <nav className="flex flex-col">
                      <Link
                        href="/profil"
                        className="flex items-center gap-3 px-6 py-3 text-gray-900 hover:bg-gray-50 border-l-2 border-red-600"
                      >
                        <User className="h-5 w-5 text-gray-500" />
                        <span>Informasi Profil</span>
                      </Link>
                      <Link
                        href="/profil/alamat"
                        className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 border-l-2 border-transparent"
                      >
                        <MapPin className="h-5 w-5 text-gray-500" />
                        <span>Alamat Pengiriman</span>
                      </Link>
                      <Link
                        href="/profil/pembayaran"
                        className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 border-l-2 border-transparent"
                      >
                        <CreditCard className="h-5 w-5 text-gray-500" />
                        <span>Metode Pembayaran</span>
                      </Link>
                      <Link
                        href="/profil/pesanan"
                        className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 border-l-2 border-transparent"
                      >
                        <ShoppingBag className="h-5 w-5 text-gray-500" />
                        <span>Riwayat Pesanan</span>
                      </Link>
                      <Link
                        href="/favorit"
                        className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 border-l-2 border-transparent"
                      >
                        <Heart className="h-5 w-5 text-gray-500" />
                        <span>Mobil Favorit</span>
                      </Link>
                      <Link
                        href="/profil/pengaturan"
                        className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 border-l-2 border-transparent"
                      >
                        <Settings className="h-5 w-5 text-gray-500" />
                        <span>Pengaturan</span>
                      </Link>
                      <div className="border-t">
                        <Link
                          href="/logout"
                          className="flex items-center gap-3 px-6 py-3 text-red-600 hover:bg-red-50"
                        >
                          <LogOut className="h-5 w-5" />
                          <span>Keluar</span>
                        </Link>
                      </div>
                    </nav>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Butuh Bantuan?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Tim kami siap membantu Anda dengan pertanyaan seputar akun
                      Anda.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Hubungi Customer Service
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SlideIn>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-[76.4%]">
            <SlideIn direction="right">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="profile">Informasi Profil</TabsTrigger>
                  <TabsTrigger value="address">Alamat Pengiriman</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="space-y-8">
                  <Card>
                    <CardHeader className="pb-3">
                      <h3 className="text-xl font-bold">Informasi Pribadi</h3>
                    </CardHeader>
                    <CardContent>
                      <ProfileForm user={user} />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <h3 className="text-xl font-bold">
                        Riwayat Pesanan Terbaru
                      </h3>
                    </CardHeader>
                    <CardContent>
                      {user.orders && user.orders.length > 0 ? (
                        <div className="space-y-4">
                          {user.orders.slice(0, 3).map((order) => (
                            <div
                              key={order.id}
                              className="flex items-center justify-between border-b pb-4"
                            >
                              <div className="flex items-center gap-4">
                                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                                  <Image
                                    src={order.carImage || "/placeholder.svg"}
                                    alt={order.carName}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-medium">
                                    {order.carName}
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {new Date(order.date).toLocaleDateString(
                                      "id-ID",
                                      {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      }
                                    )}
                                  </p>
                                  <p className="text-sm font-medium">
                                    {formatPrice(order.amount)}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <span
                                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                                    order.status === "completed"
                                      ? "bg-green-100 text-green-800"
                                      : order.status === "processing"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {order.status === "completed"
                                    ? "Selesai"
                                    : order.status === "processing"
                                    ? "Diproses"
                                    : "Menunggu"}
                                </span>
                                <ChevronRight className="ml-2 h-5 w-5 text-gray-400" />
                              </div>
                            </div>
                          ))}
                          <div className="pt-2">
                            <Button variant="outline" className="w-full">
                              Lihat Semua Pesanan
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                          <h4 className="text-lg font-medium text-gray-900 mb-2">
                            Belum Ada Pesanan
                          </h4>
                          <p className="text-gray-600 mb-4">
                            Anda belum melakukan pembelian mobil. Jelajahi
                            daftar mobil kami untuk menemukan mobil impian Anda.
                          </p>
                          <Button className="bg-red-600 hover:bg-red-700">
                            <Link href="/daftar-mobil">Jelajahi Mobil</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="address" className="space-y-8">
                  <Card>
                    <CardHeader className="pb-3">
                      <h3 className="text-xl font-bold">Alamat Pengiriman</h3>
                    </CardHeader>
                    <CardContent>
                      <AddressForm addresses={user.addresses || []} />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </SlideIn>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
