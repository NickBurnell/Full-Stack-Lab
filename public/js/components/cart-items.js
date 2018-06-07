"use strict";

const cartItems = {
    template: `
    <h1>Shopify Your Life</h1>
    <section class="main">
        <section ng-repeat="item in $ctrl.cartItems" class="dataDisplay">
            <h3>{{ item.product }}</h3>
            <p>Price: {{ item.price }}</p>
            <p>Quantity: {{ item.quantity }}</p>
            <a href="" ng-click="$ctrl.deleteItem(item.id);" class="delete">Delete</a>
        </section>

        <form ng-submit="$ctrl.addItem($ctrl.newItem);" class="form">
            <h5>Add New Item</h5>
            <input type="text" placeholder="Product Name.." ng-model="$ctrl.newItem.product">
            <input type="number" placeholder="Price.." ng-model="$ctrl.newItem.price">
            <input type="number" placeholder="Quantity.." ng-model="$ctrl.newItem.quantity">
            <button>Add Item</button>
        </form>
    </section>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then((response) => {
            vm.cartItems = response.data;
        });
        vm.addItems = (newItem) => {
            CartService.addItem(newItem).then((response) => {
              vm.cartItems = response.data;
            });
            vm.newItem = {};
        };
        vm.deleteItem = (id) => {
            CartService.deleteItem(id).then((response) => {
              vm.cartItems = response.data;
            });
        };
        vm.updateItem = (item) => {
            CartService.updateItem(item).then((response) => {
              vm.cartItems = response.data;
            });
        };
    }]
};

angular
    .module("CartApp")
    .component("cartItems", cartItems);