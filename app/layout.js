// import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],  
});

export const metadata = {
  title: "Finbiz",
  description: "Empowering your business with financial intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={dmSans.className}>{children}</body>
    </html>
  );
}
