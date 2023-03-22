import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <body>
        <p className="text-red-500">This is my app</p>
      </body>
    </main>
  );
}
