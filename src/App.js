import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Features } from './components/Features';
import {Testomonial} from "./components/Testomonial";
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Features/>
      <Testomonial/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
