import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CouponDrawer from "@/components/ui/CouponDrawer";
import PhotoSidebar from "@/components/ui/PhotoSidebar";
import VideoSidebar from "@/components/ui/VideoSidebar";
import FloatingSidebarWidgets from "@/components/ui/FloatingSidebarWidgets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxe Screens - Private Theatre Experiences",
  description: "Book luxury private cinema experiences for birthdays, anniversaries, date nights, proposals & more. Unforgettable moments in a luxe setting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <CouponDrawer />
        <PhotoSidebar />
        <VideoSidebar />
        <FloatingSidebarWidgets />
      </body>
    </html>
  );
}
