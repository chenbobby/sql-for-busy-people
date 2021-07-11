import React from 'react';
import { Database } from 'sql.js';

import './DatabasePanel.css';


interface DatabasePanelProps {
  db?: Database,
  tableNames: [string],
};


const DatabasePanel: React.FC<DatabasePanelProps> = (props) => {
  let data: any = [];

  if (props.db && props.tableNames.length > 0) {
    const query = `SELECT * FROM ${props.tableNames[0]};`;
    data = props.db.exec(query).pop()?.values;
  }

  return (
    <div className="database-panel">
      <h1>Database Panel 1298356901823598712093587109237590123759807235</h1>
      {props.tableNames.map(tableName => <p key={tableName}>{tableName}</p>)}
      {data.map((row: any, i: number) => <p key={`${i}-${row}`}>{row}</p>)}
    </div>
  );
}


export default DatabasePanel;
