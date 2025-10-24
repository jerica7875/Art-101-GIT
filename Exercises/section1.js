let count = 0;
let colors= ["red", "orange", "yellow", "green"];
$("#magicbutton").click( function(){

   let reminder= count % colors.length;

$("#magicbutton").html( "Clicks "  + " Color: " + colors[reminder] );
count=count+1;

$("output").css ("background-color", colors[reminder]);
  
      
   
});