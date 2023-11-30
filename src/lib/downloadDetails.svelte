<script>
    export let imageUrl = '';
    import { saveAs } from 'file-saver';
    import download from '../images/Download-Icon.jpg'

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

</script>


<button class="download-button" on:click={() => downloadImage(imageUrl)}>
    <img src={download} alt="download">
</button>


<style>
    .download-button {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      border: 0;
    }

    .download-button{
      background-color: transparent;
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