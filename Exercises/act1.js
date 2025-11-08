function checkMood(score) {
 
  }

  function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore);

    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );
  }

  $("#mood-button").click(function () {
    showMood();
        if(checkMood > 5) { color= "blue";}
        else if (checkMood < 5) {color= "purple";}
        else {color= "black";}

  });
