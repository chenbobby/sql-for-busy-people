import React, { ReactElement, useEffect, useState } from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import initSqlJs, { Database } from 'sql.js';

import Classroom from './Classroom';
import { ROUTER_PATH_LEARN } from '../routes';


const ClassroomRouter: React.FC = (): ReactElement => {
  let { path } = useRouteMatch();
  const [db, setDB] = useState<Database>();
  const [query, setQuery] = useState<string>('SELECT * FROM table2;');

  useEffect(() => {
    (async () => {
      const SQL = await initSqlJs({
        locateFile: (filename: string) => `/wasm/${filename}`,
      });
      const dbResponse = await fetch("/sqlite3/db.sqlite3");
      const dbBuffer = await dbResponse.arrayBuffer();
      const db = new SQL.Database(new Uint8Array(dbBuffer));
      setDB(db);
    })();
  }, []);

  return (
    <Switch>
      <Route exact path={[ROUTER_PATH_LEARN]}>
        <Redirect to={`${ROUTER_PATH_LEARN}/chapter1/lesson1`} />
      </Route>
      <Route exact path={`${path}/chapter1`}>
        <Redirect to={`${ROUTER_PATH_LEARN}/chapter1/lesson1`} />
      </Route>
      <Route path={`${path}/chapter1/lesson1`}>
        <Classroom
          db={db}
          tableNames={['table1']}
          query={query}
          setQuery={setQuery}
        >
          <h1>Chapter 1 Lesson 1</h1>
          <Link to={`${path}/chapter1/lesson2`}>Next Lesson</Link>
        </Classroom>
      </Route>
      <Route path={`${path}/chapter1/lesson2`}>
        <Classroom
          db={db}
          tableNames={['table1']}
          query={query}
          setQuery={setQuery}
        >
          <h1>Chapter 1 Lesson 2</h1>
          <Link to={`${path}/chapter1/lesson1`}>Previous Lesson</Link>
          <Link to={`${path}/chapter1/lesson3`}>Next Lesson</Link>
        </Classroom>
      </Route >
      <Route path={`${path}/chapter1/lesson3`}>
        <Classroom
          db={db}
          tableNames={['table1']}
          query={query}
          setQuery={setQuery}
        />
      </Route>
      <Route path={`${path}/chapter1/lesson4`}>
        <Classroom
          db={db}
          tableNames={['table1']}
          query={query}
          setQuery={setQuery}
        >
          <h1>Chapter 1 Lesson 4</h1>
          <Link to={`${path}/chapter1/lesson3`}>Previous Lesson</Link>
        </Classroom>
      </Route>
      <Route>
        <Classroom
          db={db}
          tableNames={['table1']}
          query={query}
          setQuery={setQuery}
        >
          Not Found
        </Classroom>
      </Route>
    </Switch >
  );
};

export default ClassroomRouter;
