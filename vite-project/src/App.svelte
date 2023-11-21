<script>
  import Board from "./lib/Board.svelte";
  import Login from "./lib/Login.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import {route} from './lib/stores.mjs';


  window.addEventListener('popstate', () => {
    // if (window.location.hash === '#profile' && !$userStore.isLoggedIn){
      // window.location.hash = '#login';
    // } else {
      $route = window.location.hash
    // }
  })

  // async function init() {
  //   checkLogIn();
  // }

  // onMount(init);
</script>

<main>
  <Navbar />
  {#if $route === '#login'}
  <Login />
  {:else}
  <Board />
  {/if}
</main>

<style>
  
</style>
