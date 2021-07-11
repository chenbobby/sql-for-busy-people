import React, { ReactElement } from 'react';

import './TextbookPanel.css';


interface TextbookPanelProps { };

const TextbookPanel: React.FC<TextbookPanelProps> = (props): ReactElement => {
  return (
    <>
      <h1>Textbook Panel</h1>
      {props.children}
    </>
  );
};

export default TextbookPanel;
