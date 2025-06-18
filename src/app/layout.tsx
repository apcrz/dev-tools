import { ToastProvider } from '../providers/ToastProvider';
import type { Metadata } from "next";
import { Ubuntu_Sans, Ubuntu_Sans_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";
import { CommandPalette } from '@/app/components/CommandPalette';

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

const ubuntuSansMono = Ubuntu_Sans_Mono({
  variable: "--font-ubuntu-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ferramentas para desenvolvedores",
  description: "Ferramentas para desenvolvedores",
  authors: [{ name: "Allan Possani da Cruz" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${ubuntuSans.variable} ${ubuntuSansMono.variable} flex h-screen bg-gray-100`}>
        <ToastProvider>
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            {children}
            <CommandPalette />
          </main>
        </ToastProvider>
      </body>
    </html>
  );
}
