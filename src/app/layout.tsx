'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import NavbarItems from "./components/NavbarItems";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Head from "next/head"; // Adding Head

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
}: Readonly<{ children: React.ReactNode }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en" suppressHydrationWarning dir="ltr">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tech Zone - Buy Laptops, Mobile Phones, and Televisions</title>
        <meta
          name="description"
          content="Best prices for laptops, mobile phones, and televisions at Tech Zone - Fast delivery and valid warranty."
        />
        <meta
          name="keywords"
          content="laptop, smartphone, 4K television, Tech Zone, electronics prices"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tech Zone - Online Electronics Store" />
        <meta
          property="og:description"
          content="Buy laptops, mobile phones, and televisions at the best prices at Tech Zone."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techzone-re.netlify.app/" />
        <meta property="og:image" content="https://techzone-re.netlify.app//images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Zone - Buy Electronics Online" />
        <meta name="twitter:description" content="Best quality and prices at Tech Zone" />
        <meta name="twitter:image" content="https://techzone-re.netlify.app//images/twitter-image.jpg" />
        <link rel="canonical" href="https://techzone-re.netlify.app/" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem={false}
              disableTransitionOnChange
            >
              <NavbarItems />
              {children}
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
