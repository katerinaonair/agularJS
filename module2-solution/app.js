(function(){
  'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject =['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var showList = this;
  showList.items = ShoppingListCheckOffService.getShoppingList();

  showList.removeItem = function(itemIndex){
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService(){
  var service = this;

  var boughtList = [];

  var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Carrot",
    quantity: "5"
  },
  {
    name: "Apples",
    quantity: "1"
  },
  {
    name: "Cheese",
    quantity: "3"
  },
  {
    name: "Bread",
    quantity: "1"
  }
  ];

  service.getShoppingList = function(){
    return shoppingList;
  };
  service.getBoughtList = function(){
    return boughtList;
  };

  service.removeItem = function(itemIndex){
    var item = shoppingList[itemIndex];

    boughtList.push(item);
    shoppingList.splice(itemIndex, 1);
  };


}



})();
