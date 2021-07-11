import React from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism.css';

import './QueryPanel.css';


interface QueryPanelProps {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
};


const QueryPanel: React.FC<QueryPanelProps> = (props) => {
  const hightlightWithLineNumbers = (input: string, language: Prism.Grammar) => {
    return Prism.highlight(input, language, 'sql')
      .split('\n')
      .map((line: string, i: number) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join('\n');
  }

  return (
    <div className="query-panel">
      <h1>Query Panel</h1>
      <Editor
        value={props.query}
        onValueChange={props.setQuery}
        highlight={code => hightlightWithLineNumbers(code, Prism.languages.sql)}
        textareaId='codeArea'
        className='editor'
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
        }}
      />
    </div>
  );
}


export default QueryPanel;
