import React from 'react';

import './QueryPanel.css';


interface QueryPanelProps {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
};


const QueryPanel: React.FC<QueryPanelProps> = (props) => {
  return (
    <div className="query-panel">
      <h1>Query Panel</h1>
      <input type="text" onChange={(event) => props.setQuery(event.target.value)} />
    </div>
  );
}


export default QueryPanel;