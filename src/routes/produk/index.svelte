<script type="text/javascript">
    import fetch from 'node-fetch';
import Slug from '../blog/[slug].svelte';
   
    let datalength = Array();
    let posts = [];
    let totalPages = 13; //initiate by myself, because this API only reach 13 page
    let currentPage = 1;
    let pages = [];
    let tiaphalaman;
    let total ; 

   function createPagesArray(total){
    let arr = [];

    for(let i = 1; i <= total; i++){
        arr.push(i);
    }

    return arr;
   }
       
   function changesPage(page){
     fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=25`)
       .then(res => {
         return res.json();
       }).then( result => {
          datalength = result;
          currentPage = page;
       })
   }

   function callProductBeer(){
        const prod = "https://api.punkapi.com/v2/beers?page=1&per_page=25";
        // var results = document.getElementById("results");
       fetch(prod)
        .then(response => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) { 
                datalength = data;
                // console.log(data[i].name);
            }

           pages = createPagesArray(totalPages);
        //    console.log(pages);
            // totalPages = data.length/5;
            // console.log(totalPages);
            
        });
          
        return datalength; 
    }
   
   callProductBeer();
//    console.log(products);
</script>
<svelte:head>
	<title>Produk</title>
</svelte:head>

<h1>This Product</h1>

<p>This is the 'product' page. There's will be show a product.</p>


<div class="show-product">
    {#each datalength as product}
    <div class="card">
        <img class="img-div" src="{product.image_url}" alt="">

        <div class="container">
            <h4><a class="product-name" rel="prefetch" href="produk/{product.id}">detail</a></h4>
            <h4 class="name-product"><b>{product.name}</b></h4>
            <p class="product-description">{product.description}</p> 
        </div>
    </div>
    {/each}
</div>

<div class="page-nav">
    <p>You're in page {currentPage} from {totalPages} pages</p>
    <ul class="pagination">
        {#each pages as page}
            <li class="paginate-button">
                <button class="page-button" on:click="{ () => changesPage(page) }">{page}</button>
            </li>
        {/each}
    </ul>
</div>

<style>
    .show-product{
        display: block;
    }

    .product-name{
        align-items: center;
        justify-content: center;
    }

    .items{
        display: flex;
        border-bottom: 1px solid #cacaca;
        padding-bottom: 1rem;
        padding-top: 1rem;
        height: 100%;
        max-height: 500px;
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

    .img-show{
        display: block;
        padding: 1rem;
        height: auto;
        max-height: 200px;
        width: auto;
        max-width: 200px;
    }

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
