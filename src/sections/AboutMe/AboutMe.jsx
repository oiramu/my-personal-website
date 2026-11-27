import styles from './AboutMe.module.css';
import me from '../../assets/me.webp';

function AboutMe() {

  return (
    <section id="about" className={styles.container}>
      <div className={styles.info}>
        <h1 className="sectionTitle">Quién soy</h1>
        <p className={styles.description}>
          Nací en Barranquilla y soy egresado de la Universidad Simón Bolívar.
          <br /><br />
          A la edad de 10 años aprendí a programar en BASIC lo cual me enseñó a ver
          a las computadoras más allá de una herramienta, sinó como un potenciador
          del talento. Ej. Animación, Música, Producción Audiovisual y por supuesto
          Programación.
          <br /><br />
          A los 15 años desarrollé Cheetah Engine, un "Doom-Clone" en Java con OpenGL,
          lo cual llamó la atención de mis compañeros, luego amigos y socios: Daniel,
          Ever, Brayan y Brian. Con ellos fundamos <b>Konfii</b>, un marketplace de
          talento local en Barranquilla; más abajo te cuento qué fue de él.
          <br /><br />
          Hoy sigo construyendo de punta a punta — producto, frontend, backend e
          infraestructura:
          <br /><br />
          <b>Atelier</b>: un armario con IA, en beta privada, que arma outfits con tu
          propia ropa según tu estilo, la ocasión y el clima.
          <br /><br />
          <b>Gasolinapp</b>: un mapa colaborativo donde la gente reporta y verifica en
          tiempo real los precios de Corriente, Extra y Diésel en Colombia.
        </p>
      </div>
      <div className={styles.colorModeContainer}>
        <img
          src={me}
          className={styles.hero}
          alt="Carlos Rodríguez"
        />
      </div>
    </section>
  );
}

export default AboutMe;