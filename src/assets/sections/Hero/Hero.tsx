import styles from "./hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      
      {/* TEXTO */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.text}>
          <h1>Hello, I’m Izabelly!</h1>
          <p>
            Desenvolvedora Full Stack com formação em Design e Gestão de TI.
            Unindo criatividade, lógica e tecnologia.
          </p>
        </div>

        <div className={styles.buttons}>
          <button onClick={ () => window.open("https://github.com/izabellygutierres")}>Repository</button>
          <button onClick={ () => window.open("https://www.behance.net/izabellygutierres")}>Behance</button>        
        </div>
      </motion.div>

      {/* IMAGEM */}
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >

        <img src="/src/assets/images/heropg.png" alt="Izabelly" />
      </motion.div>

    </section>
  );
}
