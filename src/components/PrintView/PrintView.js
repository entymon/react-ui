import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const PrintView = (props) => {

  const printId = useParams()?.id
  const print = props.prints.find(feed => feed.id === parseInt(printId))

  const renderImages = (images) => {
    if (images) {
      return images.map(image => {
        console.log(image)
        return (
          <div className="text-center">
            <img
              src={image.baseimageurl}
              width={400}
              className="img-fluid img-thumbnail"
              alt={image.alttext ?? `${image.imageid}:${image.publiccaption}`}
            />
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
      <div className="text-center">
        <Link to="/">
          <button type="button" class="btn btn-primary">go to the list</button>
        </Link>
      </div>
      { content }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    prints: state.print.list
  }
}

export default connect(mapStateToProps)(PrintView);
