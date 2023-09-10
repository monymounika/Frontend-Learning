this.onmessage=function({data}){
    let res=data.num1*data.num2
    this.postMessage(res);
}