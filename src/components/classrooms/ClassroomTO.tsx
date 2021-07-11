import React from 'react';

import TextbookPanel from '../panels/TextbookPanel';

import './Classroom.css';


interface ClassroomTOProps { };


/*
 * `ClassroomTO` renders the `TextbookPanel` only.
 */
const ClassroomTO: React.FC<ClassroomTOProps> = (props) => {
  return (
    <main>
      <TextbookPanel>
        {props.children}
      </TextbookPanel>
    </main>
  );
}


export default ClassroomTO;
