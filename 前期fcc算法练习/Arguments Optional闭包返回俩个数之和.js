function add(x) {
  var ar0=arguments[0];
  var ar1=arguments[1];
  var n=arguments.length;
  if(n===1 && typeof ar0==="number") {
    return function(y) {
      if(typeof y==="number"){
      return x+y;}
    };
  }
  
  if(n===2) {
  if(typeof ar0=="number" &&typeof ar1==="number") {
    return ar0+ar1;
  }
  else {
    return undefined;
  }
  }
}

add(2,3);
add(2)([3]);
//主要就是巧妙运用了typeof返回的是传入字符的“number” "string"属性 来判断是否是数字
//第二点 isNaN和Number.isNaN（）不能判断 简直就是垃圾 第一个会强制转换为数字在判断第二个不会  但是还是没有卵用 判断【3】竟然认为它是数字
//对于这题还要判断y是否是数字；
