import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import Hero from './component/Hero';
import Market from './component/Market';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Market />
    </div>
  );
}

export default App;
