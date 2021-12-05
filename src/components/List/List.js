import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.scss';

class List extends React.Component {
  construct(props) {
    super(props)
  }

  render (
    <div className={styles.List} data-testid="List">
      List Component
    </div>
  )
}

export default List;
