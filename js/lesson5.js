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
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };


  // phonebook.add({
  //   name: 'Mango',
  //   email: 'mango@mail.com',
  //   list: 'friends',
  // })

  // phonebook.add({
  //   name: 'Poly',
  //   email: 'poly@hotmail.com',
  // })


// console.log(phonebook);

// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   a: 0,
//   b: 0,
//   read(a, b) {
//     this.a = a ?? 0;
//     this.b = b ?? 0;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//      return this.a * this.b;
//   },
// };

// console.log(calculator.read(2, 4));
// console.log(calculator.add());
// console.log(calculator.mult());

// const user = {
//     name: 'Artem',
//     city: 'Lviv',
//     sayHello(year, language) {
//         // console.log(arguments);
//         console.log(`Hello my name ${this.name}, from ${this.city}, I'm ${year}, study ${language}`);
//     }
// }
// user.sayHello(28, "HTML")



// const den = {
//     name:'Den',
//     city: "Zhutomyr"
// }

// const kate = {
//     name: "Kate",
//     city: "Uzhgorod"
// }


// const alex = {
//     name: "ALex",
//     city: "Kyiv"
// }




// const args = [18, "CSS"]
// user.sayHello.call(den,22,"JS")
// user.sayHello.apply(kate,[18, "CSS"])
// user.sayHello.apply(kate,args)
// console.log(user.sayHello.bind(alex));
// const alexSay = user.sayHello.bind(alex)
// alexSay(33, "react.js")
// alexSay(34, 'Node.js')
// alexSay(11, 'Java')
// user.sayHello(28, "HTML")
// alexSay()
// console.log(alexSay);

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


// Example 2 - Хранилище
// Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет получать
//  один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих.
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// class Storage {
//     constructor(items) {
//         this.items = items;

//     }
    
//     getItems() {
//        return this.items;
//     };

//     addItem(item) {
//         return this.items.push(item);
//     };

//     removeItem(item) {
//         this.items.includes(item) ? this.items.splice(1, this.items.indexOf(item)) : this.items
//     };

// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Напиши класс User который создаёт объект со свойствами login и email.
// Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// class User {
//     #login;
//     #email;

//     constructor({login, email} = {}) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//       }
    
//       set login(newLogin) {
//         this.#login = newLogin;
//       }

//       get email() {
//         return this.#email;
//       }
    
//       set email(newEmail) {
//         this.#email = newEmail;
//       }

// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// Example 4 - Заметки
// Напиши класс Notes который управляет коллекцией заметок в свойстве items.
// Заметка это объект со свойствами text и priority. Добавь классу статическое свойство Priority,
//  в котором будет храниться объект с приоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

// class Notes{
//     static Priority = {
//           LOW: 'low',
//           NORMAL: 'normal',
//           HIGH: 'high'
//         }
//     constructor(items){
//         this.items = items;

//     }
//       addNote(note){
//         this.items.push(note)
//       }
            
//       removeNote(text) {
        
//         const element = this.items.find(value => value.text === text);
    
//         if (this.items.includes(element)) {
//           const index = this.items.indexOf(element);
//           this.items.splice(index, 1);
//             }
//   }
  
//       updatePriority(text, newPriority) {
//       return this.items.map(value => value.text === text ? value.priority = newPriority : value);
        
//         }
// }
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({ text: 'Моя друга замітка', priority: Notes.Priority.NORMAL, });
// console.log(myNotes.items);

// myNotes.addNote({ text: 'Моя третя замітка', priority: Notes.Priority.HIGH, });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// Example 5 - Toggle
// Напишите класс Toggle который принимает объект настроек {isOpen: boolean}
// и объявляет одно свойство on - состояние вкл/выкл (true/false).
// По умолчанию значение свойства on должно быть false.

// class Toggle {
//     constructor( on = {isOpen: false} ) {
//         this.on = on;
//     }
// }

// const firstToggle = new Toggle({ isOpen: true });

// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();

// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');


// __________________________________________ //
// -----------------------------------------TASK 1------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//     griffindor: [{
//             name: "Harry",
//             points: 17
//         },
//         {
//             name: "Hermiona",
//             points: 19
//         },
//         {
//             name: "Ron",
//             points: 14
//         },
//     ],
//     sliserin: [{
//             name: "Draco",
//             points: 17
//         },
//         {
//             name: "Goyl",
//             points: 14
//         },
//         {
//             name: "Crabbe",
//             points: 5
//         },
//   ],
  //   universityFaculty(faculty) {
  //  return this.sliserin.map(hogvart => hogvart.name)
  // },
  // universityPoints(points) {
  //     return this.sliserin.reduce((total, point) => total += point.points, 0)
  //   },
//   universityFirstPoints(faculty1, faculty2) {
//     const facult1 = this.griffindor.reduce((total, point) => total += point.points, 0)
//     const facult2 = this.sliserin.reduce((total, point) => total += point.points, 0)
//     return facult1 > facult2 ? facult1 : facult2
//     },
// }

// console.log(hogvarts.universityFaculty(hogvarts.sliserin));
// console.log(hogvarts.universityPoints(hogvarts.sliserin)); 
// console.log(hogvarts.universityFirstPoints(hogvarts.griffindor, hogvarts.sliserin)); 


// -----------------------------------------TASK 2------------------------------------------//
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [{
//     name: `Lika`,
//     language: `html`

// }, {
//     name: `Anton`,
//     language: `css`

// }, {
//     name: `Andriy`,
//     language: `js`

// }, {
//     name: `Vova`,
//     language: `html`

// }, {
//     name: `Alina`,
//     language: `css`

// }, {
//     name: `Egor`,
//     language: `js`

// }, {
//     name: `Aleksandr`,
//     langunage: `html`

// }, {
//     name: `Taras`,
//     language: `css`

// }, {
//     name: `Ivan`,
//     language: `js`

// }, {
//     name: `Make`,
//     language: `html`

// }, ];


// const programming = function(student, lang) {
//   return student.filter(student => student.language === lang).map(name => name.name)
// };

// console.log(programming(students, `js`));



// -----------------------------------------TASK 3------------------------------------------//
// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// // const workers = [{
// //         name: 'Alex',
// //         salary: 3500,
// //         month: 12,
// //     },
// //     {
// //         name: 'Dima',
// //         salary: 2500,
// //         month: 9,
// //     },
// //     {
// //         name: 'Oleg',
// //         salary: 1500,
// //         month: 36,
// //     },
// // ];



// -----------------------------------------TASK 4------------------------------------------//
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
// ]



// -----------------------------------------TASK 5------------------------------------------//
// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

// const bankSystem = {
//     privat : 1000,
//     mono : 1500,

// }



// -----------------------------------------TASK 6------------------------------------------//
// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex','Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: [Alex]
//     },
// ] //Not found

// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];// Not found


// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ]; // Jhon


// -----------------------------------------TASK 7------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]



