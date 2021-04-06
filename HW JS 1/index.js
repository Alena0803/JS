// Задание 1
for (let i=1; i<=10; i++) {
    if (i % 3 == 0) {
        console.log('FizBuz')
    } else if (i % 2 ==0) {
        console.log('fiz')
    } else if (i % 2 !== 0) {
        console.log('Buz')
    }
}

// Задание 2
let inputNumber = prompt('Please enter an integer');
let total = 1;

for (i = 1; i <= inputNumber; ++i){
total = total * i;
}
console.log(inputNumber + '! = ' + total);

// Задание 3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const sheetsBox = consumptionPerWeek / sheetsInReamPaper * weeksAmount ;
console.log(sheetsBox)

// Задание 4
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;
const porch = roomNumber / (roomsOnFloor * floors);
const floor = roomNumber % (roomsOnFloor * floors) / roomsOnFloor;

// const porch = Math.ceil(roomNumber / (roomsOnFloor * floors));
// const floor = Math.ceil((roomNumber % (roomsOnFloor * floors)) / roomsOnFloor);
console.log( porch, floor)

// Задание 5

let x = 8;
for(let i = 1; i <= x; i++) {
    let pyr = '';
    for(let j = 1; j <= x + x - 1; j++) {
        if (j <= x - i || j >= x + i) {
            pyr += '-';
        } else {
            pyr += '#';
        }
        }
        console.log(pyr)
}