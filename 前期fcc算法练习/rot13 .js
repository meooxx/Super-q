function rot13(str) { // LBH QVQ VG!
       var newStr="";
     for (var i=0;i<str.length;i++) {
        
       
          
            var m;
            m=str.charCodeAt(i);
       if(m>=65 && m<=90) { 
         m+=13;
           if(m>90 ) {m=m-90+64;}
               var n=String.fromCharCode(m);//String.fromCharCode()String s大写；
                newStr+=n;
         
       }
       else {
            newStr+=str[i];
       }
      // return newStr;
     }
     
    return newStr;
     //str.replace(re,str.fromCharCode(str.charCodeAt()+13));
  //return "!".charCodeAt(0);
  //return "!" >65;
  
 //return String.fromCharCode(83);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");rot13("SERR CVMMN!");
rot13("SERR PBQR PNZC");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") ;
