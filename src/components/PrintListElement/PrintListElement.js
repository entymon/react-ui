import React from 'react';
import { Link } from 'react-router-dom';

const PrintListElement = (props) => {
  return (
    <tr data-testid="PrintListElement">
      <td>{props.feed.objectid}</td>
      <td className="text-start"><Link to={`/print/${props.feed.objectid}`}>{props.feed.title}</Link></td>
    </tr>
  )
}

PrintListElement.defaultProps = {};

export default PrintListElement;
