import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import "./globals.css";
import NavBar from '~/components/layout/NavBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HotelBooking",
  description: "Book a hotel of your choice",
  icons: {icon: '/logo.svg'},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body >
          <main className="flex flex-col min-h-screen bg-secondary">
            <NavBar />

            <section className="flex-grow">
              {children}
            </section>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
