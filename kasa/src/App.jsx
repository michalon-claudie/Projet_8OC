import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/profil" component={Profil} />
      </Switch>
    </Router>
  );
}

export default App;