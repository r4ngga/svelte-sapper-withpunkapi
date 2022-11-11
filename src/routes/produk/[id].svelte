<script context="module">
    let cekthis = Array();
    // const apiURL = process.env.SAPPER_APP_API_URL;
    export async function preload({ params, id }){
        // the `slug` parameter is available because
		// this file is called [slug].svelte
    //    const res = this.fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
    //     .then(response => response.json())
    //     .then( (resultnya) => {
            
    //     console.log(resultnya);
    //     });
        const res = await this.fetch(`https://api.punkapi.com/v2/beers/${params.id}`);
        const data = await res.json();
        return { data };
    }

    function getLocalStorage()
    {
        return localStorage.getItem('itemsInCart');
    }

    function addItem (num, name, image_url, description, tagline){
        const cek = window.localStorage.getItem('itemsInCart');
        // console.log(JSON.parse(cek).id);
        // console.log(cek);
        // localStorage.setItem('itemsInCart', JSON.stringify({ id: id, name_item: name, year: year_brew }));

        let getItem = getLocalStorage();
        let newItem = {};
        if(!getItem){
            newItem =
                {
                    item_id: num,
                    name: name,
                    tag: tagline,
                    image_url: image_url,
                    total: 1,
                    description: description,
                };
            getItem = localStorage.setItem('itemsInCart', JSON.stringify([newItem]));
        }else{
           let items = JSON.parse(getItem);

            let findItem = items.filter(d => d.item_id == num);
            if(findItem.length == 0){
                newItem =
                {
                    item_id: num,
                    name: name,
                    tag: tagline,
                    image_url: image_url,
                    total: 1,
                    description: description,
                }

                items = [...items, newItem];

                updateItem(items);
            }else{
                newItem = findItem[0];
            }
        }

    }

    function updateItem (data){
        return localStorage.setItem('itemsInCart', JSON.stringify(data));
    }
</script>

<script>
  import { beforeUpdate } from "svelte";

    export let data;
</script>

<svelte:head>
    <title> Detail Produk </title>
</svelte:head>

<!-- <h1>{cekthis.id}</h1> -->

<div class="show-product">
{#each data as beer}
<div class="card">
    <span class="product-name"><h4><b>{beer.id}</b></h4></span>
    <div class="container">
        <div class="name-product">Detail Produk <h1><b> {beer.name}</b></h1></div>
        <div class="show-image">
            <img class="img-div" src="{beer.image_url}" alt="">
        </div>
        <p class="product-description">{beer.description}</p> 
        <div class="row-container">
            <div class="col-item">
                Year Brew :
            </div>
            <div class="col-item">
                {beer.first_brewed}
            </div>
        </div>
        <div class="row-container">
            <div class="col-item">
                Tag :
            </div>
            <div class="col-item">
                {beer.tagline}
            </div>
        </div>
        <div class="row-container">
            <div class="col-item">
                Volume :
            </div>
            <div class="col-item">
                {beer.volume.value} {beer.volume.unit}
                <!-- {#each beer.volume as beervol}
                {beervol.value} , {beervol.unit}
                {/each} -->
            </div>
        </div>
        <div class="row-container">
            <div class="col-item">
                Ingredients :
            </div>
            <div class="col-item">
                <!-- {beer.ingredients.malt.name} -->
                {#each beer.ingredients.malt as beermalt}
                {beermalt.name} , 
                {/each}
            </div>
        </div>
        <div class="row-container">
            <div class="col-item">
                Method:
            </div>
            <div class="col-item">
                {beer.method}
            </div>
        </div>
        <div class="row-container">
            <div class="col-item">
                Food Pair :
            </div>
            <div class="col-item">
                {beer.food_pairing}
            </div>
        </div>
        <div class="row-container">
            <div class="col-item">
                Tips :
            </div>
            <div class="col-item">
                {beer.brewers_tips}
            </div>
        </div>
        <div class="row-container">
            <div class="col-item">
                Creator :
            </div>
            <div class="col-item">
                {beer.contributed_by}
            </div>
        </div>
        <div class="row-center">
            <!-- <div class="col-center"> -->
                <button id="svelte" 
                on:click={() => addItem(beer.id, beer.name, beer.image_url, beer.description, beer.tagline)}
                type="button" 
                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Order </button>
            <!-- </div> -->
            
        </div>
    </div>
    
</div>
{/each}
</div>

<style>
    .show-product{
        display: block;
    }

    .product-name{
        align-items: center;
        justify-content: center;
    }

    .button-order{
        /* display: flex; */
        background-color: #ADD8E6;
        text-align: center;
        padding: 4px;
        color: #191970;
        font-size: medium;
        border-radius: 4px;
        border: 1px groove #F8F8FF;
    }

    .product-description{
        margin-left: auto;
        margin-right: auto;
        display: block;
        /* padding: 2rem; */
        height: 100%;
        /* max-height: 300px; */
        width: 100%;
        /* max-width: 300px; */
    }

    .img-div{
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        justify-content: center;
        display: block;
        padding: 1rem;
        height: auto;
        max-height: 250px;
        width: auto;
        max-width: 250px;
    }

    /* .img-show{
        display: block;
        padding: 1rem;
        height: auto;
        max-height: 200px;
        width: auto;
        max-width: 200px;
    } */

    .name-product{
        padding: 2rem;
        margin: 1em;
        height: auto;
        max-height: 100px;
        width: auto;
        max-width: 200px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
    }

    
    .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin-bottom: 4px;
    padding: 1ch 1ch 1ch 1ch;
    /* padding-bottom: 2ch; */
    }

    /* On mouse-over, add a deeper shadow */
    .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    /* Add some padding inside the card container */
    .container {
    padding: 2px 16px;
    }

    .row-container {
        display: grid;
        row-gap: 50px;
        grid-template-columns: auto auto auto;
        /* background-color: #DCDCDC; */
        padding: 4px;
    }

    .row-center{
        display: grid;
        row-gap: 50px;
        grid-template-columns: auto;
        /* background-color: #DCDCDC; */
        padding: 5px;
    }

    /* .col-center  `{ */
        /* font-size: 30px; */
        /* border: 1px solid rgba(0, 0, 0, 0.8); */
        /* background-color: rgba(255, 255, 255, 0.8);        
        padding: 5px;
        justify-content: center;
        justify-self: center;
        
        text-align: left;
    } */

    .col-item {
        background-color: rgba(255, 255, 255, 0.8);
        /* border: 1px solid rgba(0, 0, 0, 0.8); */
        padding: 5px;
        /* font-size: 30px; */
        text-align: left;
    }

    /* .page-nav{
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 4ch;
        margin-top: 4ch;
        padding-top: 2ch;
    } */
    
    /* .pagination{
        margin-left: auto;
        margin-right: auto;
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: inline-flex;
        padding: 2ch;
    } */

    /* .paginate-button{
        list-style-type: none;
        padding: 0.5ch;
        
    } */

    /* .page-button{
        padding: 1ch;
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 500;
        color: #000;
        background-color: #fff;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
    } */

    /* .page-button:hover{
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-5px);
    } */

    /* nav > ul {
		list-style-type: none;
		display: flex;
	} */
</style>
