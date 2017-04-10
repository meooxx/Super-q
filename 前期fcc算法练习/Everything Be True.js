function every(collection, pre) {
  // Is everyone being true?
  function isTrue(element,index,array) {
    
    return element.hasOwnProperty(pre) && element[pre];
  }
  
  return collection.every(isTrue);
}
//every返回的是 boolean值 传递的是三个参数 分别是element index array; 每个对象就是一个element
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
