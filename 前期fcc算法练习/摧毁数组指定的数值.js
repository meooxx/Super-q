function destroyer(arr) {
  
  
  var newarr=[];
  for (var i=1;i<arguments.length;i++) { 
          
       newarr.push(arguments[i]);
  }
  
 
 return arguments[0].filter( function isTrue (s) {
   if(newarr.indexOf(s) ===-1) {
     return true;
   }
    /*
    else {
     return true;
   }*/
  });
}
  

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
//arguments 是函数参数 在传入多个参数情况下使用。将除了数组的 参数 放到一个新的数组然后 filter 索引新数组为假的值！！ 