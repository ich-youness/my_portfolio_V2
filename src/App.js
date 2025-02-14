import './App.css';
import { Intro } from './Components/Home/Intro';
import { NavBar } from './Components/Nav/NavBar';
import { About } from './Components/About/about';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <About/>
      
    </div>
  );
}

export default App;
