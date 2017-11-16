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

(function($){


  /** identify artcles containing all the product data **/

  /** Sanitise data and save to an object **/

   /** push this object to Array **/



  /** Sort Array in order of Price lowest to highest **/

  /** Slice array keeping the first 4 prices **/


  /** Save array on localStorage  **/



})(jQuery);
