function sumPrimes(num) {
  var total=0;
  var newarr=[];
  
 for(var i=2;i<=num;i++) {
   var flag=1;
   for(var k=2;k*k<=i;k++) {
    if(i%k===0) {
      flag=0;
      break;
    }
     
     }
   if(flag) {
       newarr.push(i);
       total+=i;
   }
 }
  num=total;
  return num;
}

sumPrimes(10);
//md卡死几次还是需要用 2循环到 根号n的方法 网页版会卡死  不知道在环境下 会不会？应该不会毕竟 环境下有整个cpu支撑