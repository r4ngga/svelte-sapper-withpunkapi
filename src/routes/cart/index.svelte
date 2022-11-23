<script>
  import { get } from "svelte/store";
  import ItemsCard from "../../components/ItemsCard.svelte";
  import OrderFirstCard from "../../components/OrderFirstCard.svelte";
  import FooterItemsCardGoShopping from "../../components/FooterItemsCardGoShopping.svelte";
  import FooterItemsCardCheckout from "../../components/FooterItemsCardCheckout.svelte";
  // import Nav from '../components/Nav.svelte';

    // import { itemsInCart } from "../../itemsInCart";

    let datalength = [];

    function getItem(){
        // const getItem = localStorage.getItem('itemsInCart');
        // console.info(getItem);
        let getItem = '';
        if(typeof window !== 'undefined'){
		    getItem = JSON.parse(localStorage.getItem('itemsInCart'));
            console.log(getItem);
            if(getItem !== null){
                console.log(getItem.length);
                for(let x = 0; x < getItem.length; x++){
                    console.log(getItem[x]);
                    datalength = getItem;
                }
            }
            
            // getItem.map(function(val, key){
            //     console.log(val);
            //     // datalength = val;
            // });

        //     fetch(getItem)
        //     .then(response => response.json())
        //     .then((data) => {
        //     for (let i = 0; i < data.length; i++) { 
        //         datalength = data;
        //         // console.log(data[i].name);
        //     }
        // //    console.log(pages);
        //     // totalPages = data.length/5;
        //     // console.log(totalPages);
            
        //     });
        //     return datalength;
	    }
        // return localStorage.getItem('itemsInCart');
    }

    function deleteItem(item_id){
      let storedItem = JSON.parse(localStorage.getItem('itemsInCart'));
      // console.log(storedItem.length);
      for(let x = 0;x < storedItem.length; x++){
        if(storedItem[x].item_id === item_id){
          storedItem.splice(x, 1);
        }

        if(x == storedItem.length){
          // menyembunyikan item
        }
      }
      localStorage.setItem('itemsInCart', JSON.stringify(storedItem));
      // console.log(storedItem);
    }

    getItem();
</script>

<!-- <div class="per-card">
    <p>this cart</p>
</div> -->
<svelte:head>
    <title>Cart</title>
</svelte:head>

<div class="w-screen max-w-md pointer-events-auto">
    <div class="flex flex-col h-full bg-white shadow-xl">
        <!-- {#if datalength != null}   -->
      <div class="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
        <div class="flex items-start justify-between">
          <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
        </div>     
         
           
        

        <div class="mt-8">
          <div class="flow-root">
            <ul class="-my-6 divide-y divide-gray-200">
              <!-- foreach getitem from localstorage -->

              {#if datalength != 0}
              
                <!-- {#each datalength as data} -->
                   <ItemsCard />
                <!-- {/each} -->
              {:else}
                <OrderFirstCard />
              {/if}
              
            </ul>
          </div>
        </div>
      </div>
      {#if datalength != 0}
      <FooterItemsCardCheckout />
      <!-- <div class="px-4 py-6 border-t border-gray-200 sm:px-6">
        <div class="flex justify-between text-base font-medium text-gray-900"> -->
          <!-- <p>Subtotal</p>
          <p>$262.00</p> -->
        <!-- </div> -->
        <!-- <p class="mt-0.5 text-sm text-gray-500"> -->
            <!-- Shipping and taxes calculated at checkout -->
            <!-- .
        </p>
        <div class="mt-6">
          <a href="produk" class="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Checkout</a>
        </div>
        <div class="flex justify-center mt-6 text-sm text-center text-gray-500">
          <p>
            or
            <a href="produk" class="font-medium text-indigo-600 hover:text-indigo-500">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
        
      </div> -->
      {:else}
        <FooterItemsCardGoShopping />
        <!-- <div class="px-4 py-6 border-t border-gray-200 sm:px-6">
            <div class="flex justify-center text-sm text-center text-gray-500">
                <p>
                  <a href="produk" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Go Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
            </div>
        </div> -->
      {/if}
    </div>
  </div>
  

  <style>
     /* .img-div{
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
    } */
  </style>