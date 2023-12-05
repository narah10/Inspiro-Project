<script>
    import { onMount } from "svelte";

    export let onSearch;

    let search;
    let searchInput;
    let searchBtn;

    onMount(() => {
        searchInput = document.getElementById("search");
        search = document.getElementById("search");
        searchBtn = document.querySelector("button");

        search.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                onSearch(searchInput.value);
            }
        });

        searchBtn.addEventListener("click", function () {
            onSearch(searchInput.value);
        });
    });
</script>

<div>
    <input type="text" id="search" name="search" placeholder="Search" value="" />
    <button>Search</button>
</div>

<style>
   #search {
       padding: 0.5em;
       border: 1px solid #ccc;
       border-radius: 5px;
       margin-bottom: 1em;
       font-size: 1.1em;
   }
   button {
         padding: 0.5em;
         border: 1px solid #ccc;
         color: white;
         border-radius: 5px;
         margin-bottom: 1em;
         font-size: 1.1em;
         background-color: #5A55BC;
   }
</style>
