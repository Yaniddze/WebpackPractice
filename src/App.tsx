import React, { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

// Components
import { Wrapper } from './view/components/Wrapper';

// Pages
import { HelloPage } from './view/pages/HelloPage';
import { HomePage } from './view/pages/HomePage';

export const App: FC = () => (
  <Wrapper>
    <BrowserRouter>
      <Switch>
        <Route path="/hello">
          <HelloPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  </Wrapper>
);
