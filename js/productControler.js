console.log("javascript running ok");

/***********
Approach

1) Go through every article containing an offer and save its data, modified and sanitised, into an array of objects.

2) Sort through the array ordering by the lowest to highest value products

3) Split this array to just have first 4 and put this array into localStorage for viwing on other page

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
  			SKU: sku,
  			Title: title,
  			Url: url,
  			Price:priceClean,
  			Offer:offerStr
      };

        /** push this object to create array storage **/
        allOffers.push(productObj);


  	});

    console.log(allOffers);

  }


/** Sort Array in order of Price lowest to highest **/
function sortOffers(){

  console.log("allOffers before sort " + JSON.stringify(allOffers));

  allOffers.sort(function(a, b){
      return a.Price-b.Price
  })
  console.log("allOffers after sort  " + JSON.stringify(allOffers));
  console.log("Offers sorted -->/n");
  console.log(allOffers);
};

/** Slice array keeping the first 4 prices **/
function lowestFourOffers(){
var theLowestOffers = allOffers.slice(0, 4);
console.log("theLowestOffers" + JSON.stringify(theLowestOffers));
return JSON.stringify(theLowestOffers);

};


/** Save array on localStorage  **/
function lowestToLocal(){
  console.log("Save lowest 4 offers to local");
  localStorage.setItem('lowestFourOffers', lowestFourOffers());
};


function generateDummyProducts(){

var productsCollection = [];




productsCollection = [
  {
//    SKU: 999,
//    Title: "Mars Bars",
//    Url: "img/image1.png",
//    Price: "",
//    Offer: "5 for £2"
  }

];

var dummyId = $('#generatedProductsPlaceholder');

var dummyArticle = ''; // make sure declare outside the each loop


function getRandomNum(min, max){
return Math.floor(Math.random() * max) + min;
};


// Generate products
function generateProducts(){
  for(i=0; i<40; i++){
    var newProduct = {
      SKU: "",
      Title: "Bananas",
      Url: "img/image1.png",
      Price: "",
      Offer: "5 for £2"
    };


    newProduct.SKU = getRandomNum(50,5000)
    newProduct.Price = getRandomNum(0.5, 10);
    productsCollection.push(newProduct);
  };
}

generateProducts();

$(productsCollection).each(function(index){

// make sure its a += to add all the articles in !!
dummyArticle += '<article data-sku="' + productsCollection[index].SKU + '"/>' +
 '<a href="/sku1001">'+'<img src="'+ productsCollection[index].Url + '"/>'+
 '<h3>'+ productsCollection[index].Title +'</h3>'+
 '</a><span class="price">'+ productsCollection[index].Price +
 '</span><span class="offer">'+ productsCollection[index].Offer +
 '</span><button class="buyBtn">Buy Now</button></article>"'

  //console.log("stuff  " + productsCollection[index].Title);

});



dummyId.html(dummyArticle);

};

  window.onload = function(){

    generateDummyProducts();

    aquireOffers();

    sortOffers();

    lowestToLocal();

  }


  })(window.document, jQuery);
