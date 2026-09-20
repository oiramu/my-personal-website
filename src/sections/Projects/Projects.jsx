import styles from './Projects.module.css';
import gasolinappImg from '../../assets/projects/gasolinapp.webp';
import konfiiImg from '../../assets/projects/konfii.webp';
import cheetahImg from '../../assets/projects/cheetah.webp';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../common/ThemeContext';

const statusColors = {
  Vivo: '#28C840',
  Cerrado: '#FF5F57',
  Archivado: '#FEBC2E',
};

const projects = [
  {
    name: 'Gasolinapp',
    status: 'Vivo',
    href: 'https://gasolinapp.oiramu.com',
    image: gasolinappImg,
    alt: 'Mapa de Gasolinapp con precios de gasolina reportados por la comunidad',
    description:
      'Precios de gasolina en Colombia, reportados por la gente que tanquea.',
  },
  {
    name: 'Konfii',
    status: 'Cerrado',
    href: null,
    image: konfiiImg,
    alt: 'Interfaz de Konfii, marketplace de servicios a demanda en Barranquilla',
    description:
      'Marketplace de servicios a demanda que conectaba clientes con proveedores locales en Barranquilla.',
  },
  {
    name: 'Cheetah Engine',
    status: 'Archivado',
    href: 'https://github.com/oiramu/cheetah-engine',
    github: 'https://github.com/oiramu/cheetah-engine',
    image: cheetahImg,
    alt: 'Shooter construido sobre Cheetah Engine, motor gráfico 3D en Java y OpenGL',
    description:
      'Motor gráfico 3D escrito desde cero en Java y OpenGL, con un shooter encima.',
  },
];

function ProjectCard({ project, githubIcon }) {
  const Wrapper = project.href ? 'a' : 'div';
  const wrapperProps = project.href
    ? { href: project.href, target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <Wrapper className={styles.card} {...wrapperProps}>
      <img
        src={project.image}
        width={640}
        height={400}
        loading="lazy"
        alt={project.alt}
        className={styles.image}
      />
      <div className={styles.cardBody}>
        <div className={styles.cardHeading}>
          <h3>{project.name}</h3>
          <span className={styles.status}>
            <span
              className={styles.statusDot}
              style={{ backgroundColor: statusColors[project.status] }}
            />
            {project.status}
            {project.github && (
              <img
                src={githubIcon}
                width={14}
                height={14}
                alt="Repositorio en GitHub"
                className={styles.githubIcon}
              />
            )}
          </span>
        </div>
        <p className={styles.description}>{project.description}</p>
      </div>
    </Wrapper>
  );
}

function Projects() {
  const { theme } = useTheme();
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <p className={styles.subtitle}>
        Algunos de mis proyectos personales: los que siguen vivos, y algún
        que otro que desempolvo de vez en cuando.
      </p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} githubIcon={githubIcon} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
