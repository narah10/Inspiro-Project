<script>
    export let imageUrls = [];
    export let imageAlts = [];
    export let imageArtists = [];

    async function boardData() {
      const url = "https://api.unsplash.com/";
      const endpoint = "photos";
      const access_key = "IftTCZlrrtO-pbVD1lRZWSppEas03FUG7ahRjmFwXag";
      try {
        const response = await fetch(`${url}${endpoint}?count=20`, {
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
        imageUrls = data.map(item => item.urls.small);
        imageAlts = data.map(item => item.alt_description);
        imageArtists = data.map(item => item.user.name);
        
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);

      }

      const data = await response.json();
      imageUrls = data.map(item => item.urls.small);
      imageAlts = data.map(item => item.alt_description);
      imageArtists = data.map(item => item.user.name);

      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    boardData();

    function showImageDetails(index) {
    setTimeout(() => {
      const boardDetails = document.getElementById("boardDetails");
      if (boardDetails) {
        boardDetails.innerHTML = `
          <h2>Image Details</h2>
          <img src="${imageUrls[index]}" alt="${imageAlts[index] || 'Unsplash'}" />
          <h3>Artist: ${imageArtists[index]}</h3>
        `;
      } else {
        console.error('Element with id "boardDetails" not found');
      }
    });
  }
  </script>
  
  <div>
    <h2>Welcome to Inspiro</h2>
    <p>Browse different art pieces of many talented artist</p>
    <div class="board-container">
        {#each imageUrls as imageUrl, i (imageUrl)}
        <div class="board-item">
           <a href="#boardDetails" on:click={() => showImageDetails(i)}><img src={imageUrl} alt={imageAlts[i] || "Unsplash"} />
            <h3>Artist: {imageArtists[i]}</h3></a> 
        </div>
    {/each}
  </div>
</div>


  <style>
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

    /* Download Button Set Up */
    .board-item {
      position: relative; /* Make the .board-item container a positioning context */
    }

    .board-item .download-button{
      background-color: transparent;
    }

    .download-button {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      border: 0;
    }

    .download-button:hover {
      transition: transform 0.5s ease-in-out;
    }

    .download-button img {
      width: 4.5rem;
    }

    .download-button:hover img {
      transform: scale(1.2);
    }

  </style>
  