
let screenMode = "options";
let myCourses;
let currentCourse;
let game = {
  name: "",
  numOfHoles: 0,
}
let myData;
function getApi() {
    return fetch('https://golf-courses-api.herokuapp.com/courses')
    .then(response => response.json())
    .then(data => {myCourses = data.courses; startMenu()})
}
getApi();
function startMenu(){
  printStartMenu();
  getCourseInfo(myCourses[0].id);
}

function getCourseInfo(id){
  return fetch(`https://golf-courses-api.herokuapp.com/courses/${id}`)
  .then(response => response.json())
  .then(data => {myData = data.course; testFunc(data)})
}

function testFunc(data){
  game.course = data.data;
  game.numOfHoles = game.course.holes.length;
  game.teeBoxes = game.course.holes[0].teeBoxes;
  // purr(game.teeBoxes[0].par);
}



function golfCourse(input){
  screenMode = "scorecard";
  // printTable();
}


window.onload = function(){
  // print();
  document.body.onkeypress = function(e){
    if(e.keyCode === 32){
      // print();
    }
  }
}
