import React from 'react';
import Board from './Board.jsx'
import Github from './Github.jsx'

function App(props) {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Oscar's Game of Life
          </p>
          <p class="subtitle">
            built using bulma, react, express
          </p>
        </div>
      </section>
      <Board />
      <br></br>
      <Github />
    </div>
  )
}

export default App;
