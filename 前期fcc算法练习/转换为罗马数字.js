function convert(num) {
//var arr=["I",'V','X','L','C','D','M'];//1,5,10,50,100,500,1000   
var arr =['',['','I',
'II',
'III',
'IV',
'V',
'VI',
'VII',
'VIII',
'IX',],
        [ '','X',
'XX',
'XXX',
'XL',
'L',
'LX',
'LXX',
'LXXX',
'XC',],
     [  '',  'C',
'CC',
'CCC',
'CD',
'D',
'DC',
'DCC',
'DCCC',
'CM'],['','M','MM','MMM']];//'',[1,2,3,4,5,6,7,8,9],[10,20,30,40,50,60,70,80,90],100,200,300,400,500.600,700,800,900],1000
  var str='';
  var newstr='';
   str+=num;
  var j;
  var n=str.length;//return n;
  for(var i=0;i<n;i++) { 
    j=n-i;
    newstr+=arr[j][str[i]];
    //if(j>1) {j--;}
  }
  return newstr;
}

convert(1000);
//''+1-9 10-90 100-900 1000
//判断传入数字的位数 n 再从第一位开始判断 这个数具体是多少 然后查表
//查表 '' 1-9 共十个字符。
//将 传入数字改成字符串‘然后一位一位的转换







