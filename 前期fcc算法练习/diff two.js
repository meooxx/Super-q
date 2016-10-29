function diff(arr1, arr2) {
      var oldArr = [];
      var newArr=[];
  // Same,arr1.slice(i,i+1) same; but different.
      oldArr=oldArr.concat(arr1,arr2);
      //return oldArr;
     for(var i=0;i<oldArr.length;i++ ) {
        if(arr1.indexOf(oldArr[i])===-1 || arr2.indexOf(oldArr[i])===-1) {//将俩个数组的元素concat后 找不在数组1 || 不在数组2的值push
          newArr.push(oldArr[i]);
        }
        
     }
   return newArr;
 
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
