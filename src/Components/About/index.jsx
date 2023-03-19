import './styles.scss';
import picture from '../../assets/photo-site.jpg';
import { MdRadioButtonChecked } from "react-icons/md";

const About = () => (
  <section id='about' className="about">
    <h2 className="about-title"><span className='numbers-span'>01.</span> About me</h2>
    <div className="about-container">
      <div className="about-container-left">
        <p className="about-text">After a successful experience in digital marketing and managing a communication agency, I am now passionate about web development, which I have been exploring for many years! I am eager to be able to assist you in your missions!</p>
        <p className="about-text">To train myself, I completed a full-stack JavaScript web developer course at O'Clock, a training center where I was able to study numerous front-end and back-end development concepts.</p>
        <p className="about-text">Finally, I was able to join a team for a one-month project to create a website for a company. In this project, I was paired with a team member to work on the front-end development of the application, and we were able to achieve our initial MVP goal! You can find more details about my background and projects in the rest of my portfolio ! Please feel free to browse it and contact me !</p>
        <ul className="about-list">
          <li className="about-list-item"><MdRadioButtonChecked /> Javascript ES6+</li>
          <li className="about-list-item"><MdRadioButtonChecked /> React</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Node.js</li>
          <li className="about-list-item"><MdRadioButtonChecked /> PostgreSQL</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Express</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Redux</li>
        </ul>
      </div>
      <div className="about-container-right">
        <img className="picture personal-picture" src={picture} alt="My picture" />
      </div>
    </div>
  </section>
);

export default About;
