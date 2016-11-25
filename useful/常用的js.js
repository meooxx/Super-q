


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




function addClass(element,value ) {

    if(!element.className) {

        element.className=value;
    }   var newClassName=element.className;
else {
        newClassName += " ";
        newClassName +=value;
        element.className=newClassName;

    }

}