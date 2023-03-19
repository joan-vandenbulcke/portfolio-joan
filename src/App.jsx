import './App.scss';
import AppHeader from './Components/AppHeader';
import Content from './Components/Content';
import About from './Components/About';
import Works from './Components/Works';
import Projects from './Components/Projects';
import Timeline from './Components/Timeline';
import ContactForm from './Components/Footer';
import ScrollUpButton from './Components/ScrollUpButton';
import Skills from './Components/Skills';
import Footer from './Components/MoreContact';
// import { useState, useEffect } from 'react';

const App = () => {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 4000)
  // }, [])

  // return isLoading ? (
  //   <Loader />
  // ) : 
  return (
    <div className="app">
      <AppHeader />
      <Content />
      <About />
      <Works />
      <Projects />
      <Skills />
      <Timeline />
      <ContactForm />
      <ScrollUpButton />
      <Footer />
    </div>
  );
}

export default App
