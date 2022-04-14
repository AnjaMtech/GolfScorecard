
let screenMode = "options";
let myCourses;
let currentCourse;
let game = {
  name: "",

}

function getApi() {
    return fetch('https://golf-courses-api.herokuapp.com/courses')
    .then(response => response.json())
    .then(data => {myCourses = data.courses; startMenu()})
}
getApi();


function startMenu(){
  printStartMenu();
  purr(myCourses, "o");
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
