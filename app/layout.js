import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import UserProvider from "@/providers/UserProvider";
import AuthGuard from "@/features/auth/components/AuthGuard";
import Sidebar from "@/shared/components/Sidebar";

const inter = Inter({
  weight:['500','600','700'],
  subsets: ["latin"],
});



export const metadata = {
  title: "Admin Dashboard",
  description: "Tahfeez dohad admin dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-(--background)">
        <Toaster />
        <ReactQueryProvider>
          <UserProvider>
            <AuthGuard>
              {children}
            </AuthGuard>
          </UserProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
