import React from 'react';
import styles from './PrintListElement.module.scss';

const PrintListElement = (props) => {
  return (
    <div className={styles.PrintListElement} data-testid="PrintListElement">
      <div>{props.feed.title}</div>
    </div>
  );
};

PrintListElement.defaultProps = {};

export default PrintListElement;
