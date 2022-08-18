import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ About } />
      <Route path="/projects" component={ Projects } />
      <Route path="/skills" component={ Skills } />
      <Route path="/contact" component={ Contact } />
    </Switch>
  );
}

export default App;
