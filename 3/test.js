var app = angular.module("myApp", []);

app.controller("myController", [function() {

    this.count = 0;
    this.n = 100;

    this.addCount = function(n) {
        this.count += n;
    };

    this.reset = function() {
        this.count = 0;
    };

}]);
