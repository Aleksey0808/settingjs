// 01-callbacks


// func(7, 3, expression);

// const filter = (array, test) => {
//   const filterResult = [];

//   for (const el of array) {
//     const passed = test(el);
//     if (passed) {
//     filterResult.push(el);;
//   }
    
//   }

//   return filterResult;
// }

// const callback1 = (value) => value <= 3;

// const callback2 = (value) => value >= 3;

// // const result = filter([1, 2, 3, 4, 5, 6, 7], callback1);
// const result = filter([1, 2, 3, 4, 5, 6, 7], callback2);

// console.log(result);

// 02-closures


// const makeSheff = (name) => {

//   const makeDish = (dish) => {
//     console.log(`${name} готовит ${dish}`)
//   }

//   return makeDish;
// }

// const mango = makeSheff('Mango');

// mango('пельмени');
// mango('tea')

// const poly = makeSheff('Poly');

// poly('bread');
// poly('solt');



/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));


// 03-arrow

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// const callback1 = value => value >= 3;

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);

// console.log(r1);

// const callback2 = value => value <= 4;

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// // const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3);

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

// function makeCounter(h) {
//   // let count = h;
//   return function(n) {
//     console.log(`${h}, ${n}`) ;
//   };
// }

// let counter1 = makeCounter('petya'); 
// let counter2 = makeCounter('ivan');

// counter1('hi');
// counter2('bye');
// counter1('pshol');
// counter2('privet');

// console.log( counter1() );
// console.log( counter2() );



// function changeEven(numbers, value) {
//   const newArray = [];
//     numbers.forEach(element => {
//       if (numbers[i] % 2 === 0) {
//       newArray.push(element * value);
//   }
//     })
//     return newArray;
  // Change code above this line
// }

// const changeEven = (numbers, value) => {
//   const newArray = [];

//   numbers.forEach(element => {
    
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
  
//   });
//   return newArray;
  
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = changeEven(numbers, 10);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//task 1

// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// your code here


// const createProduct = (obj, callback) => {
//   product = {
//     ...obj,
//     id: 1,
//   }

//  return callback(product);
// }

// const logProduct = (object) => console.log(object);
// const logTotalPrice = ({price, quantity}) => price * quantity;

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// const result = createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// console.log(result)

//task 2

// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
    
//       if (amount > TRANSACTION_LIMIT) {
//         return onError(amount, 'перевышен лимит');
//       }
      
//       if (this.balance  < amount) {
//           return onError(amount, "Недостаточно денег");
//         }
    
//     return onSuccess(amount);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount <= 0) {
//         return onError(amount, 'перевышен лимит');
//     }
//     return onSuccess(amount);
//   },
// };

// const handleSuccess = (amount) => {
//   console.log(`${amount} Все хорошо`);
// }

// const handleError = (amount, message) => {
//   console.log(`${amount} Не обработано ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//task 3

// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// const employees = [
//   {
//     name: 'Artur',
//     bonus: 64.5
//   },
//   {
//     name: 'Ivan',
//     bonus: 49.2
//   },
//   {
//     name: 'Makar',
//     bonus: 36
//   },
//   {
//     name: 'Anastasiya',
//     bonus: 25
//   },
//   {
//     name: 'Olha',
//     bonus: 165.13
//   },
// ]

// const each = (array, callback) => {
//   const resulArr = [];

//   for ({name, bonus} of array) {
//     resulArr.push({
//       name,
//       bonus: callback(bonus)
//    })
//   }
// return resulArr
// }

// const roundBonus = value => Math.floor(value);

// const roundedBonus = each(employees, roundBonus);
// console.log(roundedBonus)



// const getFriends = (users) => {
  // return users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
  // return users.filter(user => user.isActive)
// }

 
// const students = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];




//     console.log(getFriends(students))

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// console.log(playtimes)

// const totalPlayTime = playtimes.reduce((totalTime, player) => totalTime + player );
// console.log(totalPlayTime)

// const averagePlayTime = totalPlayTime / playtimes.length;

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];


// const totalAveragePlaytimePerGame = 
// players.reduce((totalTime, {playtime, gamesPlayed}) => totalTime + playtime / gamesPlayed, 0);

// console.log(totalAveragePlaytimePerGame)

// const friends = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getTotalBalanceByGender = (users, gender) => users.filter(value => value.gender === gender).reduce((total, balanc) => total += balanc.balance, 0)

// const getSortedFriends = users => users.flatMap(user => user.friends).filter(
//   (friend, index, array) => array.indexOf(friend) === index).sort((a, b) => a.localeCompare(b))

// console.log(getTotalBalanceByGender(friends, "female"))

// const getTotalFriendCount = users => users.flatMap(user => user.friends).length;

// const getTotalFriendCount = users => users.reduce((total, user) => total + user.friends.length);
// console.log(getTotalFriendCount(friends))


// const sortByDescendingFriendCount = users => 
// [...users].sort((firstFriend, lastFriend) => 
// firstFriend.friends.length - lastFriend.friends.length).map(user => user.name)

// console.table(sortByDescendingFriendCount(friends))

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter(book => book.rating > MIN_BOOK_RATING).sort((a, b) => a.author.localeCompare(b.author)).map(book => book.author);

// console.log(names)

//task 1

/**
 * Напишіть наступні функції:
 * `createProduct(obj, callback)` - приймає об'єкт товару без id, а також коллбек. 
 * Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість `id` та викликає коллбек 
 * передаючи йому створений об'єкт.
 * 
 * `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в консоль
 * `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
 */

 const product = {
  name: "chocolate",
  price: 34,
  quantity: 5
}

const createProduct = (obj, callback) => {

 const product = {
  ...obj,
  index: 1,
 };

 return callback(product);

};

// const logProduct = product => console.log(product);

const logTotalPrice = product => product.reduce((total, {price, quantity}) => total += (price * quantity), 0);

console.log(createProduct(product, logTotalPrice))
// console.log(createProduct(product, logProduct))

// const totalPrice = createProduct(product, calculateTotalPrice); // колбеком буде функція calculateTotalPrice
// console.log(totalPrice)