function printTable(players, holes){
  $("#options-container").empty();
  $("#options-container").append(
    `<div class="col-lg-12" id="scorecard">
      <div class="table-responsive">
        <table class="table table-bordered">
        </table>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered" id="scorecard-table">
          <tr id="holes">
            <th>Holes</th>
          </tr>
          <tr>
            <th>Yardage</th>
            <td>1</td>
          </tr>
          <tr id="pars">
            <th>Par</th>
            <td>1</td>
          </tr>
          <tr>
            <th>Handicap</th>
            <td>1</td>
          </tr>
        </table>
      </div>
    </div>`
  );

  for(let i=0; i<game.numOfHoles; i++){
    $("#holes").append(`<td>${i+1}</td>`)
  }
  for(let i=0; i<game.teeBoxes.length; i++){
    // $("#pars").append(`<td>${teeBoxes[i].par}</td>`)
    purr(game.teeBoxes[i].par, "o");
  }
  for(let i=0; i<players.length; i++){
    $("#scorecard-table").append(
      `<tr>
        <td class="table-left">${players[i]}</td>
        <td>1</td>
      </tr>`
    )
  }

}

function printStartMenu(){
  $("#options-container").empty();

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
    printTable(["James", "Daniel"]);
  });
}
