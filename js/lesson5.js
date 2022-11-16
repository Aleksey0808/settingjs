// const car = {
//   brend: "skoda",
//   model: "octavia",
//   year: "2015",
// };

// const car2 = Object.create(car);
// car2.engine = "tdi";

// console.log(car2)
// console.log(car.isPrototypeOf('brend'));

// const Car = function ({brand, modal, price} = {}) {
//   this.brand = brand;
//   this.modal = modal;
//   this.price = price;

// };

// Car.prototype.sayHi = function () {
//   // console.log('Car.prototype.sayHi => this', this);
//   // console.log("Hello:")
// }
// // console.log(Car.prototype)

// Car.prototype.chengePrice = function (newPrice) {
//   this.price = newPrice;
// }

// const myCar = new Car({
//   brand: 'Audio',
//   modal: 'q3',
//   price: 35000,
// });

// myCar.chengePrice(45000)

// const myCar2 = new Car({
//   brand: 'Audio',
//   modal: 'a6',
//   price: 25000,
// })

// const myCar3 = new Car({
//   brand: 'bmw',
//   modal: 'x6',
//   price: 50000,
// })

// // console.log(Car);
// console.log(myCar);
// // console.log(myCar2);
// // console.log(myCar3);

// class Storage {
//   constructor(items) {
//     this.items = items;
//   };

//   getItems() {
//   return this.items;
// };


// addItem(newItem) {
//   return this.items.push(newItem);;
// };

// removeItem(itemToRemove) {

//   this.items = this.items.filter(item => item !== itemToRemove);
// };


// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// this
//task 1


// class Car {
//  static MAX_PRICE = 50000;
  
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//    this.#price = newPrice <= Car.MAX_PRICE ? this.#price = newPrice : this.#price;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//this//////////////////////////////////////////////////

// Example 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает
// общую стоимость камней с таким именем, ценой и количеством из свойства stones.


// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//    return this.stones.filter(stone => stone.name === stoneName)
//       .map(stone => stone.price * stone.quantity);
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// Example 2 - Телефонная книга
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: generateId(),
//       createdAt: getDate(),
//     };
//     contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   read(a, b) {
//     this.a = prompt('number "a"', 0);
//     this.b = prompt('number "b"', 0);
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//      return this.a * this.b;
//   },
// };

// console.log(calculator.read());
// console.log(calculator.add());
// console.log(calculator.mult());

// Модуль 5. Занятие 10. Прототипы и классы////////////////////////

// Example 1 - Блоггер
// Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

// email - почта, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// topics - массив тем на которых специализируется блоггер
// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.

// Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics } = {}) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
  
//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//   };

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }

// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts



