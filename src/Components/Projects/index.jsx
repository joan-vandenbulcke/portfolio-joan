import './styles.scss';
import Evas from '../../assets/projects/evas.png';
import Ghibli from '../../assets/projects/ghibli.png';
import WebDev from '../../assets/projects/web-development.png';
import Dollar from '../../assets/projects/dollar.png';
import Video from '../../assets/projects/video.png';
import VideoBG from '../../assets/projects/videobg.jpg';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const Projects = () => (
  <section id='projects' className="projects">
    <div className='projects-header'>
      <h2 className="projects-title"><span className='numbers-span'>03.</span> Projects</h2>
      <p>Discover the projects I have been working on in recent weeks and learn more about my background by visiting them !</p>
      <p className="projects-description">Don't hesitate to create an account on the EVAS website and test the features for creating an association or a project, as well as any other functionality added to the platform.</p>
    </div>
    <div className='cards-container'>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container converter'>
          <img className='converter-img' src={Dollar} alt="billets de banques" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Currencies Converter</h3>
        <div className='card-tags'>
          <div className='card-tag typescript'>Typescript<SiTypescript /></div>
          <div className='card-tag react'>React<FaReact /></div>
          <div className='card-tag ant'>Ant Design<SiAntdesign /></div>

        </div>
        <p className='card-description'>This small application is a currency converter. The project uses React and TypeScript. I also used the Ant Design library to style it.</p>
        <div className='card-links__converter card-links'>
          <a target="_blank" href='https://github.com/joan-vandenbulcke/convertisseur-typescript'>
            <div className='card-link card-link__converter view'>
              <GitHubIcon />
              <p className='card-link__view--text'>Github Repo</p>
            </div>
          </a>
          <a target="_blank" href='https://joan-converter.netlify.app/'>
            <div className='card-link card-link__converter github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container evas'>
          <img className='evas-img' src={Evas} alt="evas" />
        </div>
        <p className='card-reference'>School Project / Real company</p>
        <h3 className='card-title'>EVAS Website</h3>
        <div className='card-tags'>
          <div className='card-tag react'>React <FaReact /></div>
          <div className='card-tag scss'>SCSS <FaSass /></div>
          <div className='card-tag node'>NodeJS <FaNodeJs /></div>
          <div className='card-tag express'>Express <SiExpress /></div>
          <div className='card-tag postgre'>PostgreSQL <SiPostgresql /></div>
        </div>
        <p className='card-description'>I held the position of React front-end developer for EVAS, a company that connects businesses and associations to finance environmental projects.</p>
        <div className='card-links__evas card-links'>
          <a className='blocked-link'>
            <div className='card-link card-link__evas view'>
              <GitHubIcon />
              <p className='card-link__view--text'>Github Repo</p>
            </div>
          </a>
          <a href="https://evas-front.netlify.app/" target="_blank">
            <div className='card-link card-link__evas github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container video'>
          <img className='video-img' src={Video} alt="logo netflix" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Video Platform</h3>
        <div className='card-tags'>
          <div className='card-tag react'>React <FaReact /></div>
          <div className='card-tag typescript'>Typescript <SiTypescript /></div>
          <div className='card-tag next'>Next.js <SiNextdotjs /></div>
          <div className='card-tag tailwind'>Tailwind <SiTailwindcss /></div>
        </div>
        <p className='card-description'>I completed this personal project with the help of a YouTube tutorial that allowed me to practice React and learn the basics of TypeScript and Next.js.</p>
        <div className='card-links__video card-links'>
          <a className='blocked-link'>
            <div className='card-link card-link__video view'>
              <GitHubIcon />
              <p className='card-link__view--text'>Github Repo</p>
            </div>
          </a>
          <a href="https://video-platform-git-main-joan-vandenbulcke.vercel.app/" target="_blank">
            <div className='card-link card-link__video github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container ghibli'>
          <img className='ghibli-img' src={Ghibli} alt="personnages ghibli" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Studios Ghibli Register</h3>
        <div className='card-tags'>
          <div className='card-tag html'>HTML <FaHtml5 /></div>
          <div className='card-tag node'>NodeJS <FaNodeJs /></div>
          <div className='card-tag express'>Express <SiExpress /></div>
          <div className='card-tag ejs'>EJS</div>
          <div className='card-tag scss'>SCSS <FaSass /></div>
        </div>
        <p className='card-description'>This website lists the different productions of Studio Ghibli in a simple presentation. It is a side project I created to practice using NodeJS, Express, and rendering data in EJS.</p>
        <div className='card-links__ghibli card-links'>
          <a className='blocked-link'>
            <div className='card-link card-link__ghibli view'>
              <GitHubIcon />
              <p className='card-link__view--text'>Github Repo</p>
            </div>
          </a>
          <a href="https://ghibli-joan-vandenbulcke.up.railway.app/" target="_blank">
            <div className='card-link card-link__ghibli github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container portfolio'>
          <img className='portfolio-img' src={WebDev} alt="personnages ghibli" />
        </div>
        <p className='card-reference'>Portfolio</p>
        <h3 className='card-title'>This website</h3>
        <div className='card-tags'>
          <div className='card-tag html'>HTML <FaHtml5 /></div>
          <div className='card-tag scss'>SCSS <FaSass /></div>
          <div className='card-tag javascript'>Javascript <SiJavascript /></div>
          <div className='card-tag react'>React<FaReact /></div>
        </div>
        <p className='card-description'>This website is developed in React and includes interactive features to display my education, manage automatic scrolling through links/buttons, change the display of certain elements, and more !</p>
        <div className='card-links__portfolio card-links'>
          <a className='blocked-link' target="_blank">
            <div className='card-link card-link__portfolio view'>
              <GitHubIcon />
              <p className='card-link__view--text'>Github Repo</p>
            </div>
          </a>
          <a target="_blank">
            <div className='card-link card-link__portfolio github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
    </div>
  </section >
);

export default Projects;
