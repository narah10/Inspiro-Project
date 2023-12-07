<script>
  export let imageUrl = '';
  import { createEventDispatcher } from 'svelte';
  import Modal from './Modal.svelte';
  import { favorites } from "./stores.mjs"; 

  // Load favorites from local storage on component initialization
  let isFavorite;
  $: isFavorite = $favorites.indexOf(imageUrl) >=0 ? true : false;
  let message = '';
  const dispatch = createEventDispatcher();

  function toggleFavorite() {
  isFavorite = !isFavorite;
    if (isFavorite) {
      // Add the image to the favorites list
      $favorites.push(imageUrl);
      localStorage.setItem('favorites', JSON.stringify($favorites));
      message = 'Image added to the favorite board.';
    } else { 
      // Remove the image from the favorites list
      $favorites = $favorites.filter(url => url !== imageUrl);
      localStorage.setItem('favorites', JSON.stringify($favorites));
      message = 'Image removed from the favorite board.';
    }

    console.log(imageUrl);
  
    dispatch('showModal', { message });
}

  export { message };
</script>

  
  <style>
    /* Add some basic styles for the heart button */
    .favorite-button {
      position: absolute;
      top: 1.2rem;
      z-index: 1;
      right: 5.2rem;
      background-color: #F8FCFC;
      cursor: pointer;
      height: 2.8rem;
      width: 2.8rem;
      text-align: center;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .favorite-button:hover {
      transition: transform 0.5s ease-in-out;
      transform: scale(1.2);
    }
  
    /* Set the initial style for the heart */
    .favorite-button::before {
      font-size: 2.1rem;
      line-height: 1;
      content: "\2661";
      color: #f00;
    }
  
    /* Change the heart to be filled when the button is clicked */
    .favorite-button.active::before {
      content: "\2665";
    }
  </style>
  
  <!-- Use Svelte's syntax for the button and modal -->
  <div>
    <button class:active={isFavorite} on:click={toggleFavorite} class="favorite-button"></button>
    <Modal {message} />
  </div>


