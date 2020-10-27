import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Martine from './pages/martine';
import Claude from './pages/claude';
import Jeanne from './pages/jeanne';
import NotFound from './pages/NotFound';
import './styles/styles.css';

const App = () =>{
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/jeanne" exact component={Jeanne} /> 
          <Route path="/claude" component={Claude} />
          <Route path="/martine" component={Martine} />
          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>

    </>

    );
};

export default App;