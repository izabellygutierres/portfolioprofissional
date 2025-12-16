import { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-scroll";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>IG</div>

      {/* Botão hamburguer */}
      <button
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <Link
          to="about"
          smooth
          duration={600}
          offset={-100}
          spy
          activeClass={styles.active}
          onClick={() => setOpen(false)}
        >
          About me
        </Link>

        <Link
          to="resume"
          smooth
          duration={600}
          offset={-100}
          spy
          activeClass={styles.active}
          onClick={() => setOpen(false)}
        >
          Resume
        </Link>

        <Link
          to="work"
          smooth
          duration={600}
          offset={-100}
          spy
          activeClass={styles.active}
          onClick={() => setOpen(false)}
        >
          Work
        </Link>

        <Link
          to="contact"
          smooth
          duration={600}
          offset={-100}
          spy
          activeClass={styles.active}
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
