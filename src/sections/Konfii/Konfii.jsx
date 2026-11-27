import styles from './Konfii.module.css';
import konfiiLogo from '../../assets/konfii-logo.webp';

function Konfii() {
  return (
    <section id="konfii" className={styles.container}>
      <div className={styles.info}>
        <h1 className="sectionTitle">Qué fue de Konfii</h1>
        <p className={styles.description}>
          Con Daniel, Ever, Brayan y Brian construimos <b>Konfii</b>, un marketplace
          para contratar talento local verificado en Barranquilla.
          <br /><br />
          Quien necesitaba un servicio encontraba profesionales con identidad
          verificada, negociaba directo con ellos por chat y pagaba con el dinero
          protegido hasta aprobar el trabajo. Quien ofrecía su talento creaba un
          perfil gratis y entraba en el radar de nuevos clientes. Funcionaba en web,
          iOS y Android, en español, inglés y portugués.
          <br /><br />
          Fuimos uno de los 10 proyectos seleccionados en la convocatoria
          <b> EUREKA!</b>, y en 2023 <b>Nuestra Barranquilla</b> y <b>MacondoLab</b> nos
          reconocieron como agentes de cambio por la juventud de la ciudad.
          <br /><br />
          Konfii cerró, pero fue la escuela donde aprendí a sostener producto,
          capital y ejecución técnica al mismo tiempo.
        </p>
      </div>
      <img
        src={konfiiLogo}
        className={styles.logo}
        width={480}
        height={480}
        loading="lazy"
        alt="Logo de Konfii"
      />
    </section>
  );
}

export default Konfii;
