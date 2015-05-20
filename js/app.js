/**
 * Created by Shruti on 5/18/2015.
 */
(function(){
    var app = angular.module('store',['store-products']);
    app.controller('StoreController', ['$http',function($http){
        var store=this;
        $http.get('products.json').success(function(data){
            store.products = data;
        });
    }]);

    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review.createdOn = Date.now();
            this.review={};
        }
    });
})();

