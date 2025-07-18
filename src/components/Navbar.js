import Link from "next/link";
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbar}>
        <li>
          <Link className={styles.listItem}href="/">Home</Link>
        </li>
        <li>
          <Link className={styles.listItem}href="/about-us">About Us</Link>
        </li>
        <li>
          <Link className={styles.listItem}href="/news">News</Link>
        </li>
        <li>
          <Link className={styles.listItem}href="/submit-a-tip">Submit A Tip</Link>
        </li>
        <li>
          <Link className={styles.listItem}href="/more-info">More Info</Link>
        </li>
      </ul>
    </nav>
  );
}
