import "./App.css";

import Header from "./component/Header";
import Education from "./component/Education";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Achievements from "./component/Achievements";

function App() {
  return (
    <div className="container">
      <Header />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
    </div>
  );
}

export default App;