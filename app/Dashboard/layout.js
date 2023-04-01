import SideNav from "./SideNav";
import { Suspense } from "react";
import Loading from "./loading";
export default function Layout({ children }) {
  return (
    <>
      <main className="flex">
        <SideNav />
        {/* <Suspense fallback={<Loading />}> */}
        {children}
        {/* </Suspense> */}
      </main>
    </>
  );
}
