<script>
  import { logout } from "./auth.mjs";
  import { userStore } from "./stores.mjs";


</script>

<nav>
    <ul>
        <li><a href="#home">Home</a></li>
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