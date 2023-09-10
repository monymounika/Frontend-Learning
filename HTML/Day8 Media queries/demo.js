window.onresize=my_func;/*when u resize the browser*/
window.onload=my_func;/*after living the  fingers in laptop (event or cursor)*/
function my_func(){
    document.getElementById("screen").innerHTML="screen width :"+ window.innerWidth;/*browser width*/
}