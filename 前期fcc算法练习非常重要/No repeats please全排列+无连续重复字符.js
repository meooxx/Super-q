function permAlone(str) {
  // var n=str.length;
 // var total=1,string='',arr=[];
/*function fac(n) {
  if(n===1) return 1;
    if(n>1) { 
      return n*fac(n-1);
    }    
  }
    
  */
  /*function swap(a,b) {
    var temp=arr[b];
        arr[b]=arr[a];
        arr[a]=temp;
  }
  arr=[1,2];
   swap(0,1);
  return arr;*/
  
  
  
  
  /* var arr = str.split('');
  var permutations = [];
  var tmp;

  // FUnction to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  //Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

    generate(arr.length);
  */
  
//正则（）\n即匹配第一个括号 几次重复  
//一以上是交换 递归 的方法不太懂md
  //下面是递归 插空的方法 看了太多了不多说了，还有md  re.test()坑死人啊mgb  bug 就是filter不能（aab,aab）这样只能匹配到第一个；单个匹配却能匹配到 草tmd
  function repeat (str) {
    var arr=[];//var test=0;
    var n=str.length;
    var frist =str[0];
    var rest=str.slice(1);
    if(n===1) {
      return [str];
    }
    else {
          rest=repeat(rest);//test++;
      for(var i=0;i<rest.length;i++) {
        for (var k=0;k<rest[i].length+1;k++) {
          var temp=rest[i].slice(0,k)+frist+rest[i].slice(k);
          arr.push(temp);//return arr;
        }
      }
        return arr;
    }
   
  
    // return repeat(str);
  }
  var a=repeat(str);
   var t=[];
  var re=/(.)\1+/gi;
  return a.filter(function(s) {
    return !s.match(re);
  }).length;

    //return repeat(str)
  /* return repeat(str).filter(function (element) {
    return !re.test(element);
  });*/

}

 permAlone('aab');
