// declaring an array with name myCommutes
let myCommutes = [ "metro bus", "ucsc loop bus", "friend's car", "walking"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "loop bus",
    route: "westentrance",
    print: "jellyfish",
    hasMiddleDoor: true,
    drivers: ["Middle-Aged Women", "Filipina Bus driver", "Bus Driver who plays maracas"]
}

let megaSentence; 

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[2] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);

;