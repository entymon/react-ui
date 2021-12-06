import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import PrintList from '../PrintList/PrintList'
import PrintView from '../PrintView/PrintView'
import Pagination from '../Pagination/Pagination';

class Home extends React.Component {
  render() {
    return (
      <div className="container" data-testid="Home">
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