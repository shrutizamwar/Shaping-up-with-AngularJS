/**
 * Created by Shruti on 5/19/2015.
 */
(function () {
    var app = angular.module('store-products',[]);
    app.directive('productTitle', function() {
        return{
            restrict : 'E',
            templateUrl: 'templates/product-title.html'
        };
    });

    app.directive('productGallery', function(){
        return{
            restrict:'E',
            templateUrl:'templates/product-gallery.html',
            controller: function(){
                this.current = 0;
                this.setCurrent = function(val){
                    if(val){
                        this.current = val;
                    }else{
                        this.current= 0;
                    }
                };
            },
            controllerAs:'gallery'
        };
    });

    app.directive('productDescription', function(){
        return{
            restrict: 'E',
            templateUrl: 'templates/product-description.html'
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict: "A",
            templateUrl: "templates/product-specs.html"
        };
    });

    app.directive("productReview", function(){
        return{
            restrict:'E',
            templateUrl:"templates/product-review.html"
        };
    });

    app.directive("productPanels", function() {
        return {
            restrict: "E",
            templateUrl: "templates/product-panels.html",
            controller: function(){
                this.tab=1;
                this.selectTab = function(setTab){
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                }
            },
            controllerAs:'panel'
        };
    });
})();
