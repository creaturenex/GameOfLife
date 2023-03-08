import React from 'react';
import Navbar from './Navbar.jsx'
import LogInForm from './LogInForm.jsx'
import Board from './Board.jsx'
import Github from './Github.jsx'

function App(props) {
  return (
    <>
      <Navbar />
      <section class="section">
        <div class="container is-max-desktop">
          <div class="container is-fluid has-background-primary-light py-5">
            <LogInForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default App;
