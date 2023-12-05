<script> 
  export let image; 
  import  DownloadDetails  from "./downloadDetails.svelte";

  
  </script>
  <div id="boardDetails">
    <h2>Image Details</h2>
    <img src="{image.url}" alt="{image.description || 'Unsplash'}" />
     <h3>Artist: {image.artist}</h3>
     <DownloadDetails imageUrl = {image.url}/>

  </div>
  <hr>
  <div id="moreImages">
  </div>
  
  <style> 
  #moreImages{
    column-count: 2;
    column-gap: 15px;
    display: inline-block;
    width: 100%;
  }
  
  hr{
    border: solid #625FB4;
    border-radius: 5px;
    margin-top:40px;
    margin-bottom:40px;
    width:40rem; 
  }
 </style>
  