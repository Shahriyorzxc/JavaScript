// Primitive turlar(immutable)
// String
let str = "Hello, World!";
console.log(str); // "Hello, World!"

// Number:
let num = 42;
console.log(num); // 42

// BigInt:
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n

// Boolean:
let isTrue = true;
let isFalse = false;
console.log(isTrue); // true
console.log(isFalse); // false

// Undefined:
let notDefined;
console.log(notDefined); // undefined

// Null:
let emptyValue = null;
console.log(emptyValue); // null

// Symbol:
let sym = Symbol('description');
console.log(sym); // Symbol(description)

// 2. Reference turlar(mutable)
// Object
let obj = { name: "Alice", age: 25 };
console.log(obj); // { name: "Alice", age: 25 }
// -----------------------------------------------------------------
// Array:
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
// Function:
// -----------------------------------------------------------------
function greet() {
    console.log("Hello!");
}
greet(); // "Hello!"





//Immutable data typelardi ozgartirish mumkin yanf=gi xotira joy ochib ozgartirish mumkin
let str = "Hello, World!";
str = str.replace("World", "JavaScript");
console.log(str); // "Hello, JavaScript!"


let num = 42;
num = num + 10; // Yangi son yaratildi
console.log(num); // 52


let bigInt = 12345678901234567890n;
bigInt = bigInt + 1n; // Yangi BigInt yaratildi
console.log(bigInt); // 12345678901234567891n

let isTrue = true;
isTrue = false; // Yangi qiymat
console.log(isTrue); // false

let value = null;
value = 42; // Yangi qiymat
console.log(value); // 42

let sym1 = Symbol('first');
let sym2 = Symbol('first'); // Yangi symbol, bu o'zgarish
console.log(sym1 === sym2); // false
