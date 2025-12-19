import { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};


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
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? "✕" : "☰"}
        </motion.span>
      </button>


      <AnimatePresence>
        {open && (
          <motion.nav
            className={styles.nav}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
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
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
