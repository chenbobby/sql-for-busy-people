import React, { useEffect, useState } from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import initSqlJs, { Database, QueryExecResult } from 'sql.js';

import ClassroomAll from './classrooms/ClassroomAll';
import ClassroomTDB from './classrooms/ClassroomTDB';
import ClassroomTO from './classrooms/ClassroomTO';
import { ROUTER_PATH_LEARN } from '../routes';


const ClassroomRouter: React.FC = () => {
  let { path } = useRouteMatch();
  const [db, setDB] = useState<Database>();
  const [query, setQuery] = useState<string>('');
  const [queryResults, setQueryResults] = useState<QueryExecResult[]>([] as QueryExecResult[]);
  const [queryError, setQueryError] = useState<Error>();

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
        <ClassroomTO>
          <h1>Chapter 1 Lesson 1</h1>
          <Link to={`${path}/chapter1/lesson2`}>Next Lesson</Link>
        </ClassroomTO>
      </Route>
      <Route path={`${path}/chapter1/lesson2`}>
        <ClassroomAll
          db={db}
          tableNames={['table1']}
          query={query}
          setQuery={setQuery}
          queryResults={queryResults}
          setQueryResults={setQueryResults}
          queryError={queryError}
          setQueryError={setQueryError}
        >
          <h1>Chapter 1 Lesson 2</h1>
          <Link to={`${path}/chapter1/lesson1`}>Previous Lesson</Link>
          <Link to={`${path}/chapter1/lesson3`}>Next Lesson</Link>
        </ClassroomAll>
      </Route >
      <Route path={`${path}/chapter1/lesson3`}>
        <ClassroomAll
          db={db}
          tableNames={['table1']}
          query={query}
          setQuery={setQuery}
          queryResults={queryResults}
          setQueryResults={setQueryResults}
          queryError={queryError}
          setQueryError={setQueryError}
        >
          <h1>Chapter 1 Lesson 3</h1>
          <Link to={`${path}/chapter1/lesson2`}>Previous Lesson</Link>
          <Link to={`${path}/chapter1/lesson4`}>Next Lesson</Link>
        </ClassroomAll>
      </Route>
      <Route path={`${path}/chapter1/lesson4`}>
        <ClassroomTDB
          db={db}
          tableNames={['table1']}
        >
          <h1>Chapter 1 Lesson 4</h1>
          <Link to={`${path}/chapter1/lesson3`}>Previous Lesson</Link>
        </ClassroomTDB>
      </Route>
      <Route>
        <ClassroomTO>
          Not Found
        </ClassroomTO>
      </Route>
    </Switch >
  );
};

export default ClassroomRouter;
