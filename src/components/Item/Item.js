import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.scss';

class Item extends React.Component {
  construct(props) {
    super(props)
  }

  render (
    <div className={styles.List} data-testid="List">
      List Component
    </div>
  )
}

export default Item;
