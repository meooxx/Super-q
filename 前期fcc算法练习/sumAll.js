我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和function sumAll(arr) {
   arr.sort(function(a,b){
    return a-b;
  });
  var num=0;
 
  for(i=arr[0];i<=arr[1];i++) {
    num+=i;
  }
  
  return num;
}
	

sumAll([1, 4]);
sumAll([5, 10]);sumAll([10, 5]);

