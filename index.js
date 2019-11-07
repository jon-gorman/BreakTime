//Program to randomly select times for employee lunches :)
//random change
//test 3

let names = ['one', 'two', 'three', 'four', ];
let schedule = {};
let myObj = JSON.stringify(schedule)
document.getElementById("list").innerHTML = myObj;
let inputNames = [];
let startTimes = [6, 9.5, 11.5];
let breakTimesFirst = [9.75, 10, 10.25, 10.5, 10.75, 11, 11.25];
let breakTimesSecond = [1.25, 1.5, 1.75, 2]

//Fisher Yates method
function makeRandomNames(names) {
  for (let i = names.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // random index from 0 to i
    // swap elements array[i] and array[j]
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [names[i], names[j]] = [names[j], names[i]]
  }
  console.log(names);
  names.forEach(function(key, i){
    schedule[key] = breakTimesFirst[i];
  });
  console.log(schedule);
}

makeRandomNames(names);
