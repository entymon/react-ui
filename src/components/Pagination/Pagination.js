import React from 'react';
import styles from './Pagination.module.scss';
import { connect } from 'react-redux'

const Pagination = (props) => {
  return (
    <div className={styles.List} data-testid="Pagination">
      TEST
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedPage: state.selectedPage
  }
}

export default connect(mapStateToProps)(Pagination);

