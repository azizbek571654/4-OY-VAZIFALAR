"use strict";
function updateProduct(product, updates) {
    return Object.assign(Object.assign({}, product), updates);
}
const oldProduct = {
    id: 1,
    name: "Telefon",
    price: 1200,
    description: "Yangi model"
};
const newProduct = updateProduct(oldProduct, {
    name: "Telefon Pro",
    price: 1400
});
console.log(newProduct);
const productInfo = {
    id: 2,
    name: "Noutbuk"
};
console.log(productInfo);
const fixedProduct = {
    id: 3,
    name: "Planshet",
    price: 800,
    description: "Oqish uchun"
};
// fixedProduct.price = 900; shu yerda TS hato brad
