// let name = "Alice"; // String
// let age = 25; // Number
// let isStudent = true; // Boolean
//
// console.log(name, age, isStudent);


//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// function greet(name) {
//     return `Hello, ${name}!`;
// }
//
// console.log(greet('Sell'))
//
// let str = "JavaScript";
// str = 'TypeScript'; // Reassign str to a new string
// console.log(str);

// let lp = ['dota1', 'dota2'];
// lp[2] = 'dota3'
// console.log(lp)
//

// function lp(first, last) {
//     console.log('as', first + '' + last);
// }
//
// lp('Ozod', 'Bro'); // This should log "as OzodBro"
//
//
// let x = 1;
// console.log('1'=== 1);
// console.log('1'== 1);
//
// x = x + 1
// x += 1
// console.log(x)

// x = 5;
// console.log(x !== '5');
// x = 5;
// y = 10;
// console.log(x < y);
//
// console.log('2' === '12');
//
// let mijoz = "a'zo"
// let result = mijoz === "a'zo" ? "20%" : "5%"
// console.log("Mijoz uchun chegirma - " + result)
//
//
// let azo = true
// let result = azo === true ? '20%' : '5%'
//
// console.log('Sizning chegirmangiz: ', result)

//
// // let a = 5;
// // let b = 10;
// // console.log(a > 0 && b > 0); // true
// // console.log(a > 0 && b < 5); // false
// //
// // let a = 5;
// // let b = -10;
// // console.log(a > 0 || b > 0); // true
// // console.log(a < 0 || b < 0); // true
// // console.log(a < 0 || b > 0); // false
//
// let a = true;
// console.log(!a); // false
// console.log(!(a > 0)); // false


// console.log(true && true);

// let date = new Date();
// let hour = date.getHours();
// let min = date.getMinutes();
// console.log('Hour: ' + hour, ', Minute: ', min);
//
//
// let isOfficeopen = (hour >= 9 || min >= 0);
// let isOfficeclosed = !isOfficeopen;
// console.log('Is Office open: ' + isOfficeopen);
// console.log('Is Office closed: ' + isOfficeclosed);

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
//
// console.log(car.brand || 'Bmv'); // "Toyota"
//
// x = false && true || true
// console.log(x);
//
// x = false && (true || true)
// console.log(x);
//
// console.log(1 === 1); // true
// console.log(1 === '1'); // false
//
// console.log(1 == 1);       // true
// console.log(1 == '1');     // true (tipni konvertatsiya qiladi)
// console.log(true == 1);    // true (true ni 1 ga konvertatsiya qiladi)
// console.log(null == undefined); // true

let day = 2;

switch (day) {
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    default:
        console.log("Boshqa kun");
}


let fruit = "olma";

switch (fruit) {
    case "olma":
        console.log("Bu olma");
        break;
    case "banan":
        console.log("Bu banan");
        break;
    default:
        console.log("Boshqa meva");
}














// for (initialization; condition; increment) {
//     // Takrorlanadigan kod
// }


// for (let i = 0; i < 5; i++) {
//     console.log(i); // 0, 1, 2, 3, 4
// }

//-----------------------------------------------
// while (condition) {
//     // Takrorlanadigan kod
// }
//
//
// let i = 0;
//
// while (i < 5) {
//     console.log(i); // 0, 1, 2, 3, 4
//     i++; // `i` ni 1 ga oshiradi
// }



