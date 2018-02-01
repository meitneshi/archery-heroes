// @flow
import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './components/page/LandingPage';
import DetailPage from './components/page/DetailPage';
import CreatePage from './components/page/CreatePage';
import UpdatePage from './components/page/UpdatePage';
import NotFound from './components/page/NotFound';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/athlete/:id" component={DetailPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/update/:id" component={UpdatePage} />
        <NotFound />
      </Switch>
    </HashRouter>
  );
};

export default App;
