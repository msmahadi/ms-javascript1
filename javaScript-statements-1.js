
/*
* dsfdsafdsa f i want to comment you
! warning:  dsi want to comment you
? afsladk
todo:  khfladsjfljsd
* ?@ param myParam:  dfkjasl;dfjas
*/


// alert('Hello world!');
// document.querySelector('#text-h2-id').innerHTML = 'Hello Mahadi';
let textH2 = document.querySelector('#text-h2-id');
let sum = 4 + 10;
console.log(`Hello is 1st: ${sum}`);
textH2.innerHTML = `Hello Brother: ${sum}`;
console.log('Hello is 2nd: ' + sum);
console.log(`hello it is ${sum}`);


const c = 45;
{
    console.log(c);

    const d = 23;
    console.log(d);
}

const person = {
    firstName: 'Mahadi',
    lastName: 'Hasan',
    age: 21,
}
person.country = 'Bangladesgh',
    person.age = 18

console.log(person);


let personAge = 19;
function personAgeFun(persAge) {

    if (persAge > 17) {
        console.log(`Age: ${persAge} You are adult`);
        textH2.innerHTML = ` Age is: ${persAge}. You are adult.`
    }
    else {
        console.log(`Age: ${persAge} You are too younger`);
        textH2.innerHTML = ` Age is: ${persAge}. You are too younger.`
    }
}
personAgeFun(21);
/*
! Arithmatic operatior
45
let a = prompt('Enter first number:');
let num1 = parseInt(a);

let b = prompt('Enter 2nd number: ');
let num2 = parseInt(b);

let totalNum = num1 + num2;

if (num1 % 2 === 0) {

    document.write(`${num1} is even number. Tomar result: ${totalNum}`);
}
else {
    document.write(`${num1} is odd number. Tomar result: ${totalNum} </br> </br>`);
}


document.write(`${num1} is even number. Tomar result: ${totalNum}`);
console.log(`Toar result: ${totalNum}`);


*/
// let test1 = prompt('Number:');
// test1 = test1 + 1;
// test1++;
// console.log(test1);

// ! Array start forEach function start
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

let fruits = ["Mango", "Bannana", "Kola", "Apple", "Lichu", 'Peyara'];

let fl = fruits.length;
fruits.forEach(function (fruit) {
    document.write(`${fruit}, <br> hello `);
    console.log(` ${fruit}, `);

});
// console.log(fl);


// ! Object
let studentObj = {
    name1: "Mahadi Hasan",
    age1: 21,
    gender: 'Male', department: 'Economics'
};


Object.keys(studentObj).forEach(function (key) {
    document.write('<br>' + key + ' : ' + studentObj[key]);
})
console.log(studentObj);
// document.write('<br> Name: ' + studentObj);


// ! Funcion start

// function sayHello(name) {
//     return (`<br> <br> Hello ${name} !`);
// }
// let message = sayHello(prompt('Type your name here: '));
// document.write(message);
// // console.log(typeof sayHello());

function sayHello2(name, age, dateOfBirth = 2003) {
    console.log(`Hello ${name}. I'm ${age} years old. Date of Birth is: ${dateOfBirth}`);

    document.write(`<br> Hello ${name}. I'm ${age} years old. Date of Birth is: ${dateOfBirth}`);
}
sayHello2('Mahadi Hasan', 21, 2002);
sayHello2('MS Mahadi', 19);

// ! Button function event listener start

let subscribeBtn = document.querySelector('#subscribe-btn');
let textH2Subscribe = document.querySelector('#textH2Subscribe');

//? function start
function isSubscribed() {
    console.log('Subscribed channel');
    textH2Subscribe.innerHTML = ('Subscribed channel')

}

subscribeBtn.addEventListener('click', isSubscribed);




// ! Self Invoked function start

(function (message) {
    console.log('Hello I am ' + message);
})("Webflow Developer");



// ! Function expression with variable

let maths = function (x, y) {
    return x * y;
}
console.log(maths(4, 6));
console.log(maths(2, 3));

// ! Anonymous ForEach Function start
// let numbersArray = [1, 2, 3, 4];
// sqNumbers = numbersArray.forEach(function (numberArray) {
//     let result = numberArray * numberArray;
//     console.log('<br> ForEach ' + result);

// });

// ! Anonymous Map Function start
// let numbersArray = [1, 2, 3, 4];

// numbersArray.map(function (numberArray) {
//     let sqNumbersR = numberArray * numberArray;
//     console.log('Result ' + sqNumbersR);

// });


// ! Anonymous Map Arrow Function start
let numbersArray = [1, 2, 3, 4];

numbersArray.forEach((numberA) => {
    console.log('<br> ' + numberA * numberA);

})

numbersArray.forEach((mapA) => {
    document.write(`<br> ${mapA * mapA}`);
});

// ! Date object
let timeHours = document.querySelector('#timeHours');
let timeMin = document.querySelector('#timeMin');
let timeSec = document.querySelector('#timeSec');

let upDateTime = function () {

    let myTime = new Date();
    // console.log(myTime);

    // ? Get hours, minutes, and seconds
    let hours = (myTime.getHours());
    let minutes = (myTime.getMinutes());
    let seconds = (myTime.getSeconds());
    // ? Determine AM or PM
    let ampm = (hours >= 12) ? 'PM' : 'AM';

    // ? Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
    // console.log(hours);

    // ? Add leading zeros to minutes and seconds if they are less than 10

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    timeHours.innerText = (hours + ' Hours :');
    timeMin.innerText = (minutes + ' Min :');
    timeSec.innerText = (seconds + ' Sec');


}
upDateTime();

// time auto update
setInterval(upDateTime, 1000);