import React from 'react';
import api from '../../api/api';
import PrintList from '../PrintList/PrintList'

import styles from './Home.module.scss';

class Home extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props)
    this.state = {
      prints: [],
      page: 1
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.getPrints()
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getPrints = async (page = 1) => {
    const response = await api.get(`/prints/${page}`)
    this.setState({ prints: response.data.records })
  }

  render() {
    return (
      <div className={styles.Home} data-testid="Home">
        <PrintList feeds={this.state.prints}/>
      </div>
    )
  }
}

export default Home;