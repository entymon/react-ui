import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
// import api from '../../api/api';
import PrintList from '../PrintList/PrintList'
import PrintView from '../PrintView/PrintView'
import Pagination from '../Pagination/Pagination';

import styles from './Home.module.scss';

class Home extends React.Component {
  // getPrints = async (page = 1) => {
  //   const response = await api.get(`/prints/${page}`)
  //   this.setState({ prints: response.data.records })
  // }

  render() {
    return (
      <div className={styles.Home} data-testid="Home">
        <Router>
          <Routes>
            <Route path="/" element={
              <div>
                <PrintList feeds={this.props.prints}/>
                <Pagination />
              </div>
            } />
            <Route path="/print/:id" element={<PrintView />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    prints: state.prints
  }
}

export default connect(mapStateToProps)(Home);