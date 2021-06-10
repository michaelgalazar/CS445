"use strict";
/*eslint-disable*/

// 1) Use the Module pattern to create a shopping cart that has one private immutable member:
//    basket[], and the following public methods:

const shoppingCart = (function () {

    let basket = [];

    function CreateBasket(product) {
        product = product || {};
        this.id = product.id || 0;
        this.name = product.name || 'Coffee';
        this.description = product.description || 'Coffee Grounds from Ethiopia';
        this.price = product.price || 9.5;
        this.count = product.count || 1;
    }

    return {
        upsertItem: function (product) {
            basket.push(new CreateBasket(product));
            return basket;
        },

        getItemsCount: function () {
            return basket.length;
        },
        getTotalPrice: function () {
            let totalPrice = 0;
            for (let i = 0; i < basket.length; i++) {
                totalPrice += basket[i].price;
            }
        },
        removeItemById: function (id) {
            for (let i = 0; i < basket.length; i++) {
                if (basket[i].id === id) {
                    basket.splice(i, 1)
                }

            }
        }
    };
})();

shoppingCart.upsertItem({ id: 0, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9.5, count: 1 });

shoppingCart.upsertItem({ id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 11.25, count: 1 });

console.log(shoppingCart.getItemsCount());
shoppingCart.removeItemById(0);
console.log(shoppingCart.getItemsCount());

const p1 = shoppingCart.upsertItem();
const p2 = shoppingCart.upsertItem();
console.log(p1 == p2); // true




