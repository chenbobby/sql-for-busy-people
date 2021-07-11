import React, { ReactElement } from 'react';

import './DatabasePanel.css';


export interface DatabasePanelProps {
  tableNames: [string],
};

const DatabasePanel: React.FC<DatabasePanelProps> = ({
  tableNames,
}: DatabasePanelProps): ReactElement => {
  return (
    <>
      <h1>Database Panel</h1>
      {tableNames.map(tableName => <p key={tableName}>{tableName}</p>)}
    </>
  );
}

export default DatabasePanel;
