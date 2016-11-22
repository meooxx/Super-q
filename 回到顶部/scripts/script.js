
/**
 * Created by shaoqiu on 2016/11/18.
 */
window.onload=function () {
    var displayArea=document.documentElement.clientHeight;//可视区域的高度

    var btn=document.getElementById("btn");
    var time;
    var flag=true;


    //点击按钮的时候触发
         btn.onclick=function () {
            time= setInterval(function() {
             var topHeight = document.documentElement.scrollTop || document.body.scrollTop;

                document.documentElement.scrollTop =document.body.scrollTop=topHeight+Math.floor(-topHeight/5);
                flag=true;
                //console.log(topHeight);
                if(topHeight==0) {
                    clearInterval(time);
                }
             },30);
            
             
    
         };
    //滚动条 子 时候触发
    window.onscroll=function() {
        var topHeight = document.documentElement.scrollTop || document.body.scrollTop;
        if (topHeight<=displayArea) {

            btn.style.display="none";
        }else {
            btn.style.display="block";
        }if(!flag) {
            clearInterval(time);
        }
        flag=false;
    }
};