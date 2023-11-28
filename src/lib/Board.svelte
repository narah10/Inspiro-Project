<script>
  import { saveAs } from 'file-saver';
  let imageUrls = [];
  let imageAlts = [];
  let imageArtists = [];

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
  }

  boardData();

  // Download Button
  const downloadImage = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);

      // Assuming the response is an image, you can use blob() to create a Blob object.
      const imageBlob = await response.blob();

      // Trigger the download using FileSaver.js
      saveAs(imageBlob, "image.jpg");
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  // Favorite Function Code
  var btnvar1 = document.getElementById("btn1"); 

  // function Toggle1(){
  //   if (btnvar1.style.color )
  // }
</script>

<div>
  <h2>Welcome to Inspiro</h2>
  <p>Browse different art pieces of many talented artists</p>
  <div class="board-container">
    {#each imageUrls as imageUrl, i (imageUrl)}
      <div class="board-item">
        <!-- Download Function -->
        <button class="download-button" on:click={() => downloadImage(imageUrl)}>
          <img src="./src/images/Download-Icon.jpg" alt="download">
        </button>
        <!-- Favorites Funtion -->
        <button on:click={() => Toggle1()} class="btn" id="btn1"><img src="./src/images/unmarked-favorites.png" alt="btn1"></button>
        <button on:click={() => Toggle2()} class="btn" id="btn2"><img src="./src/images/marked-favorites.png" alt="btn2"></button>
        <!-- Fetching Images -->
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

    /* Favorite Function */
    .btn{
      background: none;
      border: 0; 
    }

    .btn:hover img {
      transform: scale(1.2);
    }

    .btn img {
      width: 4.2rem;
    }

    .btn {
      position: absolute;
      top: 0;
      right: 0.5;
      z-index: 1;
      border: 0;
    }

  </style>
  