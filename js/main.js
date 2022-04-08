
let screenMode = "options";
let myCourses;

function log(input){
  console.log("---")
  console.log(input)
}

function print(){
  if(screenMode == "options"){
    log("my courses is")
    log(myCourses);
    log('screenMode is options')
    $("#options-container").empty();
    for(let i=0; i<myCourses.length; i++){
      $("#options-container").append(
        `<div class="img-box" onclick="golfCourse('${myCourses[i].name}')">
          <img src="${myCourses[i].image}" alt="${myCourses[i].name}">
          <div class="img-overlay"><span>${myCourses[i].name}</span></div>
        </div>`
      );
    }
  }
}

function getApi() {
    return fetch('https://golf-courses-api.herokuapp.com/courses')
    .then(response => response.json())
    .then(data => {myCourses = data.courses; print()})
}
getApi();


function golfCourse(input){
  log(input);
  screenMode="scorecard";
  print();
}


window.onload = function(){
  log("Window has loaded")
  log(myCourses);
  // print();
  document.body.onkeypress = function(e){
    if(e.keyCode === 32){
      log(myCourses[0].name);
      // print();
    }
  }
}
