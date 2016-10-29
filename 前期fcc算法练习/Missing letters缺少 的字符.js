function fearNotLetter(str) {
  //return "z".charCodeAt(0);
  var m=str.length;
  for(var i=1;i<m;i++) {
    if('a'===str[0]) 
  {
    if(String.fromCharCode(97+i)!==str[i]) {
     return String.fromCharCode(97+i);
  }
      }
    else {
    return undefined;}
  }
  //先确定 传入字符的第一个字母是否为a ，然后通过fromCharCode （a++）对比str[i] 是否一致 不一定就返回 此时的fromCharCode （a++）
}
//return m="a".charCodeAt(0);
fearNotLetter("abce");
