var num1=2
var llimit=4
var ulimit=70
for(let i=1;i<ulimit;i++){
    powersum= i**num1
    if(powersum>= llimit & powersum<=ulimit){
        console.log(i);
        continue;
    }
}