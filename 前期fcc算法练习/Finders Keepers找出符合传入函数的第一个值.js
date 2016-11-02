function find(arr, func) {
  var num = 0;
 num= arr.filter(func);
  return num[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
//好简单这个 filter就行了
//注意返回的第一个值