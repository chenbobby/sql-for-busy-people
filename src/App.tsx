import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import ClassroomRouter from './components/ClassroomRouter';
import NavBar from './components/NavBar';
import {
  ROUTER_PATH_ABOUT,
  ROUTER_PATH_LANDING,
  ROUTER_PATH_LEARN,
} from './routes';

const About = React.lazy(() => import(/* webpackPrefetch: true */ './components/About'));


const App: React.FC = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path={ROUTER_PATH_LANDING}>
            <div>
              <h1>Landing Page</h1>
              <p>
                <Link to={ROUTER_PATH_ABOUT}>
                  About
                </Link>
              </p>
            </div>
          </Route>
          <Route exact path={ROUTER_PATH_ABOUT}>
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          </Route>
          <Route path={ROUTER_PATH_LEARN}>
            <ClassroomRouter />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
