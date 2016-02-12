// JavaScript source code
var x = document.getElementById('x');
var y = document.getElementById('y');
document.addEventListener('mousemove', function (e)
{
    x.innerHTML = "Position de la souris en X :"+ e.clientX + "px"
}
, false)
document.addEventListener('mousemove', function (e) {
    y.innerHTML = "Position de la souris en Y :" + e.clientY + "px"
}
, false)