import React from 'react';
import styles from './PrintList.module.scss';
import PrintListElement from '../PrintListElement/PrintListElement';

const PrintList = (props) => {
  return props.feeds.map((print) => {
    console.log(print)
    return (<PrintListElement key={print.id} feed={print}/>)
  })
};

PrintList.defaultProps = {};

export default PrintList;
