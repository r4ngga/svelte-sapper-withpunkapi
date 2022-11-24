<script>
    let datalength = [];

    function getItem(){
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
      storedItem = storedItem.filter(item => item.item_id !== item_id);
      localStorage.setItem('itemsInCart', JSON.stringify(storedItem));
      datalength = storedItem; //value variable datalength ditimpa dengan value storedItem dalam fungsi sebelumnya 
    }

    getItem();
</script>

{#each datalength as data}
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

        <!-- <li class="flex py-6">
                <div class="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                  <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="object-cover object-center w-full h-full">
                </div>

                <div class="flex flex-col flex-1 ml-4">
                  <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">Throwback Hip Bag</a>
                      </h3>
                      <p class="ml-4">$90.00</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Salmon</p>
                  </div>
                  <div class="flex items-end justify-between flex-1 text-sm">
                    <p class="text-gray-500">Qty 1</p>

                    <div class="flex">
                      <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                    </div>
                  </div>
                </div>
              </li> -->
        <!-- More products... -->


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