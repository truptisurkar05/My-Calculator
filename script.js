var a = document.getElementById("txtdisplay")//global
function myClick(e)
{
    a.value = a.value + e.innerHTML;//local
}
function equal()
{
    a.value = eval(a.value);
}
function myclear()
{
    a.value ="";
}