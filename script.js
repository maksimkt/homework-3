// let summary = 0;
// for (let i = 0; i <= 100; i++) {
//     summary += i;
//     console.log(summary);
// }



// let nums = [1, 2, 3, 4, 5,];
// let i;
// for ( i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }


// let nums = [-1, 22, 3, 44, 5];
// let max = Math.max(...nums);
// console.log(max);



// let nums = [],zeroNum = 0, positiveNum = 0, negativeNum = 0;
// for (let l = 0; l < 8; l++) {
//     nums[l] = +prompt('Please, write number dosn`t matter (+/-/0).');
//     if (nums[l] === 0) {
//         zeroNum++;
//     }
//     if (nums[l] > 0) {
//         positiveNum++;
//     }
//     if (nums[l] < 0) {
//         negativeNum++;
//     }
// }
// console.log(`Users numbers: ${nums}`);
// console.log(`You write 0 ${zeroNum} times, positive numbers ${positiveNum} times, negative numbers ${negativeNum} times.`);



// const j = 8;
// let result;
// for ( i = 1; i <= 9; i++) {
//     result = i * j;
//     console.log(`  ${j} * ${i} = ${result} `);
// }



// let nums = [2, 5, 9, 15, 0, 4];

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 3) continue;
//     else if (nums[i] > 10) continue;
//     alert(nums[i]);
// }

let firstNum;
let sign;
let secondNum;
let calculate;
let repeat;
do {
    firstNum =+prompt('Please, write the first number.'),
    sign =prompt('Please, write sign you want to use ("+","-","*","/").'),
    secondNum =+prompt('Please, write the second number.');
    switch (sign) {
        case "":
        break;
        case "+":
            calculate = firstNum + secondNum;
        break;
        case "-":
            calculate = firstNum - secondNum;
        break;
        case "*":
            calculate = firstNum * secondNum;
        break;
        case "/":
            calculate = firstNum / secondNum;
        break;
        default:
            alert( 'You don`t write any of thih sings ("+","-","*","/"), please try again with theme.' );
            sign = '?';
    }
    repeat = confirm(`${firstNum} ${sign} ${secondNum} = ${calculate}   Do you want to use calculator again?`);
} while (repeat);