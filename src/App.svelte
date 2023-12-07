<script>
  import Board from "./lib/Board.svelte";
  import BoardDetails from "./lib/BoardDetails.svelte";
  import Favorite from "./lib/Favorite.svelte";
  import Login from "./lib/Login.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import { route, userStore } from "./lib/stores.mjs"; 
  import { checkLogin } from "./lib/auth.mjs";
  import {onMount} from 'svelte';


  window.addEventListener('popstate', () => {
    if (window.location.hash === '#favorites' && !$userStore.isLoggedIn){
      window.location.hash = '#login';
    }
    $route = window.location.hash
    console.log(window.location.hash)
    
  })
  async function init() {
    checkLogin();
  }
  onMount(init);
</script>

<svelte:head>
	<title>Inspiro</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
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
