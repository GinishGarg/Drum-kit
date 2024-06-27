for (var i=0; i<document.querySelectorAll(".drum").length;i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
        makesound(buttonInnerHtml)
    });
}

document.addEventListener("keydown",function(event){
    makesound(event.key)
});


function makesound(key){
    switch (key) {
        case "w":
            var buttonW= new Audio("sounds/tom-1.mp3");
            buttonW.play()
            
            break;
        case "a":
            var buttonA= new Audio("sounds/tom-2.mp3");
            buttonA.play()
            
            break;
        case "s":
            var buttonS= new Audio("sounds/tom-3.mp3");
            buttonS.play()
            
            break;
        case "d":
            var buttonD= new Audio("sounds/tom-4.mp3");
            buttonD.play()
            
            break;
        case "j":
            var buttonJ= new Audio("sounds/snare.mp3");
            buttonJ.play()
            
            break;
        case "k":
            var buttonK= new Audio("sounds/kick-bass.mp3");
            buttonK.play()
            
            break;
        case "l":
            var buttonL= new Audio("sounds/crash.mp3");
            buttonL.play()
            
            break;
    
        default:
            break;
    }   
}