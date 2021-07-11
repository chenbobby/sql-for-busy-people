import React, { ReactElement, useMemo } from 'react';

import './DatabasePanel.css';


export interface DatabasePanelProps {
  tableNames: [string],
};

const DatabasePanel: React.FC<DatabasePanelProps> = (props): ReactElement => {
  return (
    <>
      <h1>Database Panel</h1>
      {props.tableNames.map(tableName => <p key={tableName}>{tableName}</p>)}
    </>
  );
}

export default DatabasePanel;
