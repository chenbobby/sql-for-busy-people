import React, { ReactElement, useState } from 'react';
import Split from 'react-split';
import { Database } from 'sql.js';

import DatabasePanel from '../panels/DatabasePanel';
import QueryPanel from '../panels/QueryPanel';
import QueryResultsPanel from '../panels/QueryResultsPanel';
import TextbookPanel from '../panels/TextbookPanel';

import './Classroom.css';


interface ClassroomAllProps {
  db?: Database,
  tableNames: [string],
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
};


/**
 * `ClassroomAll` renders all panels: `TextbookPanel`, `DatabasePanel`, `QueryPanel`, and
 * `QueryResultsPanel`.
 */
const ClassroomAll: React.FC<ClassroomAllProps> = (props) => {
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
        <div>
          <Split
            direction="vertical"
            sizes={[40, 20, 40]}
            snapOffset={0}
            className="split-horizontal--right"
          >
            <div>
              <DatabasePanel {...props} />
            </div>
            <div>
              <QueryPanel {...props} />
            </div>
            <div>
              <QueryResultsPanel {...props} />
            </div>
          </Split>
        </div>
      </Split>
    </main>
  );
};


export default ClassroomAll;
