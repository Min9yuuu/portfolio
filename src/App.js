import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import "./App.css";
import ServiceSec from "./components/ServiceSec/ServiceSec";
import Skill from "./components/Skill/Skill";

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <About />
      <ServiceSec />
      <Skill />
    </div>
  );
}

export default App;
