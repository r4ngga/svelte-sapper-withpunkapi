<script type="text/javascript">
import fetch from 'node-fetch';

export let searchProduct;

let nameproduct = "";
let searcres = [];

function handleSearch(name){
    event.preventDefault();
    console.log(name);
    searchProduct(nameproduct);
    // nameproduct = "";
//    fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}`)
//                 .then(res => {
//                     return res.json();
//                 })
//                 .then( result => {
//                     var searcrest = result;
//                     console.log(result);
//                     // searcres = searcrest;
//                     searcres = result;
//                     return searcrest;
//                 })

}
// console.log(searcres);
</script>

<div class="flex my-4">
    <!-- <form class="flex w-full m-2" on:submit={searchProduct}> -->
        <input type="text" bind:value={nameproduct}
         name="nameproduct" placeholder="Search Here ..." id="nameproduct" class="block w-2/5 px-3 py-2 mx-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1">
        <button 
        type="submit" on:click={handleSearch(nameproduct)} class="w-1/4 p-1 mx-2 border-2 border-solid rounded border-sky-600">Click</button>
    <!-- </form>  -->
</div>

<style>
    /* .input-search{
        border-style: solid;
    }

    .btn-search{
        border-style: solid;
    } */
</style>