import React from 'react';
import { NotesLayout } from './style';

const Notes = (props) => {
  return (
    <NotesLayout className="notes">
      <section className="panel-header">
        <span className="header-label">Case Notes</span>
      </section>
    </NotesLayout>
  );
};

export default Notes;
