(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function ($scope){
       $scope.sayMessage = '';
       $scope.checked = false;

  $scope.checkFodList = function () {

        $scope.empty = true;

    if ($scope.foodList.length === 0) {
        $scope.empty = true;

    } else {
       $scope.checked = true;
       $scope.empty = false;
       var foodListArray = $scope.foodList.split(',');

       if (foodListArray.length <= 3) {
           $scope.sayMessage = 'Enjoy!';
       }
      if (foodListArray.length > 3) {
           $scope.sayMessage = 'Too much!';
       }
   }

  };

});

})();
