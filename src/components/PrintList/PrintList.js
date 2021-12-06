import React from 'react'
import { connect } from 'react-redux'
import PrintListElement from '../PrintListElement/PrintListElement'
import { fetchPrints } from "../../actions/printActions";
class PrintList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPrints(this.props.selectedPage));
  }

  renderElements() {
    return this.props.prints.map((print) => {
      return (
        <PrintListElement key={print.id} feed={print}/>
      )
    })
  }

  render() {

    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          { this.renderElements() }
        </tbody>
      </table>
    )

  }
}

PrintList.defaultProps = {};

const mapStateToProps = (state) => ({
  selectedPage: state.page.selectedPage,
  prints: state.print.list,
  loading: state.print.loading,
  error: state.print.error
})

export default connect(mapStateToProps)(PrintList);
