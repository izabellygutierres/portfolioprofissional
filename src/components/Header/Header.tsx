import { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>IG</div>

      {/* MENU (DESKTOP + MOBILE CONTROLADO PELO CSS) */}
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <Link
          to="about"
          smooth
          duration={600}
          offset={-100}
          onClick={() => setOpen(false)}
        >
          About me
        </Link>

        <Link
          to="resume"
          smooth
          duration={600}
          offset={-100}
          onClick={() => setOpen(false)}
        >
          Resume
        </Link>

        <Link
          to="work"
          smooth
          duration={600}
          offset={-100}
          onClick={() => setOpen(false)}
        >
          Work
        </Link>

        <Link
          to="contact"
          smooth
          duration={600}
          offset={-100}
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </nav>

      {/* BOTÃO HAMBURGUER (MOBILE) */}
      <button
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? "✕" : "☰"}
        </motion.span>
      </button>
    </header>
  );
}
