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

function processCall(recipient, onAvailable, onNotAvailable) {
  // Имитируем доступеность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
  // Логика принятия звонка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
  // Логика активации автоответчика
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
  // Логика записи голограммы
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);