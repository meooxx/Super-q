function smallestCommons(arr) {
  var newarr=[];
  function a (a,b) {
    return a-b;
  }        
  arr.sort(a);

for(var i=arr[0];i<=arr[1];i++ ) {
  newarr.push(i);
}
function gys(a,b) {
var t=a%b;
 while(t) {
    
    a=b;
    b=t;
    t=a%b;
  }
  return b;}
return  newarr.reduce(function(a,b){
   return (a*b)/gys(a,b);
 });
  
  // reduce俩个俩个 最小公约数的算法 c=a%b===0 则b是最大公约数，否则 a=b,b=c a%b  然后最小公倍数就是 俩个俩个相乘除最大公约  
}
smallestCommons([1,5]);
