function unite(arr1, arr2, arr3) {
  var newarr=[];//return arguments[2];
  
  var m=arguments.length;
  for(var i=1; i<m;i++) {
   arr1= arr1.concat(arguments[i]);
  }
  //return arr1;
  var n=arr1.length;
  for(var j=0;j<n;j++) {
    if(newarr.indexOf(arr1[j])===-1) {
      newarr.push(arr1[j]);
    }
  }
  return newarr;
}
unite([1, 3, 2], [1, [5]], [2, [4]]);
//unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//用arguments，连接所有数组；用一个新的空的数组，一个一个判断 新数组是否含有 这个数值没有就push；