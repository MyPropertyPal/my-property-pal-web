import "./globals.css";
import Head from "next/head";
import Header from "./Navigation";
import { getAuth } from "firebase/auth";
import { initFirebase } from "@/app/firebase/config";
import app from "@/app/firebase/config";
import { AuthContextProvider } from "./context/AuthContext";
import { Lato } from "@next/font/google";
export const metadata = {
  title: "My Property Pal",
  description: "My Property Pal",
};

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function RootLayout({ children }) {
  const auth = getAuth(app);

  return (
    <html lang="en">
      <head></head>

      <body className="h-screen  bg-[#f6f6f6] `{lato.variable}`">
        <AuthContextProvider>
          {/* Include shared UI here e.g. a header or sidebar */}
          <Header />
          {children}
        </AuthContextProvider>
        {/* Add footer */}
      </body>
    </html>
  );
}
