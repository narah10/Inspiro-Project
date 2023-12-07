<script>
      import { onMount } from 'svelte';
      import DownloadDetails from './downloadDetails.svelte';
      import FavoriteFunction from './favoriteFunction.svelte';

    let dataArray = [];

    // Fetch the array from local storage on component mount
    onMount(() => {
    const storedData = localStorage.getItem('favorites');
    if (storedData) {
        dataArray = JSON.parse(storedData);
        console.log(dataArray)
    }
    });
</script>

<div>
    <h2>Favorites</h2>
    <p>Browse your Images</p>
    <div class="board-container">
        {#if dataArray.length > 0}
            {#each dataArray as item}
            <div class="board-item">
            <img src={item} alt="Source from Unsplash"/>
          </div>
          {/each}
        {:else}
          <p>No Favorited Image</p>
        {/if}
      </div>
</div>

<style>
.board-item {
  position: relative; 
}

.board-container {
column-count: 3;
column-gap: 15px;
}

.board-item {
display: inline-block;
width: 100%;
}

.board-item img {
display:block;
width: 100%;
}
</style>