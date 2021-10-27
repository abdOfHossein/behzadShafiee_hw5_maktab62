


var tedad = Number(prompt("Enter The Number OF Car:"));
var star = '';
for (let i = 0; i < 300; i++) {
    star += ('*');
}

var starArr = star.split('');
console.log(starArr);
let done = true;
var carNumArr = [];
let carNameArr = [];
for (let i = 1; i <= tedad; i++) {
    let carName = prompt("Enter The Number OF Car:");
    carNameArr.push(carName);
    carNumArr.push(0);
}
console.log(carNumArr);
var tmp = [];
tmp = carNumArr;
console.log(tmp);
function ceckingIsEqualNum(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === randomNum) {
            array[i] = 0;
        }
        else if (i === j) {
            array[i] += randomNum;
        }

    }
    showingChange(starArr);
    return;
}



function showingChange(outputArray) {
    if (carNumArr[j] === 0) {
        outputArray.splice(randomNum + carNumArr[j], 1, carNameArr[j]);
        carNumArr = randomNum + carNumArr[j];
    }
    else if (carNumArr[j] > 0) {
        outputArray.splice(randomNum + carNumArr[j], 1, carNameArr[j]);
        carNumArr = randomNum + carNumArr[j];
    }
    console.log(outputArray);
    return;

}




while (done) {
    carNumArr = tmp;
    for (var j = 0; j < carNameArr.length; j++) {
        var randomNum = Math.floor(Math.random() * 11);
        console.log(carNumArr);
        carNumArr.unshift(randomNum);
        console.log(carNumArr);
        ceckingIsEqualNum(carNumArr);

    }
    if (carNumArr[j] > 300) {

        done = false;
        console.log(`Winner is : ${carNameArr[j]}`);
    }

}