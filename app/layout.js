import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta
          name="author"
          content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
        />
        <meta name="generator" content="Hugo 0.84.0" />
        <title>Offcanvas navbar template · Bootstrap v5.0</title>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
      <Script src="/assets/js/bootstrap.bundle.min.js" />
    </html>
  );
}
