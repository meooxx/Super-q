function translate(str) {
   var re=/[aoeiu]/gi;
   var string="aoeiu";
  // var arr=str.splite('');
  if(string.indexOf(str[0])!==-1) {
    return str+"way";
  }else {
    for(var i=1;i<str.length;i++) {
      if(string.indexOf(str[i])!==-1) {
        return str.substr(i)+str.substr(0,i)+"ay";
      }
    }
  }
   //第一步 判断一个字母是否是元音；如果不是则找到第一个元音的位置 
   //返回收个元音到最后一个字符的所有字符+第一个原因之前的字符+"ay";
   //涉及的用法Array.indexOf()；Array.push()；Array.join()；String.substr()；String.split()；
  
}
