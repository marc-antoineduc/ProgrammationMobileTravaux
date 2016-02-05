// JavaScript source code
var x = 0;
x =prompt("mettre le nombre","1")
table(x)
function table(x)
{
     var resultat
    for (var i = 0; i <= x; i++)
    {
    
        resultat = x * i;
        document.write(x + " X " +i+ " = " + resultat +"</br>");
        
    }

}