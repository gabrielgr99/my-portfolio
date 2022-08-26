import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('dark');

  const changeMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.getElementsByTagName('body')[0].className = 'dark';
    } else {
      setMode('light');
      document.getElementsByTagName('body')[0].className = 'light';
    }
  }

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <span onClick={ () => changeMode() } class="material-symbols-outlined">
        sunny
      </span>
      <Switch>
        <Route exact path="/" component={ () => <About value={ mode } /> } />
        <Route path="/projects" component={ () => <Projects value={ mode } /> } />
        <Route path="/skills" component={ () => <Skills value={ mode } /> } />
        <Route path="/contact" component={ () => <Contact value={ mode } /> } />
      </Switch>
    </div>
  );
}

export default App;
