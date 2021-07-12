import React from 'react';
import { QueryExecResult } from 'sql.js';

import './QueryResultsPanel.css';


interface QueryResultsPanelProps {
  queryResults: QueryExecResult[],
  queryError?: Error,
};


const QueryResultsPanel: React.FC<QueryResultsPanelProps> = (props) => {
  return (
    <div className="query-results-panel">
      <h1>QueryResults Panel</h1>
      {props.queryError && <p>{props.queryError.message}</p>}
      {props.queryResults?.length > 0 && (
        props.queryResults[0].values.map((value) => <p>{value}</p>)
      )}
    </div>
  );
}


export default QueryResultsPanel;
