import React, { ReactElement } from 'react';

import './TextbookPanel.css';


interface TextbookPanelProps {
  children: ReactElement,
};

const TextbookPanel: React.FC<TextbookPanelProps> = ({
  children,
}: TextbookPanelProps): ReactElement => {
  return (
    <>
      <h1>Textbook Panel</h1>
      {children}
    </>
  );
};

export default TextbookPanel;
