function drop(arr, func) {
  // Drop them elements.
  var n=arr.length;
  //return  !func(arr.shift);
for (var i=0;i<n;i++) {
  if(func(arr[i])) {
    return arr.slice(i);
  }
   
  }
  
 return  [];
     
}

drop([1, 2, 3], function(n) {return n < 3; });
drop([0, 1, 0, 1], function(n) {return n === 1;}) ;
//drop([1, 2, 3, 4], function(n) {return n >= 3;});
//drop([1, 2, 3, 4], function(n) {return n > 5;});
//drop([1, 2, 3, 7, 4], function(n) {return n > 3;});
//没什么讲的 很简单