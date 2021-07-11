import React, { ReactElement } from 'react';

import './QueryPanel.css';


export interface QueryPanelProps {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
};

const QueryPanel: React.FC<QueryPanelProps> = (props): ReactElement => {
  return (
    <div className="query-panel">
      <h1>Query Panel</h1>
      <input type="text" onChange={(value) => props.setQuery('SELECT * FROM table2;')} />
    </div>
  );
}

export default QueryPanel;
