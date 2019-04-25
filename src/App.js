import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';

import Header from './components/Header'
import Search from './components/Search'
import Body from './components/Body'
import NotFound from './components/NotFound'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Switch>
            {/*Routes: Creating routes to the appropiate searchs, also sending query information via props*/}
            <Route exact path="/" component={() => (<Search />)}></Route>
            <Route path="/cats" component={() => (<Body query={"cats"} />)}></Route>
            <Route path="/dogs" component={() => (<Body query={"dogs"} />)}></Route>
            <Route path="/birds" component={() => (<Body query={"birds"} />)}></Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
