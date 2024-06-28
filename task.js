// Задание 1
// const n = 1;
// if (n >= 0 && n <= 100) {
//   console.log("Находится в диапазоне чисел");
// } else {
//   console.log("Не находится в диапазоне чисел");
// }

// Задание 2
// const engineers = {
//   Den: 1000,
//   Matt: 5000,
//   Steve: 2000,
// };
// for (const key in engineers) {
//   console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей`);
// }

// Задание 3
// const users = ["Oksana", 30, "Developer", "ksushka_03", "54321"];
// for (i = 1; i < users.length; i += 2) {
//   console.log(users[i]);
// }

// Задание 4
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// for (i = 0; i < numbers.length; i++) {
//   console.log(`Индексу ` + i + ` соответствует число ` + numbers[i]);
// }

// Задание 5
// let questions = [
//   {
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//   },
//   {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0,
//   },
// ];
// for (i = 0; i < questions.length; i++) {
//   questions[i].usersAnswer = "null";
// }
// console.log(questions);

// Задание 6
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// подзадание 1 - вывести все элементы:
// for (const items of numbers) {
//   console.log(items);
// }
// for (i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // подзадание 2 - сумма всех элементов:
// let sum = 0;
// for (let item of numbers) {
//   sum += item;
//
// }
// let sum2 = 0;
// for (i = 0; i < numbers.length; i++) {
//   sum2 += numbers[i];
//   console.log(sum2);
// }

// подзадание 3 - сумма четных чисел массива:
// let sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     sum += numbers[i];
//   }
// }
// console.log(sum);

// подзадание 4 - максимальное число массива:
// let num = 0;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > num) {
//     num = numbers[i];
//   }
// }
// console.log(num);

// // подзадание 5 - индекс максимального число массива:
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 70) {
//     console.log(i);
//   }
// }

// Задание 7
// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// let newArr = [];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// Задание 8
// let nums = [5, 4, 3, 8, 0];
// let limit = 5;
// let numbers = [];
// for (i = 0; i < nums.length; i++) {
//   if (nums[i] >= limit) {
//     numbers.push(nums[i]);
//   }
// }
// console.log(numbers);

// Задание 9
// const users = [
//   { name: "Vasya", age: 23 },
//   { name: "Olya", age: 12 },
//   { name: "Anna", age: 22 },
//   { name: "Alex", age: 18 },
//   { name: "Valery", age: 8 },
// ];
// for (i = 0; i < users.length; i++) {
//   if (users[i].age > 15) {
//     console.log(users[i].name);
//   }
// }

// // Задание 10
// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// let vegetablesNEW = [];
// for (i = 0; i < vegetables.length; i++) {
//   vegetablesNEW.push({
//     word: vegetables[i],
//     length: vegetables[i].length,
//   });
// }
// console.log(vegetablesNEW);
