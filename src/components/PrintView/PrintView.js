import React from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router';
import styles from './PrintView.module.scss';

const PrintView = (props) => {

  const printId = useParams()?.id
  const print = props.prints.find(feed => feed.id === parseInt(printId))

  const content = print ? (
    <div>
      <h4>{print.title}</h4>
    </div>
  ) : (
    <div>Loading print ...</div>
  )

  return (
    <div className={styles.PrintView} data-testid="PrintView">
      { content }
    </div>
  )
}

PrintView.propTypes = {};

PrintView.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    prints: state.print.list
  }
}

export default connect(mapStateToProps)(PrintView);
