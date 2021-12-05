import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

class Pagination extends React.Component {
  construct(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.List} data-testid="Pagination">
        Pagination Component
      </div>
    )
  }
}

export default Pagination;

