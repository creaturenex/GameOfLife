import React from "react";

export default function LogInForm(props) {
  return(
    <form method="POST" action='/login'>
      <div class="field">
        <label class='label is-size-2'>Log In</label>
      </div>
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Username"></input>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-primary" type="email" placeholder="Email@email.com"></input>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary">Login</button>
        </div>
        <div class="control">
          <button class="button is-black">
            <span class="icon"><i class="fab fa-github"></i></span>
            <a class='has-text-white' href="/oauth">Github</a>
          </button>
        </div>
        <div class="control">
          <button class="button is-link">
            <a class='has-text-white' href="/signup">Sign Up</a>
          </button>
        </div>
      </div>
    </form>
  );
}
