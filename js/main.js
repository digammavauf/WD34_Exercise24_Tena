let lights;

function startLights() {
    lights = setInterval(lightsOn, 200);
}

function stopLights() {
    clearInterval(lights);
}

function isOdd(number) {
    return number%2!=0;
}

function isEven(number) {
    return number%2==0;
}

function filter(numbers, filterFormula) {
    let result = [];
    for(let number of numbers) {
        if(filterFormula(number)) {
            result.push(number);
        }
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));

function sayGreeting(){
    console.log("Happy Valentine's Day!");
}

setTimeout(sayGreeting, 4000);

let text = document.querySelector("#sparkText");
let startButton = document.querySelector("#startLights");
let stopButton = document.querySelector("#stopLights");

function lightsOn() {
    let colors = ["red", "green", "blue"];
    let randomizer = Math.round(Math.random()*colors.length-1);
    text.style.color = colors[randomizer];
    let randomizer2 = randomizer+((randomizer<colors.length-1)?1:-(colors.length-1));
    text.style.backgroundColor = colors[randomizer2]
}

function lightsOff(intervalID) {
    clearInterval(intervalID);
    text.style.color = "black";
    text.style.backgroundColor = "white";
}

let intervalID;

startButton.addEventListener("click", function() {
    intervalID = setInterval(lightsOn, 200);
});

stopButton.addEventListener("click", function() {
    setTimeout(lightsOff, 100, intervalID);
});

let newPromise = new Promise(function(resolve, reject) {
    let grade = 75;
    if(grade >= 75) {
        resolve("Yey, you will find a 10-digit salary!");
    } else {
        reject("Hala, ulit ka sa ibang bootcamp!");
    }
});

function passed(message) {
    console.log(message);
}

function failed(message) {
    console.log(message);
}

newPromise.then(passed, failed);

newPromise.then(function(pass) {
    console.log(pass);
}).catch(function(fail){
    console.log(fail);
});

async function gradeCheck(grade) {
    if(grade >= 75) {
        return "Yay, you will graduate and earn a 10-digit salary!";
    } else {
        return "Hala, uulit ka sa bootcamp!"
    } 
}

gradeCheck(74).then(passed).catch(failed);

async function greetings() {
    let promise = new Promise(function(resolve){
        resolve("I love chicken adobo!");
    });
    //alert(await promise);
}

console.log(greetings());

function promiseCreator(x) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(x);
        }, 2000);
    });
}

async function promiseGetter() {
    let x = await promiseCreator(10);
    console.log(x);
}

promiseGetter();