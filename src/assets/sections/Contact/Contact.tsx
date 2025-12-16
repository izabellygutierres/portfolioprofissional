import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2>Let’s talk</h2>

      <p className={styles.text}>
        Estou aberta a oportunidades na área de Tecnologia, Desenvolvimento e
        Gestão de Projetos em TI.
      </p>

      <div className={styles.info}>
        <p>
          <strong>Email:</strong> izabellygutierres@gmail.com
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/izabelly-gutierres
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            github.com/izabellygutierres
          </a>
        </p>
      </div>
    </section>
  );
}
