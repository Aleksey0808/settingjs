
// const a = 5;
// const b = 2;

// let result;

// if (a === b) {
//     result = 'ok';
// } else {
//     result = "érror";
// }

// console.log(result);

//task 1
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   console.log(`${hours}ч. ${minutes}мин.`)
// } else {
//   console.log(`${hours}ч.`)
// }

//task 2
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// let nameJs = prompt("Какое официальное название JavaScript?");

// if (nameJs === 'ECMAScript') {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

//task 3
// Напиши скрипт, который выводит в консоль строку "Это положительное число",
//если в prompt пользователь ввел число больше нуля. Если был введен ноль,
//выводи в консоль строку "Это ноль". Если передали отрицательное число,
//в консоли должна быть строка "Это отрицательное число".

// let number = prompt('Введите число');

// if (number > 0) {
//   alert("Это положительное число");
// } else if (number < 0) {
//   alert("Это отрицательное число");
// } else {
//   alert("Это ноль");
// }

//task 4
// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b))
// } else {
//   console.log(b + 512);
// }

//task 5
//Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
//Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.

// let link = 'https://my-site.com/about';

// if (!link.endsWith("/")) {
//     link += "/";
// }

// console.log(link);


//task 6
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ,
// но только в том случае, если в link есть подстрока "my-site".
// Используй конструкцию if...else.

// let link = 'https://my-site.com/about';

// if (!link.endsWith("/") && link.includes("my-site")) {
//     link += "/";
// }

// console.log(link);


// task 7

//Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://my-site.com/about';

// if (!link.endsWith("/")) {
//     link += "/";
// }

// console.log(link);

// let link = 'https://my-site.com/about';

// let result = !link.endsWith("/") ? link += "/" : null;

// console.log(link);

//task 8
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости
// от значения переменной hours.
// Если значение переменной hours:
// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 60;

// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires")
// } else {
//   console.log("Overdue");
// }

//task 9
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 3;

// if (daysUntilDeadline === 0) {
//   console.log("Сегодня");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Послезавтра");
// } else if (daysUntilDeadline >= 3) {
//   console.log("Дата в будущем");
// }


//task 10
//ыполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 3;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сегодня");
//     break
  
//   case 1:
//     console.log("Завтра");
//     break;
  
//   case 2:
//     console.log("Послезавтра");
//     break;
  
//   default:
//     console.log("Дата в будущем");
// }

//task 11

// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.

// const max = 99;
// const min = 17;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }


//task 12
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// let login = prompt('Напиши логин');
// let password;

// if (login === "Админ") {
//    prompt('введи пароль');


//   if (!login === "Админ") {
//     alert("Отменено");
  
//   } else if (password === "Я админ") {
//     alert("Здравствуйте!");

//   } else {
//     alert("Неверный пароль");
//   }
  
// } else {
//    alert("Я вас не знаю");
//   }



 //task 13 (else...if and switch)
 /*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

// const stars = 5;
// let price;

// if (stars === 1) {
//   console.log(price = 20);

// } else if (stars === 2) {
//   console.log(price = 30);

// } else if (stars === 3) {
//   console.log(price = 50);

// } else if (stars === 4) {
//   console.log(price = 70);

// } else if (stars === 5) {
//   console.log(price = 120);
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// switch (stars) {
//   case 1:
//     console.log(price = 20);
//     break;
//   case 2:
//     console.log(price = 30);
//     break;
//   case 3:
//     console.log(price = 50);
//     break;
//   case 4:
//     console.log(price = 70);
//     break;
//   case 5:
//     console.log(price = 120);
//     break;
//   default:
//     console.log('Такого кол-ва звезд нет');
// }



//task 14
/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

//  1. сделать переменные
// const option = 4;
// let message = '';

// switch (option) {
//   case 1:
//     console.log(message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе');
//     break;
//   case 2:
//     console.log(message = 'Курьер доставит заказ завтра с 9:00 до 18:00');
//     break;
//   case 3:
//     console.log(message = 'Посылка будет отправлена сегодня');
//     break;
//   default:
//     console.log(message = 'Вам перезвонит менеджер');
// }

//task 15
/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// const stars = 6;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;

// } else if (stars === 3 || stars === 4) {
//   price = 30;

// } else if (stars === 5) {
//   price = 120;

// } else {
//   price = 'Такого кол-ва звезд нет';
// }

// console.log(price);

//task 16
/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// 1. написать вары
// 2. перебрать работников в цыкле
// 3. згенерить случайную зп
// 4. прибавить к тоталу
// 5. лог

// let employees = 6;
// let employeesMin = 500;
// let employeesMax = 5000;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(Math.random() * employeesMax - employeesMin + employeesMin);

//   console.log(`ЗП работника № ${i} - ${salary}`)

//   totalSalary += salary;
// }

// console.log(totalSalary);

// task 17

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// const min = 0;
// const max = 17;
// let sum = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   sum += i;
// }
// console.log(sum);

//task 18

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

// let balance = 5000;
// let payment = 50000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);

// if (balance >= payment) {
//   balance -= payment;
//   console.log('Все хорошо, снимаем деньги... Спасибо за покупку!');
//   console.log(`На счету осталось ${balance} кредитов`)
// } else {
//   console.log('На счету недостаточно средств для проведения операции!')
// }
// console.log('Операция завершена')
 
// task 19
/*
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// let totalSpent = 50;
// let payment = 200;
// let discount = 0;


//   if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;

// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 0.05;

// } else if (totalSpent >= 5000) {
//     discount = 0.1;
    
// } else {
//     discount = 0;
//     console.log('не партнёр, скидка 0%');
// }

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// payment -= payment * discount;

// console.log(`Ваш заказ со скидкой составляет ${payment}`);

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);

//   let sum = 0

// for (let i = 0; i <= 20; i += 1) {
//   sum += i;
// }
// console.log(sum);

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// const message = "JavaScript is in my blood";
// let totalPrice = 10;
// let sum = 0;

// let splitMassage = message.split(' ').length;


// // debugger

// for (let i = 1; i <= splitMassage; i++) {
//   sum = i * totalPrice;
// }
// console.log(sum);

// Сравнить длину array

// let maxLength = [1, 2, 3, 4, 5, 6, 7, 8]
// let a = [1, 2, 3, 4, 5];
// let b = [1, 2, 3];

// let newArray = a.concat(b);

// if (newArray.length > maxLength.length) {
//   // return newArray.slice(maxLength);
// }

// console.log(maxLength.slice());


//самая длинная строка
// const string = "The quick brown fox jumped over the lazy dog";
// let newString = string.split(" ");
// let longString = "";

// for (const word of newString) {
// if (word.length >  longString.length) {
//   longString = word;
// }
// }

// console.log(longString);

//возвращала массив всех целых чисел от значения min до max

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//    for(let i = min;  i <= max; i++)
//     numbers.push(i);
//   return numbers;
// }

// function filterArray(numbers, value) {

//  let newArrat = [];
//  for (const number of numbers) {
//    if (number > value) {
//     newArrat.push(number)
//    }
//  }
// console.log(newArrat);

// }

// const array1 = [1, 2, 3, 4, 6];
// const array2 = [2, 4, 6];
// let newArray = [];

// for (const number of array1) {
//      if (array2.includes(number)) {
//       newArray.push(number)
//      }
   
//    }
//    console.log(newArray)


// const start = [1];
// const end = [7];

// // let newArray = start.concat(end);

// let result = [];
  
// for (let i = start; i <= end; i++) {
    
//     if ((i % 2) === 0) {
//         result.push(i);
//     }
//   }

// console.log(result);

// const array = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
// const value = ['Jupiter'];

// for (const newArray of array) {
//   if (newArray === value) {
//     console.log(true);
//   }
//   console.log(false);
// }


