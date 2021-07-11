import React, { ReactElement } from 'react';
import { Database } from 'sql.js';

import './QueryResultsPanel.css';


export interface QueryResultsPanelProps {
  db?: Database,
  query: string,
};

const QueryResultsPanel: React.FC<QueryResultsPanelProps> = (props): ReactElement => {
  let data: any = [];
  console.log(props.query);
  if (props.db) {
    console.log('querying results');
    data = props.db.exec(props.query).pop()?.values;
  }
  return (
    <div className="query-results-panel">
      <h1>QueryResults Panel</h1>
      {data.map((row: any, i: number) => <p key={`${i}-${row}`}>{row}</p>)}
    </div>
  );
}

export default QueryResultsPanel;
