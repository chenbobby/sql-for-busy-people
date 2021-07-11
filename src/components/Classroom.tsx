import React, { ReactElement, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Split from 'react-split';

import DatabasePanel, { DatabasePanelProps } from './DatabasePanel';
import QueryPanel, { QueryPanelProps } from './QueryPanel';
import TextbookPanel from './TextbookPanel';

import './Classroom.css';
import QueryResultsPanel, { QueryResultsPanelProps } from './QueryResultsPanel';
import { Database } from 'sql.js';

interface ClassroomProps {
  db?: Database,
  tableNames: [string],
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
};

const Classroom: React.FC<ClassroomProps> = (props): ReactElement => {
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
            maxSize={75}
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

// if (props.databasePanelProps) {
//   return (
//     <main>
//       <Split
//         direction="horizontal"
//         sizes={[55, 45]}
//         snapOffset={0}
//         className="split-horizontal"
//       >
//         <div>
//           <TextbookPanel>
//             {props.children}
//           </TextbookPanel>
//         </div>
//         <div className="split-horizontal--right">
//           <DatabasePanel {...props.databasePanelProps} />
//         </div>
//       </Split>
//     </main>
//   );
// }

// return (
//   <main>
//     <TextbookPanel>
//       {props.children}
//     </TextbookPanel>
//   </main>
// );
// }

export default Classroom;
