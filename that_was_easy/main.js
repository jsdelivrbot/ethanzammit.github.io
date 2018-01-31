/*global $*/


$("#easy").on("click", sayThatWasEasy);
$("#drop").on("click", dropz);
$("#stop").on("click", stopDropp);


var thatWasEasy = new Audio("that_was_easy.mp3");
var dropp = new Audio("drop.mp3");



function dropz(){
    dropp.load();
    dropp.play();
    
}

function sayThatWasEasy(){
    
    thatWasEasy.load();
    thatWasEasy.play();
}geometric_pattern

function stopDropp(){
    thatWasEasy.pause();
    dropp.pause();
}

