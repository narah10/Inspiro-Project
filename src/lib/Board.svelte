<script>
    import BoardDetails from "./BoardDetails.svelte";
    import { currentImage } from "../lib/stores.mjs"; 
    import  DownloadDetails  from "./downloadDetails.svelte";
    import Search from "./Search.svelte";

    let simplifiedData =[];
    export let imageUrls = [];
    export let imageAlts = [];
    export let imageArtists = [];

  export async function boardData(query = "") {
        const url = "https://api.unsplash.com/";
        //sets endpoint to search if query is present, otherwise random
        const endpoint = query ? "search/photos" : "photos/random";
        const access_key = "IftTCZlrrtO-pbVD1lRZWSppEas03FUG7ahRjmFwXag";
        //sets count to 30 if query is present, otherwise 30
        const count = query ? 30 : 30;

        try {
            const response = await fetch(`${url}${endpoint}?page=1&per_page=30&query=${query}&count=${count}`, {
              method: "GET",
              headers: {
                "Content-type": "application/json",
                Authorization: `Client-ID ${access_key}`,
              },
            });
    

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // Check if data is an array (for random images) or an object (for search results)
            const imagesArray = Array.isArray(data) ? data : data.results;

            simplifiedData = imagesArray.map((item) => ({
                url: item.urls.small,
                description: item.alt_description,
                artist: item.user.name,
                id: item.id,
            }));
            imageUrls = imagesArray.map((item) => item.urls.small);
            imageAlts = imagesArray.map((item) => item.alt_description);
            imageArtists = imagesArray.map((item) => item.user.name);

            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

  //searches for images
  export function onSearch(query) {
    //loads images based on search query
      boardData(query);
  }
  //loads initial images
  boardData();
</script>

<div>
  <div> 
    {#if $currentImage }
        <BoardDetails image={$currentImage}/>
        {:else }
        <h2>Welcome to Inspiro</h2>
        <p>Browse different art pieces of many talented artist</p>
        <Search {onSearch}/>
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
  