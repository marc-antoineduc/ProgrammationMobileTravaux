// JavaScript source code
var X = 0;

    function btnclick()
    {
        X += 1;
        var message = "Vous avez cliqué sur le bouton " + X + " fois.";
        var text = document.getElementById("text").innerHTML = message;
    }