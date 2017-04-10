function myReplace(str, before, after) {
    var arr= str.split(' ');//return arr;
        if(before.charAt(0)===before[0].toUpperCase()) {
          after=after[0].toUpperCase()+after.slice(1);
         
        }
        
          
           str=str.replace(before,after);
          
          //charAt();用的是括号；MD记住蠢货；replace可以替换第一个匹配的字符不需要正则表达式也           //可以 ，也要记住。真是粗心粗心！教训啊 基础太薄弱了！！！
  
      //arr[arr.indexOf(before)]="John";return arr.join(' ');
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("His name is Tom", "Tom", "john");