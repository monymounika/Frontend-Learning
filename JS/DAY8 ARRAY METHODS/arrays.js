//destructuring
// let arr1=[10,20,30,40,50];
// let [a,b,c,d,e]=arr1;
// document.write(a,b,c,d,e);

// let arr1=[`reactjs`,`nodejs`,`mongodb`,`casandradb`,`mernstack`];
// let [a,b,c,d,e]=arr1;
// document.write(a,`<br>`,b,`<br>`,c,`<br>`,d,`<br>`,e);

// let arr1=[10,20,30,40,50];
// let [x,y,...z]=arr1;//...-->spread operator
// let [a,...b]=z;
// let [x1,x2]=b;
// document.write(x,y,a,x1,x2);

// let arr1=[`reactjs`,`nodejs`,`mongodb`,`casandradb`,`mernstack`];
// let [x,y,...z]=arr1;//[10,20,[30,40,50]]
// let [a,...b]=z;//[30,[40,50]]
// let [x1,x2]=b;//[40,50]
// document.write(x,`<br>`,y,`<br>`,a,`<br>`,x1,`<br>`,x2);

//concatatination
// let arr1=[10,20];
// let arr2=[30,40];
// let arr3=[...arr1,...arr2];
// let [a,b,c,d]=arr3;
// document.write(a,b,c,d);//10203040

// let arr1=['reactjs'];
// let arr2=[`nodejs`];
// let arr3=[`mongodb`];
// let arr4=[`mern stack`];
// let arr5=[`excelr`];
// let arr6=[...arr1,...arr2,...arr3,...arr4,...arr5];
// let [a,b,c,d,e]=arr6;
// document.write(a,`<br>`,b,`<br>`,c,`<br>`,d,`<br>`,e);

//slice()--->extract the particular elements
// let arr1=[10,20,30,40,50,60,70,80,90,100];
// document.write(arr1.slice(0,3));//10,20,30--->0 is included and 3 will be excluded
// document.write(arr1.slice(7,9));
// document.write(arr1.slice(0,1));
// document.write(arr1.slice(9));

// let arr2=[100,200,300,400,500];
// document.write(arr2.slice(1,3),`<br>`);
// document.write(arr2.slice(0,1),`<br>`);
// document.write(arr2.slice(2,3));

// let arr2=[10,20,30,40,50,60];
// let x=arr2.slice(3);
// let y=arr2.slice(0,3);
// let z=[...x,...y];
// document.write(z);//40,50,60,10,20,30


// let arr2=[10,20,30,40,50,60,70,80,90,100];
// let x=arr2.slice(5);
// let y=arr2.slice(0,5);
// let z=[...x,...y];
// document.write(z);//60,70,80,90,100,10,20,30,40,50

//find()-->used to check/find element available or not
// let arr1=[10,20,30,40,50];
// document.write(arr1.find((element,index)=>{
//     return element==10;
// }));
// document.write(arr1.find((element,index)=>{
//     return element==100;
// }));


// let arr1=[100,200,300,400,500];
// document.write(arr1.find((element,index)=>{
//     return element==100;
// }));
// document.write(arr1.find((element,index)=>{
//     return element==2000;
// }));

//includes()-->it is also find the element the element but it is boolean when it is found it will give the true otherwise it will give false
// let arr1=[10,20,30,40,50];
// document.write(arr1.includes(10));
// document.write(arr1.includes(100));

// let arr1=[100,200,300,400,500];
// document.write(arr1.includes(100));
// document.write(arr1.includes(1000));

//some()-->atleast one element satisfies the conditions then it will return true otherwise false
// let arr1=[10,20,30,40,50];
// let res1=arr1.some((element,index)=>{
//     return element<=10;
// });
// document.write(res1);//true

// let res2=arr1.some((element,index)=>{
//     return element<10;
// });
// document.write(res2)//false



// let arr2=[100,200,300];
// let res1=arr2.some((element,index)=>{
//     return element<=500;
// })
// document.write(res1);
// let res2=arr2.some((element,index)=>{
//     return element<100;
// })
// document.write(res2);


//every()-->if all elements satisfies the condition then it will return true otherwise false
// let arr1=[10,20,30,40,50];
// let res1=arr1.every((element,index)=>{
//     return element<=50;
// })
// document.write(res1);//true
// let res2=arr1.every((element,index)=>{
//     return element<50;
// })
// document.write(res2);//false



// let arr1=[100,200,300,];
// let res1=arr1.every((element,index)=>{
//     return element<=500;//true
// })
// document.write(res1);
// let res2=arr1.every((element,index)=>{
//     return element<100;
// })
// document.write(res2);//false


//fill()--->it is used to replace the element or fill the element with required output
// let arr1=[10,20,30,40,50];
// let arr2=arr1.fill(100,0);
// document.write(arr2,`<br>`);//100,100,100,100,100
// let arr3=arr1.fill(200,1,2);
// document.write(arr3,`<br>`);//100,200,100,100,100---[1 is included 2 is excluded]
// let arr4=arr1.fill(300,2,3);
// document.write(arr4,`<br>`);//100,200,300,100,100
// let arr5=arr1.fill(400,3,4);
// document.write(arr5,`<br>`);//100,200,300,400,100
// let arr6=arr1.fill(500,4);
// document.write(arr6,`<br>`);//100,200,300,400,500


//sort()-->it is used to arrange the array elments either ascending order or decending order
// let arr1=[10,20,30,40,50];
// let arr2=arr1.sort((num1,num2)=>{
//     return num1-num2;
// });
// document.write(arr2);//10,20,30,40,50
// let arr3=arr1.sort((num1,num2)=>{
//     return num2-num1;
// });
// document.write(arr3);//10,20,30,40,50

// let arr1=[10,100,10000,1000,200,20,2000,2];
// let arr2=arr1.sort((num1,num2)=>{
//     return num1-num2;
// });
// document.write(arr2,`<br>`);//2,10,20,100,200,1000,2000,10000
// //find the 2nd min element 
// document.write(arr2[1],`<br>`);

// let arr3=arr1.sort((num1,num2)=>{
//     return num2-num1;
// });
// document.write(arr3,`<br>`);//10000,2000,1000,200,100,20,10,2
// //find the 2nd max element
// document.write(arr3[1])


//indexOf()-->it won't create indexes to repeated elements i.eremoving duplicates from array
// let arr1=[10,20,10,30,20];
// let arr2=arr1.filter((element,index)=>{
//     return arr1.indexOf(element)==index;
// });
// document.write(arr2);//10,20,30

// let arr1=[100,200,100,200];
// let arr2=arr1.filter((element,index)=>{
//     return arr1.indexOf(element)==index;
// });
// document.write(arr2);//100,200

//flat()-->it converts multidimensional array to single dimensional array
// let arr1=[1,[[[[[[2]]]]]],[[[[[[[3]]]]]]]];
// let arr2=arr1.flat(Infinity);
// document.write(arr2);//1,2,3

//flatMap-->combination of flat and map method
// let arr1=[1,2,3];
// let arr2=["one","two","three"];
// let arr3=arr1.flatMap((element,index)=>{
//     return [element,arr2[index]];
// });
// document.write(arr3);//1,one,2,two,3,three







