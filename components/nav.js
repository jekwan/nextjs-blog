import styles from "./nav.module.css";
import utilStyle from "../styles/utils.module.css";

import Link from "next/link";

import globals from "../lib/globals";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <h2 className={utilStyle.headingLg}>
            <Link href="/">{globals.title}</Link>
          </h2>
        </li>
        <li>
          <h3 className={utilStyle.headingMd}>
            <Link href="/projects">Projects</Link>
          </h3>
        </li>
        <li>
          <h3 className={utilStyle.headingMd}>
            <Link href="/blog">Blog</Link>
          </h3>
        </li>
      </ul>
    </nav>
  );
}
