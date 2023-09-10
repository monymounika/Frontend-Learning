//length
// let arr1=[`react js`, `nodejs`,`mongodb`];
// document.write(arr1.length);

// let arr=[10,20,30,40,50];
// document.write(arr[0],arr[3],arr[100]);

// at method used to access both positive index and negative index
// let arr=[10,20,30,40,50];
// document.write(arr.at(0),arr.at(-5));
// document.write(arr.at(1),arr.at(-4));
// document.write(arr.at(2),arr.at(-3));
// document.write(arr.at(3),arr.at(-2));
// document.write(arr.at(4),arr.at(-1));


// let arr=[];
// arr[0]=100;
// arr[1]=20;
// document.write(arr.length);

// let arr1=[];
// arr1[100]=10;
// document.write(arr1.length);

//delete keyword -->it deletes the element but never deletes the index
// let arr=[10,20,30,40];
// delete arr[0];
// document.write(arr.length);

//map method-->it is used to manipulate each element in array
// let arr=[10,20,30,40,50];
// let new_arr=arr.map((element,index)=>{
//     return element*10;
// });
// document.write(new_arr);

// let arr=[1000,2000,3000,4000,5000];
// let new_arr=arr.map((element,index)=>{
//     return element/100;
// });
// document.write(new_arr);


//filter()---> it is used to apply the conditions in array
// let arr=[10,20,30,40,50];
// let new_arr=arr.filter((element,index)=>{
//     return element>=30;
// });
// document.write(new_arr);

// let arr=[1000,2000,3000,4000,5000];
// let new_arr=arr.filter((element,index)=>{
//     return element<=2000;
// });
// document.write(new_arr);

//reduce()-->it is used to find the sum of array elements
// let arr=[1,2,3,4,5];
// let new_arr=arr.reduce((firstElement,nextElement)=>{
//     return firstElement+nextElement;
// });
// document.write(new_arr);

// let arr=[10,20,30,40,50];
// let new_arr=arr.reduce((firstElement,nextElement)=>{
//     return firstElement+nextElement;
// });
// document.write(new_arr);

//reduceRight()-->it is used to do the summation/concatnation from right to left
// let arr=["fullstack","to","welcome"];
// let new_arr=arr.reduceRight((firstElement,nextElement)=>{
//     return firstElement+" "+nextElement;
// });
// document.write(new_arr);

// let arr=["excelr","at","mern stack","to","welcome"];
// let new_arr=arr.reduceRight((firstElement,nextElement)=>{
//     return firstElement+" "+nextElement;
// });
// document.write(new_arr);


//accumalator method
// let arr=[1,2,3,4,5];
// let res=arr.reduce((firstElement,nextElement)=>{
//     return firstElement+nextElement;
// },85);
// document.write(res);

// let arr=[100,200];
// let res=arr.reduce((firstElement,nextElement)=>{
//     return firstElement+nextElement;
// },700);
// document.write(res);

//push()-->add element at end of array
//pop()-->remove element at end of array
//unshift()-->add element at begining of array
//shift()-->remove element at begining of array
//slice()-->used to add/remove elements in array


// let arr=[20,30,40];
// arr.push(50);
// document.write(arr);
// arr.unshift(10);
// document.write(arr);
// arr.pop();
// document.write(arr);
// arr.shift();
// document.write(arr);

// let arr=["reactjs","nodejs","mongodb"];
// arr.push("casandradb",`<br>`);
// document.write(arr);
// arr.unshift("mern stack");
// document.write(arr);

//findIndex()-->used to find the index of array element


// let arr1=[10,20,30,40,50];
// let i1=arr1.findIndex((element,index)=>{
//     return element==10;
// });
// document.write(i1);//0

// let arr2=[10,20,30,40,50];
// let i2=arr2.findIndex((element,index)=>{
//     return element==20;
// });
// document.write(i2);//1

// let arr3=[10,20,30,40,50];
// let i3=arr3.findIndex((element,index)=>{
//     return element==30;
// });
// document.write(i3);//2

// let arr4=[10,20,30,40,50];
// let i4=arr4.findIndex((element,index)=>{
//     return element==40;
// });
// document.write(i4);//3

// let arr5=[10,20,30,40,50];
// let i5=arr5.findIndex((element,index)=>{
//     return element==50;
// });
// document.write(i5);//4

//splice()-->used to add/remove elements in array
// let arr=[10,20,30,40,50,60,70,80,90,100];
// arr.splice(4,3);
// document.write(arr,`<br>`);//10,20,30,40,80,90,100
// arr.splice(4,1);
// document.write(arr,`<br>`);//);//10,20,30,40,90,100
// arr.splice(0,1);
// document.write(arr,`<br>`);//20,30,40,90,100
// arr.splice(4,1);
// document.write(arr,`<br>`);//20,30,40,90

// arr.splice(3,0,50,60,70,80);//-->3 starting index number to number of elements to delete we add 50 60 70 80
// document.write(arr,`<br>`);//20,30,40,50,60,70,80,90
// arr.splice(0,1,10,20);
// document.write(arr,`<br>`);//10,20,30,40,50,60,70,80,90
// arr.splice(8,1,90,100);
// document.write(arr,`<br>`);//10,20,30,40,50,60,70,80,90,100

//combination of splice and findIndex

// let arr=[1,2,3,4,5];
// //delete element 3 with finfIndex() and splice()
// arr.splice(arr.findIndex((element,index)=>{
//     return element==3;
// }),1);
// document.write(arr);//[1,2,4,5]

//delete element 3 with finfIndex() and splice()
// let arr=[1,2,3,4,5];
// arr.splice(arr.findIndex((element,index)=>{
//     return element==1;
// }),1);
// document.write(arr);//[2,3,4,5]

// let arr=[1,2,3,4,5];
// arr.splice(arr.findIndex((element,index)=>{
//     return element==2;
// }),1);
// document.write(arr);//[1,3,4,5]

// let arr=[1,2,3,4,5];
// arr.splice(arr.findIndex((element,index)=>{
//     return element==4;
// }),1);
// document.write(arr);//[1,2,3,5]

// let arr=[1,2,3,4,5];
// arr.splice(arr.findIndex((element,index)=>{
//     return element==5;
// }),1);
// document.write(arr);//[1,2,3,4]

// //delete element  with finfIndex() and splice()


// let arr=[1,2,3,4,5];
// arr.splice(arr.findIndex((element,index)=>{
//     return element==3;
// }),1);
// document.write(arr,`<br>`);//[1,2,4,5]
// arr.splice(arr.findIndex((element,index)=>{
//     return element==4;
// }),1);
// document.write(arr,`<br>`);//[1,2,5]
// arr.splice(arr.findIndex((element,index)=>{
//     return element==2;
// }),1);
// document.write(arr);//1,5
