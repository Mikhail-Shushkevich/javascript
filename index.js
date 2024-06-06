'use strict'
// const objectA = {
//     a: 10,
//     b: true
// }

// const copyOfA = objectA

// copyOfA.c = 'abc'

// console.log(objectA)

// function a() {
//     console.log('hi its me')
// }

// a()

// const myName = {
//     name: 'Mikhail',
//     popular: true,
//     age: 42
// }
// console.log(myName.name);
// console.log(myName.popular);
// console.log(myName.age);

// myName.name = 'Oksana'
// myName.Age = 37;
// myName.popular = false;
// console.log(myName);

// const myCity = {
//     city: 'New York'
// }

// myCity.popular = true;

// myCity.coutry = 'USA';

// myCity.planet = 'Earth'

// console.log(myCity);


// const myGeneral = {
//     name: 'Mikhail',
//     age: 42,
//     gen: 'Men'
// }
// delete myGeneral.gen;
// for(const key in myGeneral) {
//     console.log(`${key}: ${myGeneral[key]}`);
// }

// const myCity = {
//     сity: 'New York',
//     info: {
//     isPopular: true,
//     country: 'USA'
//       }
//     }
//     console.log(myCity.info.isPopular);
//     // true
    
//     delete myCity.info['isPopular']
    
//     console.log(myCity);

// const myCity = {
//     city: 'New York',
//     cityGreeting: function () {
//         console.log('Greetings!!')
//     }
// }

// myCity.cityGreeting()


    
// const person = {
//     name: 'Bob',
//     age: 25
// }

// const person2 = person

// person2.age = 26
// person2.isAdult = true

// console.log(person.age);
// console.log(person.isAdult);

// let a
// let b 

// function myFn() {
//     let b 
//     a = true 
//     b = 10 
//     console.log(a);
// }

// myFn()

// console.log(a);
// console.log(b);

// const a = 5

// function myFn() {
//     function innerFn() {
//         console.log(a);  
//     }
//     innerFn()
// }

// myFn()

// function myFn() {
//     a = true
//     console.log(a)
// }

// myFn()

// console.log(a)

// 'use strict'
// let a
// function myFn() {
//     a = true
//     console.log(a)
// }

// myFn()

// console.log(a)

// let personalComponents = {
//     name: 'Mikhail',
//     old: 42,
//     adress: 'Poland'
// }

// let personalHeate = {
//     heate: 187,
//     ease: 'Blue'
// }

// let personal = {
//     ...personalComponents,
//     ...personalHeate
// }
// console.table(personal);

// const hello = 'Hello'
// const world = 'World'
// const greeting = `${hello} ${world}`
// console.log(greeting);

// const im = 'Меня зовут'
// const name = 'Михаил,'
// const place = 'я живу в городе'
// const town = 'Вроцлав.'

// const greeting = `${im} ${name} ${place} ${town}`

// console.log(greeting);


// const yamb = 'Я вас люблю, чего же более.'
// const horey = 'Что я еще могу сказать?'

// const greeting = yamb + ' ' + horey

// console.log(greeting);

// const myFunction = function (a, b) {
//     let c 
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFunction(2, 4));

// setTimeout(function() {
//     console.log('Отложенное сообщение')
// }, 1000) 

// const myFunction = (a, b) => {
//         let c 
//         a = a + 1
//         c = a + b
//         return c
//     }
//     console.log(myFunction(2, 4));

// setTimeout(() => {
//     console.log('Отложенное сообщение')
// }, 1000)

// a => {
//     // Тело функции
// }

// const mulByFactor = function(value, multiplier = 1) {
//     return value * multiplier
// }

// console.log(mulByFactor(10, 2));
// console.log(mulByFactor(5));

// const mulByFactor = (value, multiplier = 1) => {
//     return value * multiplier
// }

// console.log(mulByFactor(10, 2));
// console.log(mulByFactor(5));

// function mulByFactor(value, multiplier = 1) {
//     return value * multiplier
// }

// console.log(mulByFactor(10, 2));
// console.log(mulByFactor(5));

// const newPost = (post, addedAt = Date()) => {
//    return {
//    ...post,
//     addedAt,
//    };
// };

// const firstPost = {
//     id: 1,
//     author: 'Mikhail',
// }

// console.log(newPost(firstPost));


// const fnWithError = () => {
//     throw new Error('Some error')
// }

// try {
//     fnWithError()
// } catch (error) {
//     console.error(error)
//     console.log(error.message)
// }

// console.log('Continue...')

// try {
//     // Выполнение блока кода
// } catch (error) {
//     // Этот блок выполняется в случае возникновения ошибок в блоке try
// }

// let a = 0;

// const b = 5;

// if(a > b) {
//     console.log('a is larger');
// } else {
//     console.log('a is not large');
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// 'abc'; 

// let a = 0;
// let b = 2;
// let c;

// a = a + 3;

// c = a + b;

// d = 'Good ' + 'Evening';

// function myFunction(c, d) {
//     console.log(`Function called with c: ${c} and d: ${d}`);
// }

// myFunction(c, d);

// console.log('Hey');

// function myFn(a) {
//     console.log(a);
// }

// const b = true;
// let c = 10;

// myFn(2 + 3)
// myFn(b)
// myFn(c = c + 1)
// myFn(c = c + 1;)
// myFn(let d)

// const myArray = [1, 2, 3]
// console.log(myArray)

// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2)

// function arrayQality(arr1, arr2) {
//     if(arr1.length === arr2.length) {
//         return true;
//     } 
// }
// const myArray = ['Mikhail', 42, 'Poland']
// console.log(myArray);

// const myArray2 = new Array ('Oksana', 36, 'Poland')
// console.log(myArray2);

// console.log(arrayQality(myArray, myArray2));
// console.log(myArray);


// const myObject = {
//     0: 1,
//     1: 2, 
//     2: 3,
//     length: 3
// }

// console.log(myObject)

// const myArray = [1, 2, 3]
// console.log(myArray)

// const myArray = [1, true, 'a']
// console.log(myArray)

// console.log(myArray[0])
// console.log(myArray[1])

// console.log(myArray.length)

// const myArray = [1, 2, 3, 4]
// console.log(myArray) //[1, 2, 3, 4]
// console.log(myArray.length) // 4

// myArray[2] = 'abc'

// console.log(myArray) // [1, 2, 'abc', 4]
// console.log(myArray[2]) // 'abc'

// myArray[4] = true

// console.log(myArray) // [1, 2, 'abc', 4, true]
// console.log(myArray.length) // 5

// const myArray = [1, 2, 3]
// console.log(myArray) // [1, 2, 3]

// myArray.push(4)

// console.log(myArray) // [1, 2, 3, 4]

// myArray.push(true)

// console.log(myArray) // [1, 2, 3, 4, true]

// const myArray = [1, 2, 3]
// console.log(myArray) // [1, 2, 3]

// myArray.pop()
// console.log(myArray) // [1, 2]

// const removedElement = myArray.pop()

// console.log(myArray) // [1]
// console.log(removedElement) // 2

// const myArray = [1, 2, 3]
// console.log(myArray) // [1, 2, 3]

// myArray.unshift(true)

// console.log(myArray) // [true, 1, 2, 3]

// myArray.unshift('abc')

// console.log(myArray) // ['abc', true, 1, 2, 3]

// const myArray = [1, 2, 3]
// console.log(myArray) // [1, 2, 3]

// myArray.shift()

// console.log(myArray) // [2, 3]

// const removedElement = myArray.shift()

// console.log(myArray) // [3]
// console.log(removedElement) // 2

// const myArray = [1, 2, 3]
// console.log(myArray) // [1, 2, 3]

// myArray.forEach(el => console.log(el * 2))

// console.log(myArray) // [1, 2, 3] 
// // Оригинальный массив не изменился

// const myArray = [1, 2, 3, 10]
// console.log(myArray) 

// const res = myArray.forEach(el => console.log(el * 3))
// console.log(res)

// console.log(myArray)

// const myArray = [1, 2, 3]
// console.log(myArray) // [1, 2, 3]

// const newArray = myArray.map(el => {
//   return  el * 3})

// console.log(newArray) // [3, 6, 9]
// console.log(myArray) // [1, 2, 3]

// const userProfile = {
//     name: 'Mikhail',
//     commentsQty: 42,
//     hasSignedAgreement: false,
// }

// const {name, commentsQty} = userProfile
// const {hasSignedAgreement} = userProfile

// console.log(name) // Mikhail
// console.log(commentsQty) // 42

// const fruits = ['Apple', 'Banana']
// const [fruitOne, fruitTwo] = fruits

// console.log(fruitOne) // Apple
// console.log(fruitTwo) // Banana

// const userProfile = {
//    name: 'Mikhail',
//    commentsQty: 42,
//    hasSignedAgreement: false,
// }

// const userInfo = ({name, commentsQty}) => {
//     if (!commentsQty) {
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentsQty} comments`
// }

// console.log(userInfo(userProfile)) // User Mikhail has 42 comments

/*Диструктуризация объектов*/
// const user = {
//     id: 1,
//     name: 'Alice',
//     age: 30,
//     email:'alice@example.com',
//     address: {
//         street: '123 Main St',
//         city: 'Wonderland',
//         zip: '12345'
//     }
// };

// const {name, age, email} = user;
// const {address: {street, city}} = user;
// const {name: userName, age: userAge} = user;

// console.log(name, age, email);
// console.log(street, city);
// console.log(userName, userAge);

/*Диструктуризация массивов*/

// const numbers = [10, 20, 30, 40, 50];

// const [first, second] = numbers;
// const[, , third, fourth] = numbers;
// const [head, ...tail] = numbers;

// console.log(first, second);
// console.log(third, fourth);
// console.log(head, tail);

/*Диструктуризация функций*/

// const book = {
//     title: '1984',
//     author: 'George Orwell',
//     year: 1949,
//     genre: 'Dystopian'
// };

// const getBookInfo = ({title, author}) => {
//         return `The book '${title}' was written by ${author}`;
//     };

// const getDetailedBookInfo = ({title, author, year = 'Unknown'}) => {
//         return `The book '${title}' was written by ${author} in ${year}.`;
//     };

// console.log(getBookInfo(book));
// console.log(getDetailedBookInfo(book));

/*Смешанные примеры*/

// const users = [
//     {id: 1, name: 'Alice', age: 30},
//     {id: 2, name: 'Bob', age: 25},
//     {id: 3, name: 'Charlie', age: 35}
// ];

// const [first, second] = users;

// const getUsersInfo = (users) => {
//     users.forEach(({name, age}) => {
//     console.log(`User '${name}' is '${age}' years old.`);
//     });
// };

// console.log(first);
// console.log(second);

// getUsersInfo(users);

// let val = 10;

// if (val > 5) {
//     val += 20
// };

// console.log(val); // 30

// const person = {
//     age: 20
// };

// */Пример if с оператором отрицания*/
// if (!person.name) {
//     console.log('Имя не указано')
// }; // Другие действия в случае, если свойства "name" у объекта "person" нету


// /* ИНСТРУКЦИЯ IF ELSE*/

// let val = 10;

// if (val < 5) { // Это условие ложно
//     val += 20;
// } else {       // Выполниться этот блок
//     val -= 20
// };

// console.log(val); // -10

// /*ИНСТРУКЦИЯ IF ELSE IF*/

// let val = 10;

// if (val < 5) { // Это условие ложное
//     val += 20
// } else if (val > 20) { // Это условие ложное
//     val -= 20
// } else {              // Это условие выполняется
//     val += 30
// }

// console.log(val);

// const age = 10

// if (age > 18) {
//     console.log('Is adult')   // Условие правдивое - выполняется этот блок
// } else if (age >= 12) {        // Условие ложное
//     console.log('Is teenager')
// } else {                      // Условие ложное
//     console.log('Is child')
// }

// const age = 5

// if (age >= 18) {
//     console.log('Is adult')   // Условие правдивое - выполняется этот блок
// } 

// if (age >= 12 && age < 18) {        // Условие ложное
//     console.log('Is teenager')
// } 

// if (age < 12) {                      // Условие ложное
//     console.log('Is child')
// }


// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of the arguments is not a number'
//     }

//     if (a <= 0 || b <= 0) {
//         return 'Numbers are not positive'
//     }
//     return a + b
// }
// console.log(sumPositiveNumbers('a', true))
// console.log(sumPositiveNumbers(-10, 5))
// console.log(sumPositiveNumbers(3,8))







