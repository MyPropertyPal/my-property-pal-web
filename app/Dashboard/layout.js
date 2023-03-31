import SideNav from "./SideNav";
import { Suspense } from "react";
import Loading from "./Loading";
export default function Layout({ children }) {
  return (
    <>
      <main className="flex">
        <SideNav />
        <Suspense fallback={<Loading/>}>

        {children}
        </Suspense>
      </main>
    </>
  );
}
