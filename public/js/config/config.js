"use strict";

angular
  .module("CartApp")
  .config(($routeProvider) => {
    $routeProvider
    .when("/cart-items", {
      template: `<cart-items></cart-items>`
    })
    .otherwise({
      redirectTo: "/cart-items"
    });
  });