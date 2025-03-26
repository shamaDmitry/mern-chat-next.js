import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/styles/globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Footer } from "@/src/components/base/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APP",
  description: "Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
