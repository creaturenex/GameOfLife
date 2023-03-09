import React from 'react';

export default function Navbar(props) {
  return (
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          <a class='has-text-white' href="/home">
            Oscar's Game of Life
          </a>
        </p>
        <p class="subtitle">
          built using bulma, react, express
        </p>
      </div>
    </section>
  )
}
