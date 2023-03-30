import "./globals.css";
import Header from "./Navigation";
import { getAuth } from "firebase/auth";
import { initFirebase } from "@/app/firebase/config";
import app from "@/app/firebase/config";
import { AuthContextProvider } from "./context/AuthContext";
export const metadata = {
  title: "My Property Pal",
  description: "My Property Pal",
};

export default function RootLayout({ children }) {
  const auth = getAuth(app);

  return (
    <html lang="en">
      <body className="h-screen ">
        <AuthContextProvider>
          {/* Include shared UI here e.g. a header or sidebar */}
          <Header />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
