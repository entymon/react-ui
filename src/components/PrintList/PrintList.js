import React from 'react';
import { connect } from 'react-redux'
import styles from './PrintList.module.scss';
import PrintListElement from '../PrintListElement/PrintListElement';
import Pagination from '../Pagination/Pagination';

const PrintList = (props) => {
  return props.feeds.map((print) => {
    // console.log(print)
    return (
      <PrintListElement key={print.id} feed={print}/>
    )
  })
};

PrintList.defaultProps = {};

export default connect()(PrintList);
