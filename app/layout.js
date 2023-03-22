import "./globals.css";
import Header from "./Navigation";
export const metadata = {
  title: "My Property Pal",
  description: "My Property Pal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-slate-400 ">
        <Header />
        {children}
      </body>
    </html>
  );
}
