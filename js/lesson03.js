//task 1
  /*
  Створіть масив genres з елементами "Jazz" та "Blues".
  Додайте «Рок-н-рол» до кінця.
  Виведіть у консоль перший елемент масиву.
  Виведіть останній елемент масиву в консоль. Код повинен працювати для масиву довільної довжини.
  Видаліть перший елемент та виведіть його в консоль.
  Вставте «Country» та «Reggae» на початок масиву.
 */

// const genres = ["Jazz", "Blues"]
// console.log(genres);

// genres.push('Рок-н-рол');
// console.log(genres);

// genres.shift();
// console.log(genres);

// genres.splice(0, 0, 'Country', 'Reggae');
// console.log(genres);

//task 2
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';

// let sides = values.split(" ");

// const square = sides[0] * sides[1];

// console.log(square);

// task 3

// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i <= fruits.length -1; i += 1) {
//   console.log(`# ${i + 1} ${fruits[i]}`);
// }

//task 4
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob, William, Solomon, Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(', ');
//  console.log(namesArray);

// const phoneArrays = phones.split(',');
// console.log(phoneArrays);

// for (let i = 0; i < namesArray.length; i += 1) {
//   console.log(`${namesArray[i]} - ${phoneArrays[i]}`)
// }

//task 5
/*
* Вивести всі слова крім першого і останнього.
 * Має працювати для будь якого рядка.
 * 1. Розбиваємо рядок на масив по пробілу(кожне слово - окремий елемент масива)
 * 2. Методом splice - змінюємо масив видаляючи з нього всі елементи крім першого і сотаннього
 *    splice(індекс з якого починати, кількість елементів)
 * 3. slice повертає масив з видаленими елементами
 * 4. Збираємо отриманий масив в рядок 
 * 
 * Note: Для метода slice першим параметром(початком) буде елемент з індексом 1(другий елемент масива).
 * Але як визначити кількість елементів для видалення:
 *  Всього елементів в масиві "words.length". Якщо б треба було видалити все, то підійшло б.
 *  Але перший ми вже відкидуємо, тому берем "words.length - 1".
 *  Тепер, з умовою задачі, треба відкинути і останній. Тобто відняти ще одиницю.
 *  Тому вийде "words.length - 2"
 */

// const string = 'Welcome to the future. Hello my name is Stepan';

// const word = string.split(' ');
// console.log(word);
// const newArray = word.splice(0, 1);
// word.pop();
// const wordString = word.join();
// console.log(wordString);

//or
// const amountToDelete = word.length - 2;
// const deletedWords = word.splice(1, amountToDelete );
// console.log(deletedWords)

// task 6

/**
 * Task 6. Вивести в консоль рядок задом на перед
 * 1. Розбиваємо рядок на масив посимвольно(кожен символ рядка - окремий елемент масива)
 * 2. Методом reverse, розвертаємо масив сзаду наперед([a,b,c] -> [c,b,a])
 * 3. Збираємо вже перевернутий масив в новий рядок
 */

// const string = 'Welcome to the future';

// let arrayString = string.split(' ');

// arrayString.reverse();

// let stringReverse = arrayString.join(" ");
//  console.log(stringReverse);

// variant 2

// let newStr = '';
//  for (let i = string.length - 1; i >= 0; i -= 1) {
//   newStr += string[i];
//  }

//  console.log(newStr)

/**
 * Task 7. Відсортувати масив
 */

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs)
// langs.sort()
// console.log(langs)

/**
 * Task 8 repeta
 * Знайти найменше значення в масиві.
 * 1. Створюємо змінну в яку запишему результат
 * 2. Присвоємо її перший елемент масива
 * 3. проходимо циклом по масиву. Порівнюємо кожне значення зі значенням змінної
 * 4. Якщо елемент на поточній ітерації менше за значення змінної. Присвоюємо в змінну значення поточного елемента
 * Таким чином пройшовши по всьому масиву знайдемо найменше число
 */

//  const numbers = [17, 94, 23, 37, 456, 234, 35, -58];

// let minArray = numbers[0];


// for (let number of numbers) {
//   if (number < minArray) {
//     minArray = number;
//   }
// }

// console.log(minArray);

// task 9

/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let value of cart) {
//   total += value;
// }

// console.log(total);

// const calculateTotalPrice = function (items) {

//   let total = 0;

// for (const item of items) {
//     total += item;
//   }

// return total;
// }

// console.log(calculateTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90]));

//tasl 10

/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

// const logItems = function (items) {
//   for (let item of items) {
//     console.log(item)
//   }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

//task 11

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден.`;
//     }
//   }

//   return `Пользователь ${loginToFind} не найден.`;

// }

// const findLogin = function (allLogins, loginToFind) {
//  return allLogins.includes(loginToFind)
//  ? `Пользователь ${loginToFind} найден.`
//  : `Пользователь ${loginToFind} не найден.`;

// }


// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

//task 12

/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const findSmallesNumber = function (numbers) {
//   let minNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < minNumber) {
//       minNumber = number;
//     }
//   }

//   return minNumber;
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

//task 13

/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// }

// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

// task 14

/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

// const slugify = function (string) {
//   const normalizedString = string.toLowerCase();

//   const words = normalizedString.split(" ");

//   const slug = words.join('-');
//   return slug;

//   return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

// task 15

/* repeta
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);

//   const uniqueElements = [];

//   for (const elements of array) {
//     if (args.includes(elements)) {
//       uniqueElements.push(elements);

//       console.log(`${elements} есть везде!`);
//     }
//   }
//   return uniqueElements;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

//Bardachov
// task 16

/**
 * Task 1 - Індекс маси тіла.
 * Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає
 * індекс маси тіла. Для цього необхідно розділити вагу в кілограмах на
 * квадрат висоти людини в метрах.
 * 
 * Індекс маси тіла необхідно округлити до однієї цифри після коми
 */

// 1) Запитати ввести вагу і зріс - prompt
// 2) створити пусту функцію розрахунку індексу маси - function
// 3) задати функції параметри ваги і зросту - (weight, height)
// 4) розрахувати індекс маси. - Math.pow()
// 5) повернути результат - return
// 6) округлити результат до одніє цифри після коми toFixed(1) 

// const weight = prompt('Введіть вашу вагу в кг');
// const height = prompt('Введіть ваш зріст в метрах');


// const calcBMI = function (weightU, heightU) { 
// const heightPow = Math.pow(heightU, 2);
// const result = weightU / heightPow;

// return result.toFixed(1);
// }

/** 
 * Створили окрему функцію яка на основі порахованого індекса маси тіла, 
 * виводе в консоль, є надмірна вага чи нема
 * */

// const validateBMI = function (bmi) {
//   if (bmi <= 18.5) {
//     console.log('недостатня маса')
//   } else if (bmi <= 24.9) {
//     console.log('норма')
//   } else {
//     console.log('надлишкова маса')
//   }

// }

//  const result = calcBMI(weight, height);
//  console.log(result);

//  validateBMI(result);

// console.log(calcBMI(80, 1.75))
// console.log(calcBMI(70, 1.85))
// console.log(calcBMI(100, 1.55))
// console.log(calcBMI(90, 1.8))


// task 17

/**
 * Колекція курсів.
 * Напишіть функції для роботи з колекцією навчальних курсів `courses`:
 * ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
 * 
 * - `addCourse(name)` - додає курс до кінця колекції
 * - `removeCourse(name)` - видаляє курс з колекції
 * - `updateCourse(oldName, newName)` - змінює ім'я на нове
 */

// 1) Додаємо курс до колекції `addCourse`
//   1.1 створити функцію додавання курсу - function
//   1.2 оголосити параметр функції, який прийматиме значення аргумента для додавання
//   1.3 додамо курс до колекції - push
//   1.4 Повернемо оновлену колекцію - return

// 2) Видалити курс із колекції `removeCourse`
//   2.1 створити функцію видалення курсу
//   2.2 оголосити параметр функції, який прийматеме значення аргумента для видалення 
//   2.3 Перевірити чи є курс у колекції - indexOf
//   2.4 Якщо є, видаляємо - splice
//   2.5 Повертаємо із функції елемент який був видалений

// 3) Оновлення курса `updateCourse`
//   1. Створюємо функцію оновлення курсу, старе імʼя замінюємо новим
//   2. Даємо два параметра: старе імя, нове імя(oldName, newName)
//   3. Перевірити чи є курс у колекції - indexOf
//   4. Якщо є, записуємо нове значення по індексу

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

/** Щоб додати інтерактивности, запитуємо користувача ввести дані - prompt */
const courseName = prompt('Введіть назву курсу');
const newName = prompt('Введіть нове імʼя');

const addCourse = function(newCourse) {

  if (courses.includes(newCourse)) {
    console.log('Такий курс вже є');
    return // ранній вихід із функції
  }

  courses.push(newCourse);
  return courses; // Памʼятайте, що змінна courses це посилання на масив!
}

// const result = addCourse(courseName);
// console.log(result);

const removeCourse = function (courseName) {
  
  const index = courses.indexOf(courseName);
  
  if (index === -1) {
    console.log('такого курсу нема')
    return
  }
  
  const deletedCourses = courses.splice(index, 1);
  return deletedCourses
}

// const result = removeCourse(courseName);
// console.log(courses);
// console.log(result);

const updateCourse = function (oldName, newName) {
  const index = courses.indexOf(oldName);
  
  if (index === -1) {
    console.log('такого курсу нема')
    return
  }

  courses[index] = newName
}

// const result = updateCourse(courseName, newName);
// console.log(courses);
// console.log(result);


/** checkCourseName - функція в яку ми винесли перевірку елемнту в масиві. */
const checkCourseName = function (value) {
  const index = courses.indexOf(value);

  if (index === -1) {
    console.log('такого курсу нема')
    return false
  } else {
    console.log('Такий курс вже є');
    return true
  }
}


/** Дублюю ті самі функції, але тепер з викристанням винесеної перевірки в окрему функцію */
// const addCourse = function(newCourse) {

//   if (checkCourseName(newCourse)) return

//   courses.push(newCourse);
//   return courses;
// }

// const removeCourse = function (courseName) {
  
//   if (!checkCourseName(courseName)) return
  
//   const deletedCourses = courses.splice(index, 1);
//   return deletedCourses
// }

// const updateCourse = function (oldName, newName) {
//   if (!checkCourseName(oldName)) return
//   courses[index] = newName
// }