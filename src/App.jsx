import './styles/globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <QuickLinks />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
