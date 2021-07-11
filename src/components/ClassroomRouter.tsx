import React, { ReactElement } from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import Classroom from './Classroom';
import { ROUTER_PATH_LEARN } from '../routes';


const ClassroomRouter: React.FC = (): ReactElement => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={[ROUTER_PATH_LEARN]}>
        <Redirect to={`${ROUTER_PATH_LEARN}/chapter1/lesson1`} />
      </Route>
      <Route exact path={`${path}/chapter1`}>
        <Redirect to={`${ROUTER_PATH_LEARN}/chapter1/lesson1`} />
      </Route>
      <Route path={`${path}/chapter1/lesson1`}>
        <Classroom databasePanelProps={{ tableNames: ['table1'] }}>
          <h1>Chapter 1 Lesson 1</h1>
          <Link to={`${path}/chapter1/lesson2`}>Next Lesson</Link>
        </Classroom>
      </Route>
      <Route path={`${path}/chapter1/lesson2`}>
        <Classroom databasePanelProps={{ tableNames: ['table1'] }}>
          <h1>Chapter 1 Lesson 2</h1>
          <Link to={`${path}/chapter1/lesson1`}>Previous Lesson</Link>
          <Link to={`${path}/chapter1/lesson3`}>Next Lesson</Link>
        </Classroom>
      </Route>
      <Route path={`${path}/chapter1/lesson3`}>
        <Classroom databasePanelProps={{ tableNames: ['table2'] }}>
          <h1>Chapter 1 Lesson 3</h1>
          <Link to={`${path}/chapter1/lesson2`}>Previous Lesson</Link>
          <Link to={`${path}/chapter1/lesson4`}>Next Lesson</Link>
        </Classroom>
      </Route>
      <Route path={`${path}/chapter1/lesson4`}>
        <Classroom databasePanelProps={{ tableNames: ['table2'] }}>
          <h1>Chapter 1 Lesson 4</h1>
          <Link to={`${path}/chapter1/lesson3`}>Previous Lesson</Link>
        </Classroom>
      </Route>
      <Route>
        <Classroom>
          <h1>Default Classroom for ClassroomRouter</h1>
        </Classroom>
      </Route>
    </Switch>
  );
};

export default ClassroomRouter;
