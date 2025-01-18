"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const checkTokenExpiration = () => {
      const token = localStorage.getItem("token");
      const tokenExpiry = localStorage.getItem("tokenExpiry");

      if (token && tokenExpiry) {
        const expiryTime = parseInt(tokenExpiry);

        if (Date.now() < expiryTime) {
          router.push("/dashboard");
        } else {
          // Clear token and expiry from localStorage
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiry");

          // Navigate to home page
          router.push("/");
        }
      }
    };

    // Check immediately when component mounts
    checkTokenExpiration();

    // Set up an interval to check every minute
    const interval = setInterval(checkTokenExpiration, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [router]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen bg-white dark:bg-black"
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster/>
      </body>
    </html>
  );
}
