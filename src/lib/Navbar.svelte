<script>
  import { logout } from "./auth.mjs";
  import { userStore } from "./stores.mjs";
  import Search from "./Search.svelte";
</script>

<nav>
  <div>
    <img src="src/assets/logo.svg" alt="logo"/>
  </div>
  <Search />
  <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#favorites">Favorites</a></li>
      <li><a href="#login">Login</a></li>
      <li><a href="#home" on:click={logout}>Logout</a></li>
  </ul>
</nav>

<style>
    ul {
      display: flex;
      list-style-type: none;
      padding-left: 0;
      gap: 1em;
      justify-content: center;
    }
  </style>