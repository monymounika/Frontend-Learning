//arithmetic operator
let x=10;
let y=5;
document.write(x+y,"<br>");
document.write(x-y,"<br>");
document.write(x*y,"<br>");
document.write(x/y,"<br>");
document.write(x%y,"<br>");
document.write(x**y,"<br>");

//assignment operators
let num=5;
document.write(num+=3,"<br>");//8
document.write(num-=2,"<br>");//6
document.write(num*=2,"<br>");//12
document.write(num/=2,"<br>");//6
document.write(num%=2,"<br>");//0
document.write(num**=2,"<br>");//0

//comparsion operator
document.write(10==10,"<br>");//it compares left value with right value
document.write(10==="10","<br>");//it compares both left value with datatype to right value with datatype
document.write(10!=="10","<br>");

//logical operator
let flag=true;
let flag1=false;
let flag2=true;
document.write(flag&&flag1,"<br>");//false
document.write(flag&&flag2,"<br>");//true
document.write(flag||flag1,"<br>");//true
document.write(!flag,"<br>");//false

//unary operator
document.write(+"10"+ +"10","<br>");//20
document.write(-"10");//-10
let var1=10;
document.write(++var1,"<br>");//11
document.write(--var1,"<br>");//10
document.write(typeof var1);//number