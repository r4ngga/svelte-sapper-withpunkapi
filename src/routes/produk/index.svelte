<script type="text/javascript">
    import fetch from 'node-fetch';
   
    let datalength = Array();
       

   function callProductBeer(){
        const prod = "https://api.punkapi.com/v2/beers";
        // var results = document.getElementById("results");
       fetch(prod)
        .then(response => response.json())
        .then((data) => {
            
            for (let i = 0; i < data.length; i++) { 
                datalength = data;
                console.log(data[i].name);
            }

            // data.forEach((result) => {
            // var brewed = result.first_brewed; 
            // var brewed_year = parseInt(brewed.substring(brewed.indexOf("/")+1));   
            // var ingredients = result.ingredients.malt;

            // console.log(result);
            // console.log(result.name, brewed_year, ingredients);

            // if((result.abv > 5 && result.abv<11) && brewed_year>=2015) {
            //     const beers = '<li><img src="'+result.image_url+'" alt=""><p>'+result.name+' - '+ingredients[0].name+'</p></li>';
            //     results.insertAdjacentHTML("beforeend", beers);  
            // }
            // datalength = result;  
            // console.log(datalength);       
            // });
            
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

<!-- <div class="show-product">
    {#each datalength as product}
    <div class="items">
        <div class="product">
            <div class="img-div">
                <img src="{product.image_url}" class="img-show" alt="">
                
            </div>
            <div class="name-product">
                {product.name}
            </div>
        </div>
    </div>
    {/each}
</div> -->

<div class="show-product">
    {#each datalength as product}
    <div class="card">
        <img class="img-div" src="{product.image_url}" alt="">

        <div class="container">
            <h4 class="name-product"><b>{product.name}</b></h4>
            <p class="product-description">{product.description}</p> 
        </div>
    </div>
    {/each}
</div>

<div class="page-nav">
    
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
    }

    nav > ul {
		list-style-type: none;
		display: flex;
	}
</style>
