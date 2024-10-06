import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import React from "react";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Sunshine",
  description: "Sunshine - Женская красота в новом свете.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <React.StrictMode>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          <Footer />
        </React.StrictMode>
      </body>
    </html>
  );
}
