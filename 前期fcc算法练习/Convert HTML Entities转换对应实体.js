function convert(str) {
  // &colon;&rpar;
  var newarr=[];
  var re=/(&)|(<)|(>)|(")|(')/gi;
  function change(match,p1,p2,p3,p4,p5) {
    /*switch(a) {
    case '&':return '&amp;';
    case "<":return '&lt;'; 
    case '>':return '&gt;';
    case '"':return '&quot;';
    case "'":return '&apos;';
  }*/
    if(p1) {
     return '&amp;';
    }
    if(p2) {
     return '&lt;'; 
    }
    if(p3) {
     return '&gt;';
    }
    if(p4) {
     return '&quot;';
    }
    if(p5) {
     return '&apos;';
    }
    
  }
 
  return str.replace(re,change);
   
  
}

convert("Dolce & Gabbana");
convert('Stuff in "quotation marks"');
//正则表达式的最新理解 （）|（）第一个括号可以用p1表示第一个括号 匹配到的值 p2第二个匹配到的值；replace不改变原来的str；