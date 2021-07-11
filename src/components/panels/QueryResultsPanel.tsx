import React, { ReactElement } from 'react';
import { Database } from 'sql.js';

import './QueryResultsPanel.css';


interface QueryResultsPanelProps {
  db?: Database,
  query: string,
};


const QueryResultsPanel: React.FC<QueryResultsPanelProps> = (props) => {
  let data: any = ['No Results'];
  if (props.db && props.query.length > 0) {
    try {
      data = props.db.exec(props.query).pop()?.values;
    } catch (e) {
      console.error(e);
      data = [`Database Error: ${e.message}`]
    }
  }

  return (
    <div className="query-results-panel">
      <h1>QueryResults Panel</h1>
      {data.map((row: any, i: number) => <p key={`${i}-${row}`}>{row}</p>)}
    </div>
  );
}


export default QueryResultsPanel;
