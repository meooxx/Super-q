function binaryAgent(str) {
  var string='',arr=[];
  arr=str.split(' ');//return arr;
  function charB(charB) {
    var n=charB.length;
    var total=0;
     for(var i=n-2;i>=0;i--) {
            var num=0;
          if(charB[i]==1) {
             num=2;
           for(var j=0;j<n-2-i;j++) {
             num=num*2;
            }
         }  
        total+=num;
      
      }
     if(charB[8-1]==1)   { total+=1;}
    return total;
   
    
    
  }
  for(var i=0;i<arr.length;i++) {
    
    string+=String.fromCharCode(charB(arr[i]));
  }
    
      
    return string;
  
  
 // return string;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//binaryAgent('01000001');
//将传入的字符串用空格分割 变成数组再遍历数组将二进制转换成十进制

//二进制转换成10进制 的方法更简便的 方法创建一个数组
//【128,64,32,16,8,4,2,1】 循环判断 arr[i]每位值如果为1 找到对应位的值用一个变量+储存起来）
//然后传入 fromCharCode（）；
//比较笨的方法就是 利用算法转换二进制 找出哪一位为1的值就乘以2多少次 