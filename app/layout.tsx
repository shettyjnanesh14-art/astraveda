import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/lib/auth-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "AstraVeda - Premium Digital Marketing & Creative Studio",
  description: "Growth-first digital marketing studio for brands that want to lead, not just post. Specialized in Ayurveda, wellness, fitness, education, and premium local brands.",
  keywords: ["digital marketing", "creative agency", "social media management", "performance marketing", "branding", "web design", "SEO", "content marketing"],
  authors: [{ name: "AstraVeda" }],
  openGraph: {
    type: "website",
    title: "AstraVeda - Premium Digital Marketing & Creative Studio",
    description: "Growth-first digital marketing studio for brands that want to lead, not just post.",
    siteName: "AstraVeda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        <AuthProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1a1a1a',
                color: '#fff',
                borderRadius: '8px',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}

