
let screenMode = "options";
let myCourses;
let currentCourse;

function print(type){
  $("#options-container").empty();
  if(type == "options"){

    for(let i=0; i<myCourses.length; i++){
      $("#options-container").append(
        `<div class="img-box" onclick="golfCourse('${myCourses[i].name}')">
          <img src="${myCourses[i].image}" alt="${myCourses[i].name}">
          <div class="img-overlay"><span>${myCourses[i].name}</span></div>
        </div>`
      );
    }
    $(".img-box").click(function(e){
      purr(this.children[0].alt, "o");
      print("table");
    });
  }
  if(type == "table"){
    $("#options-container").append(
      `<div class="col-lg-12" id="scorecard">
        <div class="table-responsive">
          <table class="table table-bordered">
          </table>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered">
            <tr>
              <th>Hole</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Yardage</th>
            </tr>
            <tr>
              <th>Par</th>
            </tr>
            <tr>
              <th>Handicap</th>
            </tr>
            <tr>
              <th>Luigi</th>
            </tr>
          </table>
        </div>
      </div>`
    )
  }
}

function getApi() {
    return fetch('https://golf-courses-api.herokuapp.com/courses')
    .then(response => response.json())
    .then(data => {myCourses = data.courses; print("options")})
}
getApi();
purr(myCourses)


function golfCourse(input){
  screenMode = "scorecard";
  print("table");
}


window.onload = function(){
  // print();
  document.body.onkeypress = function(e){
    if(e.keyCode === 32){
      // print();
    }
  }
}
