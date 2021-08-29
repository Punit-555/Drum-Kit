
 // detecting Button Press.

var numberofDrumsButtons = document.querySelectorAll(".drum").length;
for(var i =0 ; i< numberofDrumsButtons ; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function(){

 var buttonInnerHTML = this.innerHTML;
 makeSound (buttonInnerHTML);

});

}
                  // DETECTING KEYBOARD     
 
document.addEventListener("keypress" , function(event){
makeSound(event.key);
});





function makeSound(key)
{
    switch(key){
        case"w" : var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break ; 
        case"a" : var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break ; 
        case"s" : var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        case"d" : var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        case"j" : var audio = new Audio("sounds/tom-5.mp3");
        audio.play();
        case"k" : var audio = new Audio("sounds/snare.mp3");
        audio.play();
        case"l" : var audio = new Audio("sounds/crash.mp3");
        audio.play();
        default : 
       
    }
}



