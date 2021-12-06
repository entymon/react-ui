import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PrintListElement.module.scss';

const PrintListElement = (props) => {
  console.log(props.feed.objectid)
  return (
    <div className={styles.PrintListElement} data-testid="PrintListElement">
      <Link to={`/print/${props.feed.objectid}`}>
        <div>{props.feed.title}</div>
      </Link>
    </div>
  );
};

PrintListElement.defaultProps = {};

export default PrintListElement;
