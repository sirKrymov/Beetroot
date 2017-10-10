// let name = "вася";

// console.log(name.charAt(0).toUpperCase() + name.slice(1));

// function min(a, b) {
//         if (a > b) {
//             console.log(b);
//         } else if (a == b) {
//             console.log('значения равны');
//         } else {
//             console.log(a);
//         }
//     }

//     min(2, 5);
//     min(3, -1);
//     min(1, 1);

// function loop() {
//     const BASIC_NUMBER = 100;
//     let customNumber = prompt(" введите число больше 100 ");

//     do {
//         customNumber = prompt(" введите число больше 100 ");
//     }
//     while (customNumber < BASIC_NUMBER);
// }

// loop();

let num1 = prompt("Input First Number!");
let num2 = prompt("Input Second Number!");
let simple = 0;
let ostatok;

console.log(`Num1: ${num1}, num2: ${num2}`);

if (num1 !== null || num2 !== null) {
    if (+num1 > num2) {
        console.log("number1 > number2")
    } else {
        for (let j = num1; j != num2; j++) {
            let i = 2;
            //console.log(`j ${i}`); 
            if (j == 1) {
                simple = 0;
            } else if (j == 2) {
                simple = 0;
            } else {
                while (i != (j - 1)) {
                    ostatok = j % i;
                    //console.log(`                    i ${i}`);
                    i++;
                    if (ostatok == 0) {
                        simple = 1;
                        break;
                    }
                }
            }
            simple == 0 ? console.log(`${j} - is SIMPLE`) : console.log(`${j} - NOT a simple`);
            simple = 0;
        }
    }
} else {
    console.log("Closed");
}