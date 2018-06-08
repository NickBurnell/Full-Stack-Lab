"use strict";

const cartItems = {
    template: `
    <h1>Shopify Your Life</h1>
    <section class="main">
        <section ng-repeat="item in $ctrl.cartItems" class="dataDisplay">
            <div class="iconWrapper">
                <h3>{{ item.product }}</h3>
                <i ng-click="$ctrl.deleteItem(item.id);" class="material-icons">clear</i>
            </div>
            <p>Price: {{ item.price | currency }}</p>
            <div class="quantityUpdate">
                <button type="button" ng-click="$ctrl.decrement(item)"> - </button>
                <p>Quantity: {{ item.quantity }}</p>
                <button type="button" ng-click="$ctrl.increment(item)"> + </button>
            </div>
        </section>
    </section>

        <form ng-submit="$ctrl.addItems($ctrl.newItem);" class="form">
            <h5>Add New Item</h5>
            <input type="text" placeholder="Product Name.." ng-model="$ctrl.newItem.product">
            <input type="number" step="0.01" placeholder="Price.." ng-model="$ctrl.newItem.price">
            <input type="number" placeholder="Quantity.." ng-model="$ctrl.newItem.quantity">
            <button>Add Item</button>
        </form>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then((response) => {
            vm.cartItems = response.data;
        });
        vm.addItems = (newItem) => {
            CartService.addItem(newItem).then((response) => {
                console.log("ive been clicked");
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
        vm.increment = (item) => {
            item.quantity++;
            vm.updateItem(item);
        };
        vm.decrement = (item) => {
            if (item.quantity > 0) {
                item.quantity--;
                vm.updateItem(item);
            }
        };
    }]
};

angular
    .module("CartApp")
    .component("cartItems", cartItems);