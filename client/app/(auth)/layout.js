import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
  appearance={{
    layout: {
      socialButtonsPlacement: 'bottom',
      termsPageUrl: 'https://clerk.com/terms',
    
    }
  }}
>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
