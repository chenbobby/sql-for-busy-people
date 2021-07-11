import React, { ReactElement } from 'react';

import './TextbookPanel.css';


interface TextbookPanelProps { };

const TextbookPanel: React.FC<TextbookPanelProps> = (props) => {
  return (
    <div>
      <h1>Textbook Panel</h1>
      {props.children}
    </div>
  );
};

export default TextbookPanel;
