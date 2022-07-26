import { Route, Switch } from 'react-router-dom';
import './App.css';
import Description from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Warning from './pages/Warning';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Description } />
      <Route path="/projects" component={ Projects } />
      <Route path="/skills" component={ Skills } />
      <Route path="/warning" component={ Warning } />
    </Switch>
  );
}

export default App;
