import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { useState } from 'react';
import AppContext from './context/AppContext';

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
    <AppContext.Provider value={ mode }>
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <span onClick={ () => changeMode() } className={ `span-${ mode } material-symbols-outlined` }>
          sunny
        </span>
        <Switch>
          <Route exact path="/" component={ () => <About /> } />
          <Route path="/projects" component={ () => <Projects /> } />
          <Route path="/skills" component={ () => <Skills /> } />
          <Route path="/contact" component={ () => <Contact /> } />
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
