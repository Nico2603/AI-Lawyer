import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Lawyer - Asesoría Legal Inteligente',
  description: 'Asistente legal impulsado por IA especializado en leyes colombianas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-neutral-50">
          {children}
        </div>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
} 