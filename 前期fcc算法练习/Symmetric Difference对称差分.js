function sym(args) {
  
  
  var arr1=[],newarr=[],arr2;
  var n=arguments.length;
  for(var i=0;i<arguments.length;i++) {
    arr1.push(arguments[i]);
  }

     var b= arr1.reduce(function(a,b) {
        var c=a;
         a=a.filter(function(element) {
          return b.indexOf(element)<0;});
        
       b= b.filter(function(element) {
          return c.indexOf(element)<0;});
      return a.concat(b);
      });  
   return b.filter(function (s,index) {
      return b.indexOf(s)===index;
    });
}

sym([1, 2, 3], [5, 2, 1, 4]); 
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
//sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) ;//[1, 4, 5].
//这个好麻烦 ，刚开始没读懂 题目要求 做了半天 还是错的第二次 忘了filter不改变原来的数组。
//方法就是先将arguments赋值给一个数组，然后reduce方法一个一个把 元素filter出来再concat；最后去掉重复的