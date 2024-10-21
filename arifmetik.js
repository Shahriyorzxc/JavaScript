// let a = 5;
// let b = 3;
// console.log(a + b); // 8
//
// console.log(a - b); // 2
//
// console.log(a * b); // 15
//
// console.log(a * b);
//
// console.log(a / b); // 1.6667
//
// console.log(a % b); // 2 (5 ni 3 ga bo'lganda 2 qoldiq qoladi)
//
// console.log(a ** 2); // 25 (5 ni 2 darajaga ko'taradi)
//
// a++;
// console.log(a); // 6
//
// a--;
// console.log(a); // 5

// ++a: O'zgaruvchining qiymatini oshiradi va yangi qiymatni darhol qaytaradi.
// a++: O'zgaruvchining hozirgi qiymatini qaytaradi va keyin oshiradi.


// let score = 85;
//
// if (score >= 90) {
//     console.log("A");
// } else if (score >= 80) {
//     console.log("B");
// } else {
//     console.log("C");
// }
//
//
// // For tsikli
// for (let i = 0; i < 5; i++) {
//     console.log(i); // 0, 1, 2, 3, 4
// }
//
// // While tsikli
// let j = 0;
// while (j < 5) {
//     console.log(j); // 0, 1, 2, 3, 4
//     j++;
// }

//
// try {
//     let result = riskyFunction();
// } catch (error) {
//     console.log("Xato:", error.message);
// }



// let a = 5;
// let b = 10;
// console.log(a > 0 && b > 0); // true
// console.log(a > 0 && b < 5); // false
//
// let a = 5;
// let b = -10;
// console.log(a > 0 || b > 0); // true
// console.log(a < 0 || b < 0); // true
// console.log(a < 0 || b > 0); // false

// let a = true;
// console.log(!a); // false
// console.log(!(a > 0)); // false
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

// console.log(true && true);

// let x = (2 + 3) * 4;
// console.log(x);
//


function findMaximum(numbers) {
    let maxNum = numbers[0];
    for (let num of numbers) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}

console.log(findMaximum([3, 5, 1, 8, 2]));

function findMinimum(numbers) {
    let minNum = numbers[0];
    for (let num of numbers) {
        if (num > minNum) {
            minNum = num;
        }
    }
    return minNum
}
console.log(findMinimum([3, 5, 1, 8, 2]));





