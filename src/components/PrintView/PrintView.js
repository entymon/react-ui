import React from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router';

const PrintView = (props) => {

  const printId = useParams()?.id
  const print = props.prints.find(feed => feed.id === parseInt(printId))

  console.log(print)

  const renderImages = (images) => {
    if (images) {
      return images.map(image => {
        console.log(image)
        return (
          <div className="text-center">
            <img src={image.baseimageurl} className="img-fluid img-thumbnail" alt={image.alttext ?? `${image.imageid}:${image.publiccaption}`} />
          </div>
        )
      })
    }
  }

  const content = print ? (
    <div className="container-fluid">
      <h4 className="text-center">Title: {print.title}</h4>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Department</th>
            <th scope="col">Creditline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ print.id }</td>
            <td>{ print.department }</td>
            <td>{ print.creditline }</td>
          </tr>
        </tbody>
      </table>
      <div>
        { renderImages(print.images) }
      </div>
    </div>
  ) : (
    <div>Loading print ...</div>
  )

  return (
    <div data-testid="PrintView">
      { content }
    </div>
  )
}

PrintView.propTypes = {};

PrintView.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    prints: state.print.list
  }
}

export default connect(mapStateToProps)(PrintView);
