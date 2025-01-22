import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile-pic-4.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
//import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element.scrollIntoView({behavior: 'smooth'});
  }

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Foto de perfíl de Carlos Rodríguez"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Carlos
          <br />
          Rodríguez
        </h1>
        <h2>Founder & CEO</h2>
        <span>
            <a href="https://instagram.com/oiramu_" target="_blank">
            <img src={instagramIcon} alt="Twitter icon" />
          </a>
          <a href="https://twitter.com/oiramu" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/oiramu" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/carlos-mario-rodriguez-pabon/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Si, el mismo.
        </p>
        <a onClick={scrollToAbout}>
          <button className="hover">Conóceme</button>
        </a>
        {
          /**
           * <a href={CV} download>
              <button className="hover">Conóceme</button>
            </a>
           */
        }
      </div>
    </section>
  );
}

export default Hero;