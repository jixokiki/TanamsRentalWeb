import { Poppins } from "next/font/google";
import "./globals.css";
// Contoh penambahan favicon.ico di dalam komponen Head
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "TANAMS RENT",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
      <Head>
        <link rel="icon" href="/src/app/favicon.ico" />
      </Head>
    </html>
  );
}