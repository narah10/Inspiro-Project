<script>
  export let image;
  import DownloadDetails from "./downloadDetails.svelte";

  let name = "";
  let comment = "";

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
    var commentSection = document.getElementById("commentsSection");
    if (commentSection) {
      commentSection.innerHTML = "";
      var savedComments = getSavedComments(image.id);
      savedComments.forEach(function (commentObj) {
        var commentElement = document.createElement("p");
        commentElement.textContent = `${commentObj.name}: ${commentObj.comment}`;
        commentSection.appendChild(commentElement);
      });
    }
  }

  ShowComment();
</script>

<style>
  #boardDetails {
    /* background-color: #f4f4f4; */
    padding: 20px;
    /* border-radius: 8px; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    margin-bottom: 20px;
  }

  h2, h3 {
    color: #625FB4;
  }

  img {
    max-width: 100%;
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

<div id="boardDetails">
  <h2>Image Details</h2>
  <img src="{image.url}" alt="{image.description || 'Unsplash'}" />
  <h3>Artist: {image.artist}</h3>
  
  
  <div id="userInputSection">
    <input bind:value={name} placeholder="Your name" />
    <textarea bind:value={comment} placeholder="Write your comment"></textarea>
    <button on:click={saveComment}>Save Comment</button>
   
  </div>
   <div id="commentsSection"></div>
</div>
  <hr>
  <div id="moreImages"></div>
