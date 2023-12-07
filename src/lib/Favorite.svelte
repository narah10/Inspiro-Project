<script>
      import { onMount } from 'svelte';

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
    <p>Browse</p>
    <div>
        {#if dataArray.length > 0}
          <ul>
            {#each dataArray as item (item.id)}
            <img src={item} alt="Source from Unsplash"/>
            {/each}
          </ul>
        {:else}
          <p>No data in local storage</p>
        {/if}
      </div>
</div>