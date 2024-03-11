import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import TopBar from "@/components/TopBar";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'], });

export const metadata = {
  title: "Facebook",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.com/terms",
        },
      }}
    >
      <html lang="en">
        <body className={poppins.className}>
          <div className=" max-h-14 py-3 bg-gray-100">
            <TopBar />
          </div>
          <main className="grid grid-cols-12 min-h-screen">

            <div className="max-sm:fixed bottom-0 w-full max-sm:max-h-16 sm:col-span-1 lg:col-span-2 bg-gray-100 ">
              <LeftSide />
            </div>
            <div className="col-span-12 sm:col-span-10 lg:col-span-7 p-5">{children}</div>

            <div className="max-lg:hidden lg:col-span-3 bg-gray-100">
              <RightSide />
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}