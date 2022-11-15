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

class Storage {
  constructor(items) {
    this.items = items;
  };

  getItems() {
  return this.items;
};

addItem(newItem) {
  return this.items.push(newItem);;
};

removeItem(itemToRemove) {

  this.items = this.items.filter(item => item !== itemToRemove);
};


}


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
