<<<<<<< Updated upstream
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

const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log("Сегодня");
} else if (daysUntilDeadline === 0) {
  console.log("Сегодня");
}
=======
const a = 5;
const b = 2;

let result;

if (a === b) {
    result = 'ok';
} else {
    result = "érror";
}

console.log(result);
>>>>>>> Stashed changes
