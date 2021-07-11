import React, { ReactElement, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Split from 'react-split';

import DatabasePanel, { DatabasePanelProps } from './DatabasePanel';
import QueryPanel, { QueryPanelProps } from './QueryPanel';
import TextbookPanel from './TextbookPanel';

import './Classroom.css';

interface ClassroomProps {
  databasePanelProps?: DatabasePanelProps,
  queryPanelProps?: QueryPanelProps,
};

const Classroom: React.FC<ClassroomProps> = (props): ReactElement => {
  if (props.databasePanelProps && props.queryPanelProps) {
    return (
      <main>
        <Split
          direction="horizontal"
          sizes={[55, 45]}
          snapOffset={0}
          className="split-horizontal"
        >
          <div>
            <TextbookPanel>
              {props.children}
            </TextbookPanel>
          </div>
          <Split
            direction="vertical"
            sizes={[40, 20, 40]}
            snapOffset={0}
          >
            <div>
              <DatabasePanel {...props.databasePanelProps} />
            </div>
            <div>
              <QueryPanel {...props.queryPanelProps} />
            </div>
          </Split>
        </Split>
      </main>
    );
  }

  if (props.databasePanelProps) {
    return (
      <main>
        <Split
          direction="horizontal"
          sizes={[55, 45]}
          snapOffset={0}
          className="split-horizontal"
        >
          <div>
            <TextbookPanel>
              {props.children}
            </TextbookPanel>
          </div>
          <div>
            <DatabasePanel {...props.databasePanelProps} />
          </div>
        </Split>
      </main>
    );
  }

  return (
    <main>
      <TextbookPanel>
        {props.children}
      </TextbookPanel>
    </main>
  );
}

export default Classroom;
