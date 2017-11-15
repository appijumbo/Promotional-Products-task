console.log("javascript running ok");

/***********
Approach 1

  1) Scan list and identify products with offers.

  If an offer found store data-sku of the 4 lowest priced with offers by only storing 4 and
  removing the highest value

  2) Using the use the data-sku, identify artcles containing all the product data.
     Convert into appropriate type and correct data format, saving into an array of objects

  3) Put this array into localStorage. Check this can be accessed on another page

----

Approach 2
1) Go through every article containing an offer and save its data into an array of objects.

2) Sort through this array finding the lowest vakue products and copy this data into another array of objects

3) Put this array into localStorage


Approach 2 seems less elegant as you end up with a large array of objects that, if there were a lot of products, is large.
Also sorting through is likley to be slower,

hence ** Approach 1 adopted **
*********************************************/





/** Scan list and identify products with offers **/

function scan(){
/**  Variables for products **/

//var lowestList = [];
    var allProducts = document.querySelectorAll('article[data-sku]');
    for (var i=0; i < allProducts.length; i++ ){
      console.log("allProducts.length " + allProducts.length);
      var sku = allProducts[i].getAttribute('data-sku');
       //console.log(" sku of article " + i + " is = " + sku);
    };

  //return lowestList;
};


/** identify artcles containing all the product data, convert and save to array **/

/*function oderedProdArray(){

/** find lowest 4 priced with offers **/

/*var list = [];

/*list = scan();


/*};




/** Save array on localStorage  **/


scan();
