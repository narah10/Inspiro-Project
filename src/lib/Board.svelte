<script>
    import BoardDetails from "./BoardDetails.svelte";
    import { currentImage } from "../lib/stores.mjs"; 
    import  DownloadDetails  from "./downloadDetails.svelte";


    let simplifiedData =[];
    export let imageUrls = [];
    export let imageAlts = [];
    export let imageArtists = [];

    export async function boardData() {
      const url = "https://api.unsplash.com/";
      const endpoint = "photos/random";
      const access_key = "IftTCZlrrtO-pbVD1lRZWSppEas03FUG7ahRjmFwXag";
      try {
        const response = await fetch(`${url}${endpoint}?count=30`, {

          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Client-ID ${access_key}`,
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        simplifiedData = data.map(item => ({url: item.urls.small, description: item.alt_description, artist: item.user.name, id: item.id}))
        imageUrls = data.map(item => item.urls.small);
        imageAlts = data.map(item => item.alt_description);
        imageArtists = data.map(item => item.user.name);
        
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    boardData();

    
</script>
  
<div>
  <div> 
    {#if $currentImage }
        <BoardDetails image={$currentImage}/>
        {:else }
        <h2>Welcome to Inspiro</h2>
        <p>Browse different art pieces of many talented artist</p>
      
        {/if} 
  </div>
  <div class="board-container">
      {#each simplifiedData as image}
      <div class="board-item">
         <a href="#" on:click={() => $currentImage = image}><img src={image.url} alt={image.description || "Unsplash"} />
          <h3>Artist: {image.artist}</h3></a> 
          <DownloadDetails imageUrl = {image.url}/>
      </div>
  {/each}
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
  