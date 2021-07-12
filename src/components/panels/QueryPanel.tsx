import React from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism.css';

import './QueryPanel.css';
import { Database, QueryExecResult } from 'sql.js';


interface QueryPanelProps {
  db?: Database,
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  setQueryResults: React.Dispatch<React.SetStateAction<QueryExecResult[]>>,
  setQueryError: React.Dispatch<React.SetStateAction<Error | undefined>>,
};


const QueryPanel: React.FC<QueryPanelProps> = (props) => {
  const hightlightWithLineNumbers = (input: string, language: Prism.Grammar) => {
    const output = Prism.highlight(input, language, 'sql')
    if (input.match(/[\r\n]+/)) {
      return output
        .split('\n')
        .map((line: string, i: number) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
        .join('\n');
    }
    return `<span class='editorLineNumber'>></span>${output}`;
  }

  const onClickResetHandler = () => {
    props.setQuery('');
    props.setQueryError(undefined);
  };

  const onClickRunHandler = () => {
    if (props.db) {
      try {
        const queryResults = props.db.exec(props.query);
        props.setQueryResults(queryResults);
      } catch (e) {
        props.setQueryError(e);
      }
    } else {
      console.error('Database is not yet loaded.');
    }
  };

  return (
    <div className="query-panel">
      <h1>Query Panel</h1>
      <Editor
        value={props.query}
        placeholder={'Type your SQL here...'}
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
      <button onClick={onClickResetHandler}>
        Reset
      </button>
      <button onClick={onClickRunHandler}>
        Run
      </button>
    </div>
  );
}


export default QueryPanel;
