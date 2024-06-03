import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Features } from './components/Features';
import {Testomonial} from "./components/Testomonial";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Features/>
      <Testomonial/>
    </div>
  );
}

export default App;
