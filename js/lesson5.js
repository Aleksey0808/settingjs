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

// Example 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает
//  общую стоимость камней с таким именем, ценой и количеством из свойства stones.

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const result = stoneName.reduce((total, stone) => total += stone.price);
    console.log(result);
  },
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// addItem(newItem) {
//   return this.items.push(newItem);;
// };

// removeItem(itemToRemove) {

//   this.items = this.items.filter(item => item !== itemToRemove);
// };


// }


// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

class Car {
 static MAX_PRICE = 50000;
  
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
   this.#price = newPrice <= Car.MAX_PRICE ? this.#price = newPrice : this.#price;
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
