import React from 'react';
import styles from './Pagination.module.scss';
import { connect } from 'react-redux'

class Pagination extends React.Component {

  handleSelectPage(selectedPage) {
    this.props.selectPage(selectedPage)
  }

  render() {
    console.log(this.props.selectedPage)
    return (
      <div className={styles.List} data-testid="Pagination">  
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            <li className="page-item active" aria-current="page" onClick={() => this.handleSelectPage(1)}>
              <span className="page-link">1</span>
            </li>
            <li className="page-item"><a className="page-link" onClick={() => this.handleSelectPage(2)}>2</a></li>
            <li className="page-item"><a className="page-link" onClick={() => this.handleSelectPage(3)}>3</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPage: state.selectedPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPage: (pageNumber) => { dispatch({ type: 'SELECTED_PAGE', selectedPage: pageNumber }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

