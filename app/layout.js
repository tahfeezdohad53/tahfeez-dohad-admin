import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

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
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--background)">{children}</body>
    </html>
  );
}
