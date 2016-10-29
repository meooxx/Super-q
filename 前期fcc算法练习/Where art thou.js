function where(collection, source) {
  var arr=[];
   var sourcekey= Object.keys(source); 
  //主要 source的keys是否被collection全部的keys全部包括，需要遍历source 而且collection 全部有；
  
 for (var i=0;i<collection.length;i++) {
   for(var j=0;j<sourcekey.length;j++){
 if(collection[i].hasOwnProperty(sourcekey[j]) && j===sourcekey.length-1 ) {
       if(collection[i][sourcekey[j]] ===  source[sourcekey[j]]) {
            arr.push(collection[i]); 
       }
          
        
         //return arr;
  }
  }
 
 }
  
  /*  for(var k=0;k<collection;k++) {
     if(arr.indexOf(k)===-1) {
       collection[k]='';
     }
      
   }*/

  
  
  
  
return arr;
}
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) ;

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) ;

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) ;
