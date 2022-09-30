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

    /* .items{
        display: flex;
        border-bottom: 1px solid #cacaca;
        padding-bottom: 1rem;
        padding-top: 1rem;
        height: 100%;
        max-height: 500px;
    } */

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
        max-height: 50px;
        width: auto;
        max-width: 150px;
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
        padding: 5px;
    }

    .col-item {
        background-color: rgba(255, 255, 255, 0.8);
        /* border: 1px solid rgba(0, 0, 0, 0.8); */
        padding: 5px;
        /* font-size: 30px; */
        text-align: left;
    }

    .page-nav{
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 4ch;
        margin-top: 4ch;
        padding-top: 2ch;
    }
    
    .pagination{
        margin-left: auto;
        margin-right: auto;
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: inline-flex;
        padding: 2ch;
    }

    .paginate-button{
        list-style-type: none;
        padding: 0.5ch;
        /* margin: 0; */
    }

    .page-button{
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
        /* border: 0.5 solid #2d2d2d;
        border-radius: 1em;
        box-shadow: 1px 1px #888888;        
        align-self: center; */
    }

    .page-button:hover{
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-5px);
    }

    nav > ul {
		list-style-type: none;
		display: flex;
	}
</style>
