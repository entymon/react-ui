import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrintList.module.scss';
import PrintListElement from '../PrintListElement/PrintListElement';

const PrintList = (props) => {
  return props.feeds.map((print) => (
    <PrintListElement feed={print}/>
  ))
};

PrintList.propTypes = {};

PrintList.defaultProps = {};

export default PrintList;
