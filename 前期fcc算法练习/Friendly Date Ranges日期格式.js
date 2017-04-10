function makeFriendlyDates(arr) {
  var month=["","January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"];
 // var arr=[];
  var day=[""];
  var array=[];
  var ar1=arr[1].split('-'); 
  var ar0=arr[0].split('-'); 
 for(var i=1;i<ar0.length;i++) {
   ar0[i]=parseInt(ar0[i],10);
   ar1[i]=parseInt(ar1[i],10);
 }
  function dayChange (day) {
   day=parseInt(day,10);
   if(day==1||day==21||day==31) {   
     day=day+'st'; }
   else if(day==2||day==22) {   
     day=day+'nd'; }
   else if(day==3||day==23) {   
     day=day+'rd';
 
  }else {
    day=day+'th';
  }
  
    return day;
  }
  
  
  var temp0=month[ar0[1]]+' '+dayChange(ar0[2])+','+ ' '+ar0[0];
  
  var temp1=month[ar1[1]]+' '+dayChange(ar1[2])+','+' '+ar1[0];
  if(arr[0]==arr[1]) {
    array.push(temp0);
    return array;
  }
  //return (ar1[1]-ar0[1])*30+ar1[2]-ar0[2]
   if(ar0[0]==ar1[0]||ar1[0]-ar0[0]<2 && (ar1[1]-ar0[1])*30+ar1[2]-ar0[2]<0) {
   
  
     
     temp1=month[ar1[1]]+' '+dayChange(ar1[2]);
   if(ar0[0]==2016) {
       temp0=month[ar0[1]]+' '+dayChange(ar0[2]);
   }
   if(ar0[0]==ar1[0]&&ar1[1]==ar0[1]) {
     temp1=dayChange(ar1[2]);
   }
   
   
  }
  
 
 array.push(temp0,temp1);
  return array;
}
//1.21.31 +st 2 22 +nd 3 23 + rd
//parInt()转换传入字符的进制parInt("f",10) 即15；
makeFriendlyDates(['2016-07-01', '2016-07-04']);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
//makeFriendlyDates(["2017-03-01", "2017-05-05"])