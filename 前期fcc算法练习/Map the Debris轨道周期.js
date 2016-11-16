function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var array=[];

 // t=2p根号a*a*a/gm
  for (var i=0;i<arr.length;i++) {
  var a=arr[i].avgAlt+  earthRadius;
  var T;
  T=Math.round(2*Math.PI*Math.sqrt(a*a*a/GM));
  var obj=new Object();
  obj.name=arr[i].name;
  obj.orbitalPeriod=T;
  array.push(obj);
  }
  return array;
}
//这个不多说很简单 几个Math对象 的方法的应用.sqrt(),Math.PI,还有建立 对象的方法；
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
