let count = 0;
let colors= ["Orchid", "Coral", "HotPink", "Plum"];
$("#needy-button").click( function(){

   let reminder= count % colors.length;

$("#needy-button").html( "Clicks " + count + " Color: " + colors[reminder] );
count=count+1;

$("body").css ("background-color", colors[reminder]);
  
      
   
});

// when it is clicked
// add one to the total number on our button
// show total number
// show "clicked total numnber times"

// a top limit