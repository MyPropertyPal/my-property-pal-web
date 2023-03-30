import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex">
      <SideNav/>
        {children}
        </main>
    </>
  );
}
