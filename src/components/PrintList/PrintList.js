import React from 'react'
import { connect } from 'react-redux'
// import styles from './PrintList.module.scss'
import PrintListElement from '../PrintListElement/PrintListElement'
class PrintList extends React.Component {
  render() {
    return this.props.prints.map((print) => {
      return (
        <PrintListElement key={print.id} feed={print}/>
      )
    })
  }
}

PrintList.defaultProps = {};

const mapStateToProps = (state) => ({
  prints: state.prints.printsList
});

export default connect(mapStateToProps)(PrintList);
