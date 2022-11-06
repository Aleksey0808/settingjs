// const salaries = {
//   ivan: 200,
//   maksim: 300,
//   andrey: 500,
// }


// const countTotalSalary = function (salaries) {
//   const salary = Object.values(salaries);
//   console.log(salary);

//   let totalSalary = 0;

//   for (let value of salary) {
//     console.log(value);
//     totalSalary += value;
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary(salaries));

// const products = [
//   {
//     name: "Radar",
//     price: 1300,
//     quantity: 4
//   },
//   {
//     name: "Scanner",
//     price: 2700,
//     quantity: 3
//   },
//   {
//     name: "Droid",
//     price: 400,
//     quantity: 7
//   },
//   {
//     name: "Grip",
//     price: 1200,
//     quantity: 9
//   },
// ];

// const bookNames = [];

// for (const product of products) {
//   bookNames.push(product.quantity);
  // if (products.name) {
  //   console.log(products.price)
  // } else {
  //   false
  // }

  // console.log(product);

  // console.log(product.name);

  // console.log(product.price);

  // console.log(product.quantity);
//}

// console.log(bookNames);



// function getProductPrice(productName) {
//   // Change code below this line
//   const keys = Object.keys(productName);
//   for (let key of keys) {
//     console.log(key);
//     }


//   // Change code above this line
// }

// console.log(getProductPrice(products))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const nameValue = [];
//   for (let product of products) {
//      if (product.hasOwnProperty(propName)) {
//       nameValue.push(product[propName]);
//     }
//   }

// return nameValue;
//   // Change code above this line
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  
//   let totalPrice = 0;

//   for (let i = 0; i < products.length; i++) {
//     console.log();
//     if (products[i].name === productName) {
//       totalPrice += products[i].price * products[i].quantity
//     }
//   }
//   console.log(totalPrice);

// }

// console.log(calculateTotalPrice("Scanner"));


/**
 * Task 1.
 * Напиши скрипт, який для об'єкта `user`, послідовно:
 * - додає поле `mood` зі значенням `'happy'`
 * - замінює значення `hobby` на `'skydiving'`
 * - замінює значення `premium` на `false`
 * - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи `Object.keys()` та `for...of`
 */

// const abc = 'greeting';

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

/** 
 * Task 2.
 * У нас є об'єкт, де зберігаються зарплати нашої команди. 
 * Напишіть код для підсумовування всіх зарплат і збережіть 
 * результат у змінній sum. Повинно
 * вийти 390. Якщо об'єкт `salaries` порожній, 
 * то результат має бути 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// const values = Object.values(salaries);

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

/** Task 3
 * Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
 * об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
 * каміння з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function(stones, stoneName) {
//   let result = 0;

//   for (const stone of stones) {
    
//     if (stone.name === stoneName) {
//       result = stone.price * stone.quantity;
//     }
//   }

//   return result;
// }

// console.log(calcTotalPrice(stones, 'Діамант'))

/** Task 4 - Комплексні завдання
 * Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
 * в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Types = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 100,
//   wallets: {
//     type: 'own',
//     balance: 300,
//     owner: 'Me',
//     colesd: true
//   },
//   // Історія транзакцій
//   transactions: [],

//   array: ['HTML', 'JS'],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length
//     }
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     amount = Math.abs(amount);

//     this.balance += amount;
//     const newTransaction = this.createTransaction(amount, Types.DEPOSIT);
    
//     this.transactions.push(newTransaction)
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     amount = Math.abs(amount);

//     const newTransaction = this.createTransaction(amount, Types.WITHDRAW);

//     if (amount > this.balance) {
//       console.log('Нема грошей!');
//       return
//     }

//     this.balance -= amount;
//     this.transactions.push(newTransaction)
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction
//       }
//     }
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let result = 0;
    
//     for (const transaction of this.transactions) {
//       if (type === transaction.type) {
//         result += transaction.amount
//       }
//     }

//     return result;
//   },

//   checkKey(key) {
//     return this.hasOwnProperty(key)
//   }
// };

// const keys = Object.keys(account.wallets);
// console.log(keys)

// account.deposit(-45000);
// account.deposit(57);
// account.deposit(1);
// account.deposit(678);

// account.withdraw(-20000);
// account.deposit(17000);
// account.withdraw(40000);


// const currentBalance = account.getBalance();
// console.log(currentBalance);
// console.log(account.balance);

// const budgetWhole = account.getTransactionDetails(4);
// console.log(budgetWhole);


// const totalWithdraws = account.getTransactionTotal(Types.WITHDRAW);
// const totalDeposits = account.getTransactionTotal(Types.DEPOSIT);
// console.log(totalWithdraws)
// console.log(totalDeposits)

// console.log(account.hasOwnProperty('wallets'))
// console.log(account.checkKey('walletsasd'))

// console.log(account.transactions[1])

// account.transactions[1].amount = 570
// console.log(account.transactions[1])




// // Функція пошуку найдовшого слова в рядку.
// function findLongestWord(string) {
  
//   // 1. split розбиває рядок по пробілу на масив слів
//   // 2. в тілі колбека reduce порівнюємо поточний елемент масива з результатом поверненим на попередній ітерації
//   const wordsArr = string.split(' ');
//   const longest = wordsArr.reduce(function(prev, item) {
//     if (prev.length > item.length) {
//       return prev
//     }
//     return item
//   });

//   return longest

//   // return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
// }

// let res = findLongestWord('Hello my name is longestone');

// debugger


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
  
//   removePotion(potionName) {
//     let index = this.potions.indexOf(potionName);

//     this.potions.splice(index, 1);
//     console.log(this.potions.indexOf(potionName));
//     return this.potions;
              
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
   
//     let index = this.potions.indexOf(oldName);
//     console.log(index)
//     this.potions.splice(index, 1, newName);
    
//     return this.potions;


//   },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

//41/41

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//      for(let i = 0; i < this.potions.length; i += 1){
//        if (this.potions[i].name === newPotion.name) {
//       // console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//        }
      
//     }

//       console.log(`${newPotion.name}`)
//       this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for(let i = 0; i < this.potions.length; i += 1){
//   if(this.potions[i].name === potionName) {
//     return this.potions.splice(i, 1);
//   }
// }
//       return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions} = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//         return `Potion ${oldName} is not in inventory!`;
//       }
//     }
//     this.potions.splice(i, 1, newName);
//     console.log('заміняє старий на новий ', this.potions);
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))


/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      if (productName === item.name) {
        console.log('нашли такой продукт ', productName);
        console.log('индекс: ', i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity -= 1;
        return;
      }
    }
  },
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });

// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍇');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍋');
// cart.increaseQuantity('🍋');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());
