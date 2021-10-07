
var istrue = true;
console.log(typeof istrue)

/**
 * 
 * @param {boolea} a  第一个操作数
 * @param {number} b  第二个操作数
 */
function add(a,b){

}

add(100,000)


// console.log(3-5>=1|| 4+2>=2)

var x = 8;
do{
    console.log(x++);
}while(x<=10)

for(let i =0;i<=10;i++){
    if(i===7){
        break;
    }
    console.log(i)
}

function wether(name="dean" ,wether){
    console.log("你好，"+name+","+"今天天气"+wether)
}

wether(undefined,"qing")

//递归
function sum(n){
    if(n===1){
        return 1;
        console.log(n)

    }
    return n+ sum(n-1)
    
}

sum(10)

//arguments 【参数】
function ax(){
    console.log(arguments[0]);
}
ax(10,20);

console.clear();

var uu=10;
if(uu>8){
    var kk=20;
}

console.log(kk)


console.clear();

//箭头函数
const oop=()=>{
    console.log("whello")
}

oop()

const increament=x=>x+1;
console.log(increament(7));