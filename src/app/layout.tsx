'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "./providers/theme-provider";
import NavbarItems from "./components/NavbarItems";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/store"; // persistor رو اینجا وارد کن



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
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <PersistGate loading={<div>در حال بارگذاری...</div>} persistor={persistor}>
            <div suppressHydrationWarning>
              <NavbarItems />
            </div>
            <QueryClientProvider client={queryClient}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem={false}
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
