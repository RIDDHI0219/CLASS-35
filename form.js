class Form {
    constuctor(){

    }
    display(){
        var title = createElement("H2")
        title.html("car racing game");
title.position(450,200);
var button = createButton("play");
button.position(450,250);

var input = createInput("name");
input.position(470,230);

button.mousePressed(function(){
    input.hide();
    button.hide();
var name = input.value();
//*playerCount +=1
//*player.update (name);
//*player.updateCount(playerCount);
var greeting = createElement("H3")
greeting.html("hello"+name);
greeting.position(130,160);
})

    }
}