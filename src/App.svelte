<script>
  import Board from "./lib/Board.svelte";
  import BoardDetails from "./lib/BoardDetails.svelte";
  import Favorite from "./lib/Favorite.svelte";
  import Login from "./lib/Login.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import { route } from "./lib/stores.mjs"; 


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

<svelte:head>
	<title>Inspiro</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
  <link rel="icon" type="image/x-icon" href="/favicon">
</svelte:head>

<main>
  <Navbar />
  {#if $route === '#login'}
  <Login />
  {:else if $route === '#favorites'}
  <Favorite />
  <!-- {:else if  $route === '#boardDetails'}
  <BoardDetails/>  -->
  {:else}
  <Board />
  {/if}
</main>

<style>
  
</style>
