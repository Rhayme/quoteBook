/**
 * Created by Rayme on 6/2/2017.
 */
angular.module('quoteBook').controller('mainCtrl', function ($scope, dataService) {
   $scope.quotes = dataService.getQuotes();

   //remove data from the list if the delete button is click
  $scope.deleteMe = function (textToDelete) {
        dataService.removeData(textToDelete);
  };

  $scope.addQuote = function () {
     var newQuote = {
         text: $scope.newQuoteText,
         author: $scope.newQuoteAuthor
     }
     if(dataService.addData(newQuote)){
         $scope.newQuoteText = "";
         $scope.newQuoteAuthor = "";
     }
  }

});