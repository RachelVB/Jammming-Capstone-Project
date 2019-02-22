import React from 'react';
import './track.css';

class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a className="Track-action">{
          renderAction() {
            if (isRemoval) {
              <a>-</a>
            }
            <a>+</a>
          }
        }</a>
      </div>
    )
  }
}

export default Track;