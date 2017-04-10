/**
 * Created by shaoqiu on 2016/11/12.
 */
function addLoadEvent (func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function') {
        window.onload=func;
    }else {
        window.onload=function() {
            oldonload();
            func();
        }
    }
}
function insertAfter(newElement,targetElement) {
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement) {
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addClass(element,value) {
    if(!element.className) {
        element.className = value;
    }else {
        newClassName=element.className;
        newClassName  += " ";
        newClassName += value;
        element.className=newClassName;
    }
}


function addCl1ass(element,value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName+= " ";
        newClassName+= value;
        element.className = newClassName;
    }
}

function highLightPage (href) {
    if(!document.getElementsByTagName) {
        return false;
    }
    if(!document.getElementById) {
        return false;
    }
    var headers=document.getElementsByTagName('header');
    if(headers.length==0) {
        return false;
    }
    var navs=headers[0].getElementsByTagName('nav');
    if (navs.length == 0) {
        return false;
    }

    var links = navs[0].getElementsByTagName('a');
    var linkurl;
    for (var i = 0; i < links.length; i++) {

        linkurl = links[i].getAttribute('href');
        if (window.location.href.indexOf(linkurl) != -1) {
            links[i].className = 'here';
            var nodeText=links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",nodeText);

        }
    }


}
addLoadEvent(highLightPage);






function moveElement(elementID,final_x,final_y,interval) {

    if(!document.getElementById) {
        return false;
    }
    if(!document.getElementById(elementID)) {
        return false;
    }
    var elem=document.getElementById(elementID);
    if(elem.movement) {
        clearTimeout(elem.movement);
    }
    if(!elem.style.left) {
        elem.style.left="0px";

    }
    if(!elem.style.top) {
        elem.style.top="0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);

    if (xpos == final_x && ypos == final_y) {
        return true;
    }


    if (xpos < final_x) {
        var dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        var dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        var dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        var dist = Math.ceil(( ypos- final_y )/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);

}



function slideShow() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("intro")) {
        return false;
    }
    var intro = document.getElementById("intro");
    var show = document.createElement("div");
    show.setAttribute("id", "show");
    var frame=document.createElement("img");

    frame.setAttribute("src","images/frame.gif");
    frame.setAttribute("id","frame");
    frame.setAttribute("alt","");

    show.appendChild(frame);
    insertAfter(show, intro);

    var preview = document.createElement("img");
    preview.setAttribute("src", "images/slideshow.gif");
    preview.setAttribute("alt", "awaits you show");
    preview.setAttribute("id", "preview");
    show.appendChild(preview);



    var links = document.getElementsByTagName('a');
    var destination;
    for (var i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            destination = this.getAttribute('href');
            if (destination.indexOf('index.html') != -1) {
                moveElement("preview", 0, 0, 5);
            }
            if (destination.indexOf('about.html') != -1) {
                moveElement("preview", -150, 0, 5);
            }
            if (destination.indexOf('photos.html') != -1) {
                moveElement("preview", -300, 0, 5);
            }
            if (destination.indexOf('live.html') != -1) {
                moveElement('preview', -450, 0, 5);

            }
            if (destination.indexOf('concat.html') != -1) {
                moveElement("preview", -600, 0, 5);
            }
        }

    }


}

addLoadEvent(slideShow);



function showSection (id){
    var sections = document.getElementsByTagName("section");
    for(var i=0;i < sections.length;i++) {
        if(sections[i].getAttribute("id") != id) {
            sections[i].style.display="none";
        }else {
            sections[i].style.display="block";
        }
    }
}
function prepareInternalnav () {
    if(!document.getElementsByTagName) {
        return false;
    }
    if(!document.getElementById) {
        return false;
    }
    var articles= document.getElementsByTagName("article");
    if(articles.length==0) {
        return false;
    }
    var navs=articles[0].getElementsByTagName("nav");
    if(navs.length==0) {
        return false;
    }
    var nav=navs[0];
    var links=nav.getElementsByTagName("a");
    for(var i=0; i<links.length; i++) {
        var sectionId=links[i].getAttribute("href").split("#")[1];
        if(!document.getElementById(sectionId)) {
            continue;
        }
        document.getElementById(sectionId).style.display="none";
        links[i].destination=sectionId;
        links[i].onclick=function () {
            showSection(this.destination);
            return false;
        }



    }

}


addLoadEvent(prepareInternalnav);
function showPic(whichpic) {
    if(!document.getElementById("placeholder")) {
        return false;
    }
    var source = whichpic.getAttribute("href");
    var placeholder =document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(!document.getElementById("description")) {
        return false;
    }
    if(whichpic.getAttribute("title")) {
        var text= whichpic.getAttribute("title");

    }else {
        var text="";

    }
    var description=document.getElementById("description");
    if(description.firstChild.nodeType == 3){
        description.firstChild.nodeValue = text;
    }
    return false;
}
function preparePlaceholder () {
    if(!document.createElement) {
        return false;
    }
    if(!document.createTextNode) {
        return false;
    }
    if(!document.getElementById) {
        return false;
    }
    if(!document.getElementById("imagegallery")) {
        return false;
    }
    var placeholder =document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description=document.createElement("p");
    var desctext =document.createTextNode("choose an image");
    description.appendChild(desctext);
    var gallery= document.getElementById("imagegallery");
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}
function prepareGallery () {
    if(!document.getElementsByTagName) {
        return false;
    }
    if(!document.getElementById) {
        return false;
    }
    if(!document.getElementById("imagegallery")) {
        return  false;
    }
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++) {
        links[i].onclick=function () {
           return showPic(this);

        }
    }
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);



function stripeTables() {
    if(!document.getElementsByTagName) {
        return false;
    }
    var tables=document.getElementsByTagName("table");
    for(var i=0;i<tables.length;i++) {
        var odd=false;
        var rows=tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++) {
            if(odd==true) {
                addClass(rows[j],"odd");
                odd=false;
            }else {
                odd=true;
            }
        }
    }
}





function highlightRows() {
    if(!document.getElementsByTagName) {
        return false;
    }
    var rows=document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++) {
         rows[i].oldClassName=rows[i].className;
        rows[i].onmouseover=function () {
            addClass(this,"highlight");
        };
        rows[i].onmouseout=function () {
            this.className=this.oldClassName;
        }
    }
}








function displayAbbreviation () {
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    var abbreviations=document.getElementsByTagName("abbr");
    var defs=new Array();
    for(var i=0;i<abbreviations.length;i++) {
        var current_abbr=abbreviations[i];
        if(current_abbr.length < 1) {
            continue;
        }
        var definiation = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key]=definiation;
    }
    var dlist=document.createElement("dl");
    for(key in defs) {
        var definiation = defs[key];
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text=document.createTextNode(definiation);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);


    }
    if(dlist.childNodes.length < 1) {
        return false;
    }
    var header =  document.createElement("h3");
    var header_text= document.createTextNode("abbreviation");
    header.appendChild(header_text);
    var articles = document.getElementsByTagName("article");
    if (articles.length ==0 ) {
        return false;
    }
    var container=articles[0];
    container.appendChild(header);
    container.appendChild(dlist);

}
addLoadEvent(stripeTables);

addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviation);
function focusLabels() {
    if(!document.getElementsByTagName("label")) {
        return false;
    }
    var labels=document.getElementsByTagName("label");
    for (var i=0 ;i<labels.length;i++) {
        if(!labels[i].getAttribute("for")) {
            continue;
        }
       labels[i].onclik=function () {
            var id=this.getAttribute("for");
            if(!document.getElementById(id)) {
                return false;
            }
            var element =document.getElementById(id);
            element.focus();
        };
    }
}
addLoadEvent(focusLabels);

function  resetFields(whichform) {
   //if(Modernizr.input.placeholder) {
       // return ;
       if (Modernizr.input.placeholder) return;
   //}
    for (var i=0; i<whichform.elements.length;i++) {
        var element =whichform.elements[i];
        if(element.type=="submit")  continue;
        var check=element.palceholder || element.getAttribute("placeholder");
        if(!check) continue;
        element.onfocus=function () {
           var text=this.placeholder || this.getAttribute("placehodler");
            if(this.value==text) {
                this.className="";
                this.value="";
            }
        };
        element.onblur=function () {
            if(this.value=="") {
                this.className="placeholder";
                this.value=this.getAttribute("placeholder");
            }
        };
        element.onblur();

        
    }
    
}
function prepareForms () {
    for(var i=0;i<document.forms.length;i++) {
        var thisform=document.forms[i];
        resetFields(thisform);
    }
}
addLoadEvent(prepareForms);
function isFilled (field) {
    if(field.value.repalce(" ",'').length == 0) {
        return  false;
    }
    var placeholder =field.placeholder ||field.getAttribute(placeholder);
    return (field.value!=placeholder);
    
}
function isEmail(field) {
    return (field.value.indexOf("@") !=-1 &&field.value.indexOf(".") !=-1) ;
}

function vaildateForm(whichform) {
    for (var i=0;i<whichform.elements.length;i++) {
        var element = whichform.elements[i];
        if(element.required =="required") {
            if(!isFilled(element)) {
                alert("Please fill in the '+element.name+'field.");
                return false;
            }
        }
        if(!element.type == "email") {
            if (!isEmail(element)) {
                alert("The '+element.name+'field must be a valid email address.");
                return false;
            }
        }
    }
    return true;
}
function prepareForms () {
    for(var i=0;i<document.forms.length;i++) {
        var thisform=document.forms[i];
        resetFields(thisform);
        thisform.onclick=function () {
            return vaildateForm(thisform);
        }
    }
}
addLoadEvent(prepareForms);



function getHTTPObject() {
    if(typeof XMLHttpRequest=="undefined") {
        XMLHttpRequest =function () {
            try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch(e) {}
            try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
            catch(e) {}
            try {return new ActiveXObject("Msxml2.XMLHTTP");}
            catch(e) {}
            return false;
        };
        return new XMLHttpRequest();
    }
}function displayAjaxLoadding(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
    var content = document.createElement("img");
    content.setAttribute("src","images/loadding,gif");
    content.setAttribute("alt","Loadding");
    element.appendChild(content);
}
function submitformWithAjax (whichform,thetarget) {
    var request = getHTTPObject();
    if (!request) {
        return false;
    }
     displayAjaxLoadding(thetarget);
    var dataParts = [];
    var element;
    for (var i = 0; i < whichform.elements.length; i++) {
        element = whichform.elements[i];
        dataParts[i] = element.name + "=" + encodeURIComponent(element.value);
    }
    var data = dataParts.join("&");
    request.open("POST", whichform.getAttribute("action"), true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange=function () {
        if(request.readyState==4) {
            if(request.status ==200 ||request.status == 0) {
                var matches=request.responseText.match(/<article>([\s\s]+)<\/article>/);
                if(matches.length>0) {
                    thetarget.innerHTML=matches[1];
                }else {
                    thetarget.innerHTML='<p> Oops,there was an error.sorry.</p>';
                }
            }else {
                thetarget.innerHTML='<p> '+request.statusText+'</p>';
            }
        }
    };
    request.send(data);
    return true;



}

