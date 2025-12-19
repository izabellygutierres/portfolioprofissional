import styles from "./portfolio.module.css";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* CARD 1 */}
        <motion.a
          href="https://github.com/izabellygutierres/Crud-farmacia.git"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          variants={cardVariants}
        >
          <h3>Crud Farmácia</h3>
          <p>
            API REST em Java e Spring Boot com MySQL, CRUD completo e Swagger.
          </p>
          <div className={styles.tech}>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
          </div>
        </motion.a>

        {/* CARD 2 */}
        <motion.a
          href="https://github.com/Projeto-Integrador-Equipe04/opportune-app.git"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          variants={cardVariants}
        >
          <h3>CRM Opportune</h3>
          <p>
            Plataforma CRM com backend Java e frontend React.
          </p>
          <div className={styles.tech}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Java</span>
          </div>
        </motion.a>

        {/* CARD 3 */}
        <motion.a
          href="https://github.com/izabellygutierres/portfolioprofissional.git"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          variants={cardVariants}
        >
          <h3>Portfólio Pessoal</h3>
          <p>
            Site responsivo criado com React, TypeScript e CSS Modules.
          </p>
          <div className={styles.tech}>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS Modules</span>
          </div>
        </motion.a>
        {/* CARD 4 */}
        <motion.a
          href="https://github.com/izabellygutierres/blogPessoalFront.git"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          variants={cardVariants}
        >
          <h3>Blog Pessoal - Generantion</h3>
          <p>
            Site responsivo criado com React, TypeScript e integrado com API de posts.
          </p>
          <div className={styles.tech}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Swagger</span>
            <span>Banco de Dados</span>
          </div>
        </motion.a>
        <h2 className={styles.title}>Design Grafíco</h2>
        <br />
        <motion.a
          href="https://github.com/izabellygutierres/Crud-farmacia.git"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          variants={cardVariants}
        >
          <h3>Identidade Visual</h3>

          <img
            src="/src/assets/images/Propaganda.png"
            alt="Miniatura do projeto Identidade Visual"
            className={styles.thumbnail}
          />
          <p>
            Site responsivo criado com React, TypeScript e integrado com API de posts.
          </p>

          <div className={styles.tech}>
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>InDesign</span>
          </div>
          </motion.a>
          
          <motion.a
          href="https://github.com/izabellygutierres/Crud-farmacia.git"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          variants={cardVariants}
        >
          <h3>Identidade Visual</h3>

          <img
            src="/src/assets/images/Propaganda.png"
            alt="Miniatura do projeto Identidade Visual"
            className={styles.thumbnail}
          />
          <p>
            Site responsivo criado com React, TypeScript e integrado com API de posts.
          </p>

          <div className={styles.tech}>
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>InDesign</span>
          </div>
        </motion.a>


      </motion.div>
    </section>
  );
}
