// function getAvailableCourses() {
//  return fetch('https://golf-courses-api.herokuapp.com/courses/').then(
//    log();
//  );
// }
let myCourses;

function log(input){
  console.log("---")
  console.log(input)
}


function getApi() {
    return fetch('https://golf-courses-api.herokuapp.com/courses')
    .then(response => response.json())
    // .then(data => log(data.courses));
    .then(data => myCourses = data.courses);
}
getApi();


window.onload = function(){
  console.log("loaded")
  log(myCourses);

  document.body.onkeypress = function(e){
    if(e.keyCode === 32){
      log(myCourses);
    }
  }
}
