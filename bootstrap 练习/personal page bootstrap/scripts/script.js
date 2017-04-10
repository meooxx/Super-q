/**
 * Created by shaoqiu on 2016/11/24.
 */
//onload evnet
function addonload (func){
    var oldload=window.onload;
    if(!window.onload) {
        window.onload=func;
    }else {
        window.onload=function () {
            oldload();
            func();
            
        } 
    }
    
}
//addclass
function addClass(element,value ) {

    if(!element.className) {

        element.className=value;
}
else {
        var newClassName=element.className;
        newClassName += " ";
        newClassName +=value;
        element.className=newClassName;

    }

}

function alerts () {


    var tabout = document.getElementById("tabout");
    var tshow = document.getElementById("tshow");
    var tcontact = document.getElementById("tcontact");
    if(!tabout.className) { tabout.className="";}
    tabout.oldclass=tabout.className;
    if(!tshow.className) { tshow.className="";}
    tshow.oldclass=tshow.className;
    if(!tcontact.className) { tcontact.className="";}
    tcontact.oldclass=tcontact.className;

     function light() {

         var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop < 425 && scrollTop >= 0) {
            addClass(tabout, "addclass");
            tcontact.className=tcontact.oldclass;
            tshow.className=tshow.oldclass;
        }
            if (scrollTop > 425 && scrollTop <= 1400) {

                addClass(tshow, "addclass");
                tcontact.className=tcontact.oldclass;
                tabout.className=tabout.oldclass;
        }
        if (scrollTop > 1401) {

            addClass(tcontact, "addclass");
            tabout.className=tabout.oldclass;
            tshow.className=tshow.oldclass;
        }



   }

           light();
    window.onscroll=light;
    function onevent () {
        var navs = document.getElementById("nav");
        var lis = navs.getElementsByTagName("li");
        for (var i = 0; i < 3; i++) {
            lis[i].onclick = light;
            onevent();
        }
        }
    }

function changepic() {
    var flag=false;
//show partment
   var show=document.getElementById("show");
   var btn=document.getElementById("toggle");

    var array=[],arrayg=[];
    var pics = show.getElementsByTagName("img");
    for (var i = 0; i <pics.length; i++) {
        var link = pics[i].getAttribute("src");
        array.push(link);
        var nth = i + 1;
        var source = "tugong/g" + nth + ".jpg";
        arrayg.push(source);
    }

  //  console.log(arrayg);
    // toppartment
    var top=document.getElementById("top");
    var img=top.getElementsByTagName("img")[0];
    var huangren=img.getAttribute("src");
    var hama="tugong/hama.jpg";
//btn part

    btn.onclick =function () {
        var show=document.getElementById("show");
        var btn=document.getElementById("toggle");
        flag = !flag;
         if(flag==true) {
         for(var k=0;k<pics.length;k++){
             var src=array[k];
         pics[k].setAttribute("src",src);
           //  console.log(pics[k].getAttribute("src"));
         }
             img.setAttribute("src",huangren);
             btn.value="百变小粉红"
         }
         if(flag==false) {
         for(var k=0;k<pics.length;k++){
             var src=arrayg[k];
         pics[k].setAttribute("src",src);
         }
             img.setAttribute("src",hama);
             btn.value="变身小黄人"
         }

    }

}



var x=function() {
    changepic();
    alerts();
 };
addonload(x);
