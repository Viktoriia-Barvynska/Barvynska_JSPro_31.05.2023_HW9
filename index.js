//=================HW9==================
/*Створити масив, довжину та елементи якого задає користувач. 
Потім відсортувати масив за зростанням. 
Потім видалити елементи з масиву з 2 по 4 (включно). 
У міру змін виводити вміст масиву на сторінку.*/

// Створення масиву та отримання довжини від користувача
let length = prompt("Введіть довжину масиву");
let array = [];

// Заповнення масиву елементами, введеними користувачем
for (let i = 0; i < length; i++) {
  let element = prompt("Введіть елемент масиву");
  array.push(element);
}

// Виведення вмісту масиву до сортування
console.log(`Масив перед сортуванням: ${array},`)

// Сортування масиву за зростанням
array.sort(function(a, b) {
  return a - b;
});

// Виведення вмісту масиву після сортування
console.log(`Масив після сортування: ${array} `);

// Видалення елементів з масиву з 2 по 4 (включно)
array.splice(1, 4);

// Виведення вмісту масиву після видалення елементів
console.log(`Масив після видалення: ${array}`);


console.log('================================================')



//Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let arrayy = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти суму та кількість позитивних елементів
let sum = 0;
let positiveCount = 0;

for (let i = 0; i < arrayy.length; i++) {
  if (arrayy[i] > 0) {
    sum += arrayy[i];
    positiveCount++;
  }
}

console.log(`Сума позитивних елементів ${sum} `);
console.log(`Кількість позитивних елементів: ${positiveCount} `);

// Знайти мінімальний елемент масиву та його порядковий номер
let min = arrayy[0];
let minIndex = 0;

for (let i = 1; i < arrayy.length; i++) {
  if (arrayy[i] < min) {
    min = arrayy[i];
    minIndex = i;
  }
}
console.log(`Мінімальний елемент:  ${min} `);
console.log(`Порядковий номер мінімального елемента: ${minIndex} `);

//======or=======

let minElement = Math.min(...arrayy);
console.log(minElement)

let minIndex2 = arrayy.indexOf(minElement);
console.log(minIndex2)

// Знайти максимальний елемент масиву та його порядковий номер
let max = arrayy[0];
let maxIndex = 0;

for (let i = 1; i < arrayy.length; i++) {
  if (arrayy[i] > max) {
    max = arrayy[i];
    maxIndex = i;
  }
}

console.log(`Максимальний елемент:  ${max} `);
console.log(`Порядковий номер максимального елемента: ${maxIndex}`);

//======or=======

let maxElement = Math.max(...arrayy);
console.log(maxElement)

let maxIndex2 = arrayy.indexOf(maxElement);
console.log(maxIndex2)

// Визначити кількість негативних елементів
let negativeCount = 0;

for (let i = 0; i < arrayy.length; i++) {
  if (arrayy[i] < 0) {
    negativeCount++;
  }
}
console.log(`Кількість негативних елементів: ${negativeCount}`);

//======or=======

let negativeCount2 = arrayy.filter(element => element < 0).length;
console.log(negativeCount2)

// Знайти кількість непарних позитивних елементів
let oddPositiveCount = 0;

for (let i = 0; i < arrayy.length; i++) {
  if (arrayy[i] > 0 && arrayy[i] % 2 !== 0) {
    oddPositiveCount++;
  }
}
console.log(`Кількість непарних позитивних елементів: ${oddPositiveCount}`);

//======or=======

let oddPositiveCount2 = arrayy.filter(element => element > 0 && element % 2 !== 0).length;
console.log(oddPositiveCount2)



// Визначити кількість парних позитивних елементів
let evenPositiveCount = 0;

for (let i = 0; i < arrayy.length; i++) {
  if (arrayy[i] > 0 && arrayy[i] % 2 === 0) {
    evenPositiveCount++;
  }
}
console.log(`Кількість парних позитивних елементів: ${evenPositiveCount}`);

//======or=======

let evenPositiveCount2 = arrayy.filter(element => element > 0 && element % 2 === 0).length;
console.log(evenPositiveCount2)

// Знайти суму парних позитивних елементів
let evenPositiveSum = 0;

for (let i = 0; i < arrayy.length; i++) {
  if (arrayy[i] > 0 && arrayy[i] % 2 === 0) {
    evenPositiveSum += arrayy[i];
  }
}
console.log(`Сума парних позитивних елементів: ${evenPositiveSum} `);

//======or=======

let evenPositiveSum2 = arrayy.filter(element => element > 0 && element % 2 === 0).reduce((total, element) => total + element, 0);
console.log(evenPositiveSum2)

// Знайти суму непарних позитивних елементів
let oddPositiveSum = 0;

for (let i = 0; i < arrayy.length; i++) {
  if (arrayy[i] > 0 && arrayy[i] % 2 !== 0) {
    oddPositiveSum += arrayy[i];
  }
}

console.log(`Сума непарних позитивних елементів: ${oddPositiveSum}`);
//======or=======

let oddPositiveSum2 = arrayy.filter(element => element > 0 && element % 2 !== 0).reduce((total, element) => total + element, 0);
console.log(oddPositiveSum2)


// Знайти добуток позитивних елементів
let positiveProduct = 1;

for (let i = 0; i < arrayy.length; i++) {
  if (arrayy[i] > 0) {
    positiveProduct *= arrayy[i];
  }
}
console.log(`Добуток позитивних елементів: ${positiveProduct} `);

//======or=======

let positiveProduct2 = arrayy.filter(element => element > 0).reduce((product, element) => product * element, 1);
console.log(positiveProduct2)

// Знайти найбільший серед елементів масиву, решту занулити
let largest = arrayy[0];

for (let i = 1; i < arrayy.length; i++) {
  if (arrayy[i] > largest) {
    largest = arrayy[i];
  }
}

for (let i = 0; i < arrayy.length; i++) {
  if (arrayy[i] !== largest) {
    arrayy[i] = 0;
  }
}

console.log(`Масив після занулення решти елементів: ${arrayy},`);
//======or=======

let maxElementValue = Math.max(...arrayy);
console.log(maxElementValue)

arr = arrayy.map(element => (element === maxElementValue) ? element : 0);
console.log(arr)