function pairwise(arr, arg) {
  var array=[];
   if(arr.length===0) return 0;
  for (var i=0;i<arr.length;i++) {
    for (var k=i+1;k<arr.length;k++)
      if(arr[i]+arr[k]===arg) {
        array.push(i,k);
        arr.splice(i,1,' ');
        arr.splice(k,1,' ');
        
      }
  }
  
  return array.reduce(function(a,b) {
    return a+b;
  });
  //很简单吧 可能做法不太好。就是判断相等 然后把这个数字存起来然后 splice数组，主要就是 数组长度不能改变 否则索引值就会改变
}
pairwise([1, 4, 2, 3, 0, 5], 7);