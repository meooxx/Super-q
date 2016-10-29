 function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //var re=/(\s)|(_)/gi;
  var re=/(\s)|(_)/g;
  var reB=/(\B[A-Z])/g;//qu 
  //str.toLowerCase;
 function change(match,p1,p2){
    
    if(p1||p2) {
      return '-';
    } }
   function changee(match,p1) {
     if(p1) {
       return '-'+p1;
     }
   
  
 }
  //var s=String(str);
  str=str.replace(re,change);
  str=str.replace(reB,changee);
  return str.toLowerCase();
}
//和那个正则表达式一关一样 md 俩次匹配 第二次匹配掉——下划线cao 不知道哪里有更直接的方法！！！
spinalCase('This Is Spinal Tap');
//spinalCase("thisIsSpinalTap");
//spinalCase("The_Andy_Griffith_Show");