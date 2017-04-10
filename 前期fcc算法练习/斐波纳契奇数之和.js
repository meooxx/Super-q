function sumFibs(num) {
  var arr=[1,1];//[1,1,2,3,5,8,13,21]
  var total=0;
 for(var i=0;arr[i+1]<=num;i++) {
   
   arr.push(arr[i]+arr[i+1]);//return arr;
   if(arr[i+1]%2!==0 && arr[i]<=num) {
     total+=arr[i+1];
     
   }
 
 }
  //return arr;
  

  return total+1;
}
//先for创建这个数组，然后对应数组 符合奇数且小于传入num+入total
sumFibs(75025);
