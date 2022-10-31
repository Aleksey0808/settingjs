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

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {

  const nameValue = [];

  // const keys = Object.keys(products);

  for (let product of products) {

  if (propName === 'name') {
      nameValue.push(product.name);
    }
    
     if (propName === 'price') {
      nameValue.push(product.price);
    }
    
    if (propName === 'quantity') {
      nameValue.push(product.quantity);
    }
 }

return nameValue;
 
}

console.log(getAllPropValues('name'));
