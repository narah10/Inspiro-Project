<script>
  import { logout } from "./auth.mjs";
  import { currentImage, userStore } from "./stores.mjs";
  import Search from "./Search.svelte";
  import logo from "../images/logo.svg"
</script>

<nav>
  <div>
    <a href="#home" on:click={() => $currentImage = null}><img src={logo} alt="logo"/></a>
  </div>
  <Search />
  <ul>
      <li><a href="#home" on:click={() => $currentImage = null}>Home</a></li>
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