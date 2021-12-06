import React from 'react';
import styles from './Pagination.module.scss';
import { connect } from 'react-redux'
import { selectPage } from '../../actions'
import { fetchPrints } from "../../actions/printActions";
class Pagination extends React.Component {

  handleSelectPage(selectedPage) {
    this.props.refreshPrints(selectedPage)
    this.props.selectPage(selectedPage)
  }

  getRangeForPaginator() {
    const max = this.totalPages < 11 ? this.totalPages : 10
    const min = 1
    const pageNumbers = Array.apply(null, {length: max + 1 - min}).map((_, idx) => idx + min)
    return pageNumbers
  }

  renderElements() {
    const pages = this.getRangeForPaginator()
    return pages.map(pageNumber => {
      if (this.props.selectedPage === pageNumber) {
        return (
          <li key={pageNumber} className="page-item active" aria-current="page" onClick={() => this.handleSelectPage(pageNumber)}>
            <span className="page-link">{pageNumber}</span>
          </li>
        )
      }
      return (<li key={pageNumber} className="page-item"><a className="page-link" onClick={() => this.handleSelectPage(pageNumber)} href="/#">{pageNumber}</a></li>)
    })
  }

  render() {
    return (
      <div className={styles.List} data-testid="Pagination">
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            {this.renderElements()}
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPage: state.page.selectedPage,
    totalPages: state.print.info.pages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPage: (pageNumber) => { dispatch(selectPage(pageNumber)) },
    refreshPrints: (pageNumber) => { dispatch(fetchPrints(pageNumber)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
