'use strict';

const productName = prompt("Введите наименование товара:");
const quantity = Number(prompt("Введите количество товара:"));
const category = prompt("Введите категорию товара:");
const price = Number(prompt("Введите цену товара:"));

console.log(`Тип данных наименования товара: ${typeof productName}`);
console.log(`Тип данных количества товара: ${typeof quantity}`);
console.log(`Тип данных категории товара: ${typeof category}`);
console.log(`Тип данных цены товара: ${typeof price}`);

const totalPrice = quantity * price;
console.log(`На складе ${quantity} единицы товара "${productName}" на сумму ${totalPrice} деревянных`);
