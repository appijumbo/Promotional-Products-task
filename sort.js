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

Approach 2 (modified)

1) Go through every article containing an offer and save its data, modified and sanitised, into an array of objects.

2) Sort through the array ordering by the lowest to highest value products

3) Split this array to just have first 4 and put this array into localStorage for viwing on other page


** Approach 2 adopted **
*********************************************/

/* switch to jQuery because solution seemes more direct */


/* closure to avoid globals plus ensure jquery ready)*/
(function(document, $){


allOffers = [];


  function aquireOffers(){

    var article = $('.offer');

  	$('.offer').each(function(index){ // Sanitise data and save to an object
  		var parent = article[index].parentElement;
  		var title = $(parent).find("h3")[0].childNodes[0].data.trim();
  		var sku = $(parent).attr( "data-sku");
      var url = $(parent).find('img').attr('src');


      //var priceData = $(parent).find('span.price')[0].childNodes[0].data;
      var priceStr = $(parent).find('span.price').html();
      // https://regex101.com/   an   http://bit.ly/2AMzpgA
      var priceClean = parseFloat(priceStr.replace(/[£,\s, p]+/g,""));
      if(priceStr.match(/[p]+/g)){
        console.log("real price is = "+ priceClean/100);
        priceClean = priceClean/100;
      };

      var offerStr = $(parent).find('span.offer').html().trim();

  		var productObj = {
  			"SKU": sku,
  			"Title": title,
  			"Url": url,
  			"Price":priceClean,
  			"Offer":offerStr
  			}

        allOffers.push(productObj);

        console.log(productObj);

  	});

  }



function sortOffers(){

console.log("ok?");

}



  aquireOffers();

  sortOffers();




   /** push this object to Array **/



  /** Sort Array in order of Price lowest to highest **/

  /** Slice array keeping the first 4 prices **/


  /** Save array on localStorage  **/



  })(window.document, jQuery);
