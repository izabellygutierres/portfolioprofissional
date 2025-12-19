import { tr } from "framer-motion/client";  
import styles from "./portfolio.module.css";
import { motion, type Variants  } from "framer-motion";


const containerVariants : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="work">
      <h2 className={styles.title}>Work</h2>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}>
      <motion.div 
        className={styles.card}
        variants={cardVariants}>
          <h3>Crud Farmácia</h3>
          <p>
            API REST em Java e Spring Boot com MySQL, CRUD completo e Swagger.
          </p>
          <div className={styles.tech}>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
          </div>
        </motion.div>

        <motion.div className={styles.card} variants={cardVariants}>
          <h3>CRM Opportune</h3>
          <p>
            Plataforma CRM com backend Java e frontend React.
          </p>
          <div className={styles.tech}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Java</span>
          </div>
        </motion.div>

        <motion.div className={styles.card} variants={cardVariants}>
          <h3>Portfólio Pessoal</h3>
          <p>
            Site responsivo criado com React, TypeScript e CSS Modules.
          </p>
          <div className={styles.tech}>
            <span>React</span>
            <span>TypeScript</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
