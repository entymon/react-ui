import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrintListElement.module.scss';

const PrintListElement = (props) => (
  <div className={styles.PrintListElement} data-testid="PrintListElement">
    <div>{props.feed.title}</div>
  </div>
);

PrintListElement.propTypes = {};

PrintListElement.defaultProps = {};

export default PrintListElement;
