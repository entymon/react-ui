import React from 'react';
import { connect } from 'react-redux'
import styles from './PrintView.module.scss';

const PrintView = (props) => {
    const print = props.print ? 
    (
      <div>
        <h4>{props.print.title}</h4>
      </div>
    ) : (
      <div>Loading print ...</div>
    )

    return (
      <div className={styles.PrintView} data-testid="PrintView">
        { print }
      </div>
    )
};

PrintView.propTypes = {};

PrintView.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  return {
    print: state.prints.find(print => print.objectid === 340432)
  }
}

export default connect(mapStateToProps)(PrintView);
