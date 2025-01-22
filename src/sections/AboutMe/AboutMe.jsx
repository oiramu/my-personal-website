import styles from './AboutMe.module.css';
import me from '../../assets/me.webp';

function AboutMe() {

  return (
    <section id="about" className={styles.container}>
      <div className={styles.info}>
        <h1>
          Quién soy
        </h1>
        <p className={styles.description}>
          Nací en Barranquilla y soy egresado de la Universidad Simón Bolívar.
          <br /><br />
          A la edad de 10 años aprendí a programar en BASIC lo cual me enseñó a ver
          a las computadoras más allá de una herramienta, sinó como un potenciador
          del talento. Ej. Animación, Música, Producción Audiovisual y por supuesto
          Programación.
          <br /><br />
          A los 15 años desarrollé un "Doom-Clone" en Java con OpenGL, lo cual llamó la
          atención de mis compañeros, luego amigos y socios: Daniel, Ever, Brayan y Brian.
          Con quienes años más tarde crearíamos <a href="https://konfii.com">Konfii</a>, 
          una plataforma que, a través de la tecnología, empodera el talento y conecta necesidades.
          Nuestra misión ha sido transformar la manera en que las personas trabajan y colaboran, 
          creando un impacto positivo en nuestra sociedad.
          <br /><br />
          En 2023, nuestro trabajo fue reconocido por <b>Nuestra Barranquilla</b> y <b>MacondoLab</b>, 
          quienes nos premiaron como agentes de cambio por nuestro impacto positivo en la comunidad.
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