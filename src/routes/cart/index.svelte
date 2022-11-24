<script>
  import { get } from "svelte/store";
  import ItemsCard from "../../components/ItemsCard.svelte";
  import OrderFirstCard from "../../components/OrderFirstCard.svelte";
  import FooterItemsCardGoShopping from "../../components/FooterItemsCardGoShopping.svelte";
  import FooterItemsCardCheckout from "../../components/FooterItemsCardCheckout.svelte";
  // import Nav from '../components/Nav.svelte';

    let datalength = [];

    function getItem(){
        // const getItem = localStorage.getItem('itemsInCart');
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
	    }
    }

    function deleteItem(item_id){
      let storedItem = JSON.parse(localStorage.getItem('itemsInCart'));
      // console.log(storedItem.length);
      //atau pakai cara lama
    //   for(let x = 0;x < storedItem.length; x++){
    //     if(storedItem[x].item_id === item_id){
    //       storedItem.splice(x, 1);
    //     }
    //     if(x == storedItem.length){
    //       // menyembunyikan item
    //     }
    //   }
      storedItem = storedItem.filter(item => item.item_id !== item_id);
      localStorage.setItem('itemsInCart', JSON.stringify(storedItem));
      datalength = storedItem; //value variable datalength ditimpa dengan value storedItem dalam fungsi sebelumnya 
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
              
                {#each datalength as data}
                   <!-- <ItemsCard /> -->
                   <li class="flex py-6">
                        <div class="flex-shrink-0 overflow-hidden border border-gray-200 rounded-md h-30 w-30">
                          <img src="{data.image_url}" alt="{data.name}" class="img-div" >
                        </div>
                    
                        <div class="flex flex-col flex-1 ml-4">
                          <div>
                            <div class="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href="produk/{data.id}">{data.name}</a>
                              </h3>
                              <!-- <p class="ml-4">$90.00</p> -->
                            </div>
                            <p class="mt-1 text-sm text-gray-500">{data.tag}</p>
                            <!-- <p>{data.item_id}</p> -->
                          </div>
                          <div class="flex items-end justify-between flex-1 text-sm">
                            <p class="text-gray-500">Qty {data.total}</p>
                    
                            <div class="flex">
                              <button on:click={() => deleteItem(data.item_id)}
                              type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                            </div>
                          </div>
                        </div>
                    </li>
                {/each}
              {:else}
                <OrderFirstCard />
              {/if}
              
            </ul>
          </div>
        </div>
      </div>
      {#if datalength != 0}
        <FooterItemsCardCheckout /> <!-- dibuat menjadi component-->
      {:else}
        <FooterItemsCardGoShopping />  <!-- dibuat menjadi component-->      
      {/if}
    </div>
  </div>
  

  <style>
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
  </style>