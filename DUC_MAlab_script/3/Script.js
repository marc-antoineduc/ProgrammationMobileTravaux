// JavaScript source code
var x =Math.floor( (Math.random()*20) +1);
test();
function test()
{ var verif = false;
var y = prompt("devine le chiffre", "1");

    do{
    if (y == x)
    {
        document.write("bravo ! " + "</br>");
        verif = true;
    } else {
        
        if (y < x)
        {
            document.write("c'est pas ca, trop bas..." + "</br>");
        } else {
            document.write(" trop haut..." + "</br>")
        }
        y =   prompt("essaye encore...","1")
    }
    

    }while (verif === false)
 
}