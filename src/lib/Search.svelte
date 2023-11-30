<script>
    import { onMount } from 'svelte';

    let search;
    let searchInput;
    let container;
    let searchBtn;

    onMount(() => {
        container = document.querySelector(".board-container");
        searchInput = document.getElementById("search");
        search = document.getElementById("search");
        searchBtn = document.querySelector("button");

        search.addEventListener("keydown", function(event){
            if(event.key === "Enter"){
                loadImages();
            }
        });

        searchBtn.addEventListener("click", function(){
            loadImages();
        });
    });

    function loadImages(){
        removeImages();
        const url = "https://api.unsplash.com/search/photos/?query=" + searchInput.value + "&per_page=30&client_id=IftTCZlrrtO-pbVD1lRZWSppEas03FUG7ahRjmFwXag";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.results.forEach((result, i) => {
                    // Create container for image and artist name
                    const imageContainer = document.createElement("div");
                    imageContainer.className = "board-item";

                    // Create link for image details
                    const imageLink = document.createElement("a");
                    imageLink.href = "#boardDetails";
                    imageLink.addEventListener("click", () => showImageDetails(result, i));

                    // Create image element
                    const img = document.createElement("img");
                    img.src = result.urls.small;
                    img.alt = result.alt_description;

                    // Create artist name element
                    const artistName = document.createElement("h3");
                    artistName.textContent = "Artist: " + result.user.name;

                    // Append image and artist name to the link
                    imageLink.appendChild(img);
                    imageLink.appendChild(artistName);

                    // Append link to the container
                    imageContainer.appendChild(imageLink);

                    // Append the container to the main container
                    container.appendChild(imageContainer);
                });
            })
            .catch(error => console.error(error));
    }

    function removeImages(){
        container.innerHTML = "";
    }

    function showImageDetails(result, index) {
        setTimeout(() => {
            const boardDetails = document.getElementById("boardDetails");
            if (boardDetails) {
                boardDetails.innerHTML = `
                    <h2>Image Details</h2>
                    <img src="${result.urls.small}" alt="${result.alt_description || 'Unsplash'}" />
                    <h3>Artist: ${result.user.name}</h3>
                `;
            } else {
                console.error('Element with id "boardDetails" not found');
            }
        });
    }
</script>

<div>
    <input type="text" id="search" name="search" placeholder="Search" value="">
    <button>Search</button>
</div>
