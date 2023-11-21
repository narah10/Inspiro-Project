<script>
    let imageUrls = [];
    let imageAlts = [];
    let imageArtists = [];
  
    async function boardData() {
      const url = "https://api.unsplash.com/";
      const endpoint = "photos";
      const access_key = "IftTCZlrrtO-pbVD1lRZWSppEas03FUG7ahRjmFwXag";
      const count = 20;  
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
    }
  
    boardData();
  </script>
  
  <div>
    <h2>Welcome to Inspiro</h2>
    <p>Browse different art pieces of many talented artist</p>
    <div class="board-container">
        {#each imageUrls as imageUrl, i (imageUrl)}
        <div class="board-item">
            <img src={imageUrl} alt={imageAlts[i] || "Unsplash"} />
            <h3>Artist: {imageArtists[i]}</h3>
        </div>
    {/each}
    </div>
  </div>

  <style>
    /* .board-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    } */
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
  