import React, { ReactElement } from 'react';
import Split from 'react-split';

import "./Classroom.css";


const Classroom: React.FC = (): ReactElement => {
  return (
    <main>
      <Split
        direction="horizontal"
        sizes={[55, 45]}
        snapOffset={0}
        className="split-horizontal"
      >
        <Split
          direction="vertical"
          sizes={[70, 30]}
          snapOffset={0}
        >
          <div>Textbook Panel</div>
          <div>Query Editor Panel</div>
        </Split>
        <Split
          direction="vertical"
          sizes={[55, 45]}
          snapOffset={0}
        >
          <div>Database Panel</div>
          <div>Results Panel</div>
        </Split>
      </Split>
    </main>
  )
};

export default Classroom;
