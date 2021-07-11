import React, { ReactElement, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Split from 'react-split';

import DatabasePanel, { DatabasePanelProps } from './DatabasePanel';
import QueryPanel, { QueryPanelProps } from './QueryPanel';
import TextbookPanel from './TextbookPanel';

import './Classroom.css';

interface ClassroomProps {
  children: ReactElement,
  databasePanelProps?: DatabasePanelProps,
  queryPanelProps?: QueryPanelProps,
};

const Classroom: React.FC<ClassroomProps> = ({
  children,
  databasePanelProps,
  queryPanelProps,
}: ClassroomProps): ReactElement => {
  if (databasePanelProps && queryPanelProps) {
    return (
      <main>
        <Split
          direction="horizontal"
          sizes={[55, 45]}
          snapOffset={0}
          className="split-horizontal"
        >
          <TextbookPanel>
            {children}
          </TextbookPanel>
          <Split
            direction="vertical"
            sizes={[40, 20, 40]}
            snapOffset={0}
          >
            <DatabasePanel {...databasePanelProps} />
            <QueryPanel {...queryPanelProps} />
          </Split>
        </Split>
      </main>
    );
  }

  if (databasePanelProps) {
    return (
      <main>
        <Split
          direction="horizontal"
          sizes={[55, 45]}
          snapOffset={0}
          className="split-horizontal"
        >
          <TextbookPanel>
            {children}
          </TextbookPanel>
          <DatabasePanel {...databasePanelProps} />
        </Split>
      </main>
    );
  }

  return (
    <main>
      <TextbookPanel>
        {children}
      </TextbookPanel>
    </main>
  );
}

export default Classroom;
