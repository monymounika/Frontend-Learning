function register(){
    let x=document.forms["regForm"]["fname"].value;
    let arr1=[];
    if(/^$/.test(x)){
        arr1.push("first name can't left blank");
    }else if(!/^[A-Za-z0-9$_]{4,8}$/.test(x)){
        arr1.push("must follow rules & regulations");
    }
    document.getElementById("fname_errors").innerHTML=arr1.join(",");

    let y=document.forms["regForm"]["lname"].value;
    let arr2=[];
    if(/^$/.test(y)){
        arr2.push("last name can't left blank");
    }else if(!/^[A-Za-z0-9$_]{4,8}$/.test(y)){
        arr2.push("must follow rules & regulations");
    }
    document.getElementById("lname_errors").innerHTML=arr2.join(",");

    let upwd=document.forms["regForm"]["upwd"].value;
    let arr3=[];
    if(/^$/.test(upwd)){
        arr3.push("password can't left blank");
    }else if(!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,16}/.test(upwd)){
        arr3.push("password must follow rules & regulations");
    }
    document.getElementById("upwd_errors").innerHTML=arr3.join(",");

    let e=document.forms["regForm"]["email"].value;
    let arr4=[];
    if(/^$/.test(e)){
        arr4.push("email can't left blank");
    }else if(!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(e)){
        arr4.push("email must follow rules & regulations");
    }
    document.getElementById("email_errors").innerHTML=arr4.join(",");

    let m=document.forms["regForm"]["mobile"].value;
    let arr5=[];
    if(/^$/.test(m)){
        arr5.push("mobile number can't left blank");
    }else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(m)){
        arr5.push("email must follow rules & regulations");
    }
    document.getElementById("mobile_errors").innerHTML=arr5.join(",");

    let cupwd=document.forms["regForm"]["cupwd"].value;
    let arr6=[];
    if(/^$/.test(cupwd)){
        arr6.push("confirm password can't left blank");
    }else if(upwd!=cupwd){
        arr6.push("confirm password  & password should be same");
    }
    document.getElementById("cupwd_errors").innerHTML=arr6.join(",");

    document.getElementById("male").checked || document.getElementById("female").checked ? document.getElementById("gender_errors").innerHTML="":document.getElementById("gender_errors").innerHTML="select gender";

    document.getElementById("c").checked || document.getElementById("cpp").checked  || document.getElementById("java").checked || document.getElementById("dotnet").checked ? document.getElementById("languages_errors").innerHTML="":document.getElementById("languages_errors").innerHTML="select at least one language";

    document.getElementById("country").value==""? document.getElementById("country_error").innerHTML="select country":document.getElementById("country_error").innerHTML="";

    return false;
}