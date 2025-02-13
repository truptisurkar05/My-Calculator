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
function myTheme(no)
{   
    var body = document.getElementById("body1");
    if(no == '1')
    {        
        body.style.backgroundImage = 'url(image2.jpg)';       
    }          
    else if(no == '2')
    {        
        body.style.backgroundImage = 'url(imagenature.jpg)';        
    }
    else if(no == '3')
    {        
        body.style.backgroundImage = 'url(image3.jpg)';        
    }
    else if(no == '4')
    {        
        body.style.backgroundImage = 'url(image5.jpg)';        
    }
       
}