// const var_one=require("./developer1");
// console.log(var_one);

// const fun_one=require("./developer1");
// let res=fun_one();
// console.log(res);

const obj3=require("./developer1");
const {key1,key2}=obj3;
let {sub_one,sub_two,sub_three}=key1;
let {sub_one:x}=key2;
console.log(sub_one,sub_two,sub_three);
console.log(x);

