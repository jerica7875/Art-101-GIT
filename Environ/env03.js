


let count = 0;
let colors= ["Orchid", "Coral", "HotPink", "Plum", " Blue"];
$("button").click( function(){

   let reminder= count % colors.length;

$("#needy-button").html( "Clicks " + count + " Color: " + colors[reminder] );
count=count+1;

$("body").css ("background-color", colors[reminder]);
  
// declaring an array with nmy information
let myHobbies = [ "drawing", "ukelele", "hiking", "cooking"];

// what is your campaign
let ourCamapign = {
  position: "vice president",
    hourlywage: "$300",
    fallacy: "redherring",
    confidence: "80%",
}

let megaSentence; 

megaSentence = "<p>My two top favorite hobbies from the array are: " +myHobbies[0] + ", " +myHobbies[3] + "</p>";

megaSentence = megaSentence + "<p> Here is some information about my characteristics: type - " + ourCamapign.position + ", hourly wage: " + ourCamapign.hourlywage
$("#me").html(megaSentence);

;
});