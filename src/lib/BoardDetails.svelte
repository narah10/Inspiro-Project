<script> 
  export let image; 
  import  DownloadDetails  from "./DownloadDetails.svelte";
  import  FavoriteFunction from "./favoriteFunction.svelte";

  let name = "";
  let comment = "";
  let savedComments=[];

  function saveComment() {
    if (name.trim() !== "" && comment.trim() !== "") {
      var savedComments = getSavedComments(image.id);
      var newComment = { name, comment };
      savedComments.push(newComment);
      localStorage.setItem(`comments_${image.id}`, JSON.stringify(savedComments));
      name = "";
      comment = "";
      ShowComment();
    }
  }

  function getSavedComments(idImagen) {
    return JSON.parse(localStorage.getItem(`comments_${idImagen}`)) || [];
  }

  function ShowComment() {

      savedComments = getSavedComments(image.id);

  }

  ShowComment();
</script>



<div id="boardDetails">
  <h2>Image Details</h2><div class="image_box">
    <DownloadDetails imageUrl = {image.url}/>
  <FavoriteFunction imageUrl = {image.url}/>
</div>


  <img src="{image.url}" alt="{image.description || 'Unsplash'}" />
  <h3>Artist: {image.artist}</h3>
  <!-- <DownloadDetails imageUrl = {image.url}/>
  <FavoriteFunction imageUrl = {image.url}/> -->

  
  
  <div id="userInputSection">
    <input bind:value={name} placeholder="Your name" />
    <textarea bind:value={comment} placeholder="Write your comment"></textarea>
    <button on:click={saveComment}>Save Comment</button>
   
  </div>
   <div id="commentsSection">
    {#each savedComments as comment}
    {comment.name} - {comment.comment}
    {/each}
   </div>

</div>
  <hr>
  <div id="moreImages"></div>

  <style>
    #boardDetails {
      padding: 20px;

      margin-bottom: 20px;
    }
  .image_box{
    /* display:flex; 
    justify-content: center;
    border: solid #625FB4;
    width:100%; */
    position: relative;
    right:25rem;
  }
  @media screen and (max-width: 600px) {

    .image_box {
      right:5rem;
        }
    /* #boardDetails{
      background-color:blue; 
    } */
  
  }


    h2, h3 {
      color: #625FB4;
    }
  
    img {
      max-width: 80%;
      height: auto;
      margin-bottom: 15px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    #commentsSection {
      margin-top: 20px;
      border-top: 1px solid #ccc;
      padding-top: 10px;
    }
  
    #userInputSection {
      margin-top: 20px;
    }
  
    input,
    textarea {
      width: 100%;
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    textarea {
      resize: vertical;
    }
  
    button {
      background-color: #625fb4;
      color: #fff;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    p {
      margin: 0;
      padding: 5px 0;
      border-bottom: 1px solid #ccc;
    }
       
    hr{
      border: solid #625FB4;
      border-radius: 5px;
      margin-top:40px;
      margin-bottom:40px;
      width:40rem; 
    }
  </style>