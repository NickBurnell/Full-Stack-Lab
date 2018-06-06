"use strict";
const express = require("express");
const cartRouter = express.Router();

const cartItems = [
    {
        product: "Coffee",
        price: 15,
        quantity: 2,
        id: 0
    },
    {
        product: "Tacos",
        price: 2,
        quantity: 3,
        id: 1
    },
    {
        product: "Shoes",
        price: 60,
        quantity: 1,
        id: 2
    },
    {
        product: "Candy",
        price: 2,
        quantity: 1,
        id: 3
    },
    {
        product: "Pineapple",
        price: 4,
        quantity: 1,
        id: 4
    },
    {
        product: "Eggs",
        price: 3,
        quantity: 1,
        id: 5
    }
];

let idCount = 6;

cartRouter.get("/cart-items", (req, res) => {
    console.log(cartItems);
    res.send(cartItems);
});
cartRouter.post("/cart-items", (req, res) => {
    console.log(cartItems);
    items.push({
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        id: idCount++
    });
    res.send(cartItems);
});
cartRouter.delete("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    console.log(typeof req.params.id);
    for (let item of cartItems) {
        if(item.id == req.params.id) {
            cartItems.splice(cartItems.indexOf(item), 1);
        }
    }
    res.send(cartItems);
});
cartRouter.put("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    console.log(typeof req.params.id);
    for (let item of cartItems) {
        if(item.id == req.params.id) {
            cartItems.splice(cartItems.indexOf(item), 1, {
                product: req.body.product,
                price: req.body.price,
                quantity: req.body.quantity,
                id: item.id
            });
        }
    }
    res.send(cartItems);
});
module.exports = cartRouter;