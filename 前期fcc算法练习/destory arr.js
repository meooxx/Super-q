function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
   // var b;
   
       function isTrue (s) {
         var b=Boolean(s);//判断是不是无用的值 Boolean 的B大写
         return b;
       }
      
       
    
     arr=arr.filter(isTrue);//注意fileter对这个数组每个元素使用 所调用的函数也就是isTrue 
       
    
  return arr;  
  
}

bouncer([7, "ate", "", false, 9]);
