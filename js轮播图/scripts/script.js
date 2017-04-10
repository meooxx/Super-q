/**
 * Created by shaoqiu on 2016/11/29.
 */
window.onload=function() {
    var images=document.getElementById("image");
    var container=document.getElementById("container");
    var button=document.getElementById("button").getElementsByTagName("span");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var flag=false;
    var myindex=0;
    function showb() {
       // console.log(button);
        for(var i=0;i<button.length;i++){
            button[i].className="";
            if(i==myindex ) {
                button[i].className="addclass";
                console.log(i);

            }

        }
    }
    function changepic (offset) {

        flag=true;
        //坑爹啊 竟然 .style.left只能获取行内元素的 值md真坑爹
        //false == imagse.style.left
       // var left=window.getComputedStyle(images,null)?window.getComputedStyle(images,null).left:images.currentStyle.left;
           // left=parseInt(left)+offset+"px";
        var left=window.getComputedStyle(images,null).left;
        var time=408;
        var interval=8;
        var speed=Math.ceil(offset/(time/interval));
        function go(){
            //if(images.changepic) clearTimeout (images.changepic);
            if(speed<0 &&parseInt( window.getComputedStyle(images,null).left)>(parseInt(left)+offset)||speed>0 &&parseInt(window.getComputedStyle(images,null).left)<(parseInt(left)+offset)) {
                images.style.left = parseInt(window.getComputedStyle(images,null).left)+speed+"px";
                images.changepic=setTimeout(go,interval)
            }
            else {
                flag=false;
                if (parseInt(left)+offset <-1324){
                    images.style.left=-408+"px";
                    myindex=0;
                    return;
                }
                if (parseInt(left)+offset >-408){
                    images.style.left=-1224+"px";//改成1224bug就好了 之前是设置成-816 可能第一张biancheng-408 最后一张是-1224
                    myindex=2;
                    return;
                }
            }

        }
            go();
        offset<0? myindex=(myindex+1)%3:myindex=(myindex-1)%3;
        console.log(-1%3);
    }
    next.onclick=function(){
        if(flag) return;
        changepic (-408);
         showb();
    };
    prev.onclick=function(){
        if(flag) return;
        changepic (408);
        showb();
        if(myindex< 0) button[2].className="addclass";
    };

    for(var i=0;i<button.length;i++) {
        //console.log(button[i].getAttribute("index"));
         button[i].onclick=function() {
            var index = this.getAttribute("index");
            index != myindex ? changepic(-408 * (index - myindex)) : false;
            myindex = index;

            showb();
        }
    }

        showb();

function play() {
        timer=setInterval(function(){next.onclick()},3000);
}
    function stop () {
        clearInterval(timer);
    }
    container.onmouseover =stop;
    container.onmouseout=play;
    play();


};