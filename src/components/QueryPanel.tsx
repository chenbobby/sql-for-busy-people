import React, { ReactElement } from 'react';

import './QueryPanel.css';


export interface QueryPanelProps {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
};

const QueryPanel: React.FC<QueryPanelProps> = (props): ReactElement => {
  return (
    <>
      <h1>Query Panel</h1>
    </>
  );
}

export default QueryPanel;
