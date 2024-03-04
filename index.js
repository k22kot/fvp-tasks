/* eslint-disable no-console */
// 1 задание
const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

names.forEach((item) => {
  console.log(`Привет, ${item}`);
});

// 2 задание
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((item) => item * 10);
console.log(newNumbers);

// 3 задание
const otherNumbers = [5, 12, 8, 130, 44];

const someNumbers = otherNumbers.filter((item) => item > 10);
console.log(someNumbers);

// 4 задание
const users = [
  { name: 'Иван', age: 23 },
  { name: 'Мария', age: 18 },
  { name: 'Алексей', age: 32 },
  { name: 'Ольга', age: 24 },
  { name: 'Сергей', age: 17 },
  { name: 'Анна', age: 21 },
];

const someUsers = users.filter((item) => item.age > 18);
const result = someUsers.map((item) => `${item.name}, (${item.age} лет)`);

console.log(result);

// 5 задание
const sales = [
  { product: 'Телефон', price: 50000, quantity: 1 },
  { product: 'Чехол', price: 1500, quantity: 2 },
  { product: 'Зарядное устройство', price: 2500, quantity: 1 },
];

const totalPrice = sales.reduce((acc, sales) => {
  const newPrice = acc + sales.price * sales.quantity;
  return newPrice;
}, 0);

console.log(totalPrice);
