import React from 'react';
import styles from './Pagination.module.scss';
import { connect } from 'react-redux'
import { selectPage } from '../../actions'

class Pagination extends React.Component {

  handleSelectPage(selectedPage) {
    this.props.selectPage(selectedPage)
  }

  // renderElements() {
  //   const pages = Array.from(Array(10).keys())
  //   const selectedPage = 3

  //   pages.map((page) => {
  //       if (selectedPage !== page) {
  //           console.log(page)
  //       }
  //   })
  // }

  render() {
    return (
      <div className={styles.List} data-testid="Pagination">
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            <li className="page-item active" aria-current="page" onClick={() => this.handleSelectPage(1)}>
              <span className="page-link">1</span>
            </li>
            <li className="page-item"><a className="page-link" onClick={() => this.handleSelectPage(2)} href="/#">2</a></li>
            <li className="page-item"><a className="page-link" onClick={() => this.handleSelectPage(3)} href="/#">3</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPage: state.page.selectedPage,
    totalPages: state.print.printsInfo.pages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPage: (pageNumber) => { dispatch(selectPage(pageNumber)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
