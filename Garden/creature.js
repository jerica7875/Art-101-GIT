// when the button is clicked (event)

$(" #creature-form").click(
function (){
// our action when the button is clicked

let crName = $("#crName").val();

if (crName=="" || (crName.lenth >12)) {
//do nothin

}
else {

    $("#creature-list").append(crName + ", ");

}

// have a variable for storing names 


}



)
// text moves from the box to the creature list