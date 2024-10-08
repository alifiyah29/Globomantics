import { Open_Sans } from "next/font/google";
import Link from "next/link";
import styles from "./rootstyle.module.css";
import "./global.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  weights: [400],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <head />
      <body>
        <header className={styles.header}>
          <h1>
            <Link className={styles.homeLink} href="/home">
              Globomantics
            </Link>
          </h1>
          <h3>
            <Link className={styles.menuBar} href="/blog">
              Blog
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBar} href="/settings">
              Settings
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBar} href="/conference">
              Conference
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  );
}
