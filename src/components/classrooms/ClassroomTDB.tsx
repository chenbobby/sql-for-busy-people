import React from 'react';
import Split from 'react-split';
import { Database } from 'sql.js';

import DatabasePanel from '../panels/DatabasePanel';
import TextbookPanel from '../panels/TextbookPanel';

import './Classroom.css';


interface ClassroomTDBProps {
  db?: Database,
  tableNames: [string],
};


/*
 * `ClassroomTDB` renders the `TextbookPanel` only.
 */
const ClassroomTDB: React.FC<ClassroomTDBProps> = (props) => {
  return (
    <main>
      <Split
        direction="horizontal"
        sizes={[55, 45]}
        snapOffset={0}
        className="split-horizontal"
      >
        <div>
          <TextbookPanel>
            {props.children}
          </TextbookPanel>
        </div>
        <div className="split-horizontal--right">
          <DatabasePanel
            db={props.db}
            tableNames={props.tableNames}
          />
        </div>
      </Split>
    </main>
  );
};


export default ClassroomTDB;
