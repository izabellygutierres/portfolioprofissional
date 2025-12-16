import styles from "./resume.module.css";
import { motion } from "framer-motion";


export default function Resume() {
  return (
    <section className={styles.resume} id="resume">

      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

      <div className={styles.left}>
        <h2>Education</h2>

        <div className={styles.item}>
          <span>2022–2023</span>
          <p>Técnico em Multimídia — Senac</p>
        </div>

        <div className={styles.item}>
          <span>2024–2026</span>
          <p>Gestão da Tecnologia da Informação — USJT</p>
        </div>

        <div className={styles.item}>
          <span>2024</span>
          <p>Bootcamp Desenvolvedora Full Stack — Generation</p>
        </div>

        <h2 className={styles.experienceTitle}>Experience</h2>

        <div className={styles.item}>
          <span>2022–2023</span>
          <p>Projetos acadêmicos em Design e Multimídia</p>
        </div>

        <div className={styles.item}>
          <span>2024–2025</span>
          <p>Projetos Full Stack em Java, React e MySQL</p>
        </div>
      </div>
      </motion.div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >

      <div className={styles.right}>
        <h2>Technical Skills</h2>

        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>HTML & CSS</li>
          <li>MySQL</li>
          <li>Git & GitHub</li>
        </ul>

        <h2 className={styles.languages}>Languages</h2>

        <p>Portuguese — Native</p>
        <p>English — Intermediate</p>
      </div>
      </motion.div>

    </section>
  );
}
