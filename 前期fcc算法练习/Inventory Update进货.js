function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
var l1=arr1.length;
var l2=arr2.length;
var test=0,bl;
  for(var k=0 ;k<l2;k++) {
    
   
    for(var i=0;i<l1;i++) { 
      
      if(arr1[i][1]===(arr2[k][1])) {
        arr1[i][0]+=arr2[k][0];test=0;break;
      }else {
        test++;
        }
      }
      if(test ===l1 ) {
     arr1.push(arr2[k]);
    }

  }
     
    return arr1.sort(function (a,b) {
     if( a[1] <b[1]) {
       return -1;
     }if(a[1]>b[1]) {
       return 1;
     }
     
    });
}
//第二个数组遍历 当在第一个数组中找到与之相同的就更新数目 找完整个数组都没有 则 push
//排序  sort可对字符串排序，且以a[1]为排序的依据 (a,b)返回1 则是b放a前面 0 相对位置不变 -1放a放b后面
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);