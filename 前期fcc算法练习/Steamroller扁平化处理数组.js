function steamroller(arr) {
  // I'm a steamroller, baby
 var newarr=[];
 for(var i=0;i<arr.length;i++) {
   if(Array.isArray(arr[i])) {
        newarr=  newarr.concat(steamroller(arr[i]));
      }else {
        newarr.push(arr[i]);
      }
 }
      
  
  

  return newarr;
  
  
}
//先判断是否是数组 是用递归  newarr 连接 调用函数的返回数组 最后return newarr
//刚开始思路转换成str 然后正则匹配 可以  但是返回值是"1","2"...不是1,2...这种形式！
steamroller([1, [2], [3, [[4]]]]);
//steamroller([1, [], [3, [[4]]]]);