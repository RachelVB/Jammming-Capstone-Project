import React from 'react';
import './track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    renderAction() {
      if (this.isRemoval) {
        <a>-</a>
      } else {
        <a>+</a>
      }
    }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist}{this.props.track.album}</p>
        </div>
        <a className="Track-action"></a>
      </div>
    )
  }
}
}

export default Track;