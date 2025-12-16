import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="work">
      <h2 className={styles.title}>Work</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Crud Farmácia</h3>
          <p>
            API REST em Java e Spring Boot com MySQL, CRUD completo e Swagger.
          </p>
          <div className={styles.tech}>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
          </div>
        </div>

        <div className={styles.card}>
          <h3>CRM Opportune</h3>
          <p>
            Plataforma CRM com backend Java e frontend React.
          </p>
          <div className={styles.tech}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Java</span>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Portfólio Pessoal</h3>
          <p>
            Site responsivo criado com React, TypeScript e CSS Modules.
          </p>
          <div className={styles.tech}>
            <span>React</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}
