import React from 'react';

export default function Board(props) {
  return (
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile py-1 px-1">
        <figure class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>
        </figure>
        </div>
        <div class="tile py-1 px-1">
        <figure class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png"></img>
        </figure>
        </div>
      </div>
    </div>
  )
}
