import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { POCLayout } from './style';

const POC = (props) => {
  return (
    <POCLayout className="poc">
      <section className="panel-header">
        <span>Point of Contacts</span>
        <span>
          <FontAwesomeIcon className="plus-icon" icon={faPlusCircle} />
        </span>
      </section>
    </POCLayout>
  );
};

export default POC;
