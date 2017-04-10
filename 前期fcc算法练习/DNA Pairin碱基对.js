function pair(str) {
  var arr=str.split('');
  var arr1=[['G','C'],['C','G'],['A','T'],['T','A']];
  //return str;
  var newarr=[];
  
  for (var i=0;i<str.length;i++) {
    switch (str[i]) {
      case 'G':newarr.push(arr1[0]);break;
      case 'C':newarr.push(arr1[1]);break;
      case 'A':newarr.push(arr1[2]);break;
      case 'T':newarr.push(arr1[3]);break;
            
            }
    
  }
  return newarr;
}
//建立一个arr1数组 switch 一个个传入字符串；根据case字符串的值 使用对应表达式
pair("GCG");pair("A") ;
