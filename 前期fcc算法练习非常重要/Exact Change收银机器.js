function checkCashRegister(price, cash, cid) {
  var change=[];
  
  // Here is your change, ma'am.
  var trick=(cash-price)*100;
 /*var oh=0,//100
      tw=0,//20
      te=0,//10
      fi=0,//5
      on=0,//1
      qu=0,//.25
      di=0,//.1
      ni=0,//.05
      pe=0;//.01*/
   for(var i=0;i<cid.length;i++ ) {
    cid[i][1]*=100;
  }    
  
 var newarr=[10000,2000,1000,500,100,25,10,5,1];
 var newarr1=[0,0,0,0,0,0,0,0,0];//[oh,tw,te,fi,on,qu,di,ni,pe]
  
  var n=newarr.length;
  function numOfValue(trick) {
    for(var h=0;h<n;h++){
      while(trick-newarr[h]>=0 && newarr1[h]<cid[n-1-h][1]) {
          trick-=newarr[h];

          newarr1[h]+=newarr[h];
      } }
    return trick;}
  var test=0;
 // 说明:这个写了俩天 刚开始一点头绪没有 希望 我自己以后多来看看这个；
  //首先写俩个数组一个是 newarr 即纸币的种类，newarr1应该找零的钱数
//for 循环钱币的几个种类 从最大面值判断：用while如果大于最大面值的金额，trick减去一次该面值，然后newarr1加上对应面值。而且找零的该面值，不能大于储存的该面值的总金额（该列子中最大面值100所以看该找零是否大于100 是trick-100 newarr1【1】+100）
  //第二次是20的面值也是一次循环>20 trick-20 newarr[2]+20且 不能大于传入数组该面值总金额
  //如何想出来 依据下面一个个的while循环 想出来的
 /* function numOfValue (trick) {
    while(trick-10000>=0 && oh<=cid[8][1]) {
      trick-=10000;

      oh+=10000;
    } 
    while(trick-2000>=0 && tw<cid[7][1]) {
      trick-=2000;
     // tw++;
      tw+=2000;

    } 
    while(trick-1000>=0 && te<cid[6][1]) {
      trick-=1000;
      te+=1000;
    }  
    while(trick-500>=0 && fi<cid[5][1]) {
      trick-=500;
     fi+=500;
    }  
    while(trick-100>=0 && on<cid[4][1]) {
      trick-=100;
      on+=100;
    }  
    while (trick-25>=0 && qu<cid[3][1]) {
      trick-=25;
     qu+=25;
    } 
      while(trick-10>=0 &&di<cid[2][1]) {
      trick-=10;

      di+=10;
    }

    while(trick-5>=0 &&ni<cid[1][1]) {
      trick-=5;
      ni+=5;
    }
    while(trick-1>=0&&pe<cid[0][1]) {
      trick-=1;
      pe+=1;
    }
return trick;
  }
*/
  trick=numOfValue(trick,cid);
  
 //var arr=[oh,tw,te,fi,on,qu,di,ni,pe];//数组写反了，不想重新改了就reverse了。
   //  arr=arr.reverse();
 //return newarr1;
for (var k=n-1;k>=0;k--) {
  if(trick===0 && cid[k][1]-newarr1[n-1-k]>=0 ) {
    if( cid[k][1]===newarr1[n-1-k]) {
      test++;
    }
   
    if(newarr1[n-1-k]!==0) {// 有钱 且 不是零就 返回该找 对应面值的钱数量。
     cid[k][1]=newarr1[n-1-k]/100;
     change.push(cid[k]);}
  }
}
 // return test
  if(trick>0) {
    return "Insufficient Funds";//trick>0 说明没有钱找了。
  }
 
 if(test===9) { //全部为零 就说明没钱了
   return "Closed";
 }
  
  return change;
  
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUN",100.00]);"

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) ;
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);