/**
 * Created by shaoqiu on 2016/12/27.
 */
var bk = [0,1,2,3,4,5,6,7,8,9];//block
var cell = [0,1,2,3,4,5,6,7,8];//cell
var canMove = [[0],
                 [2,4],[1,5,3],[2,6],
    [1,7,5],[2,4,6,8],[3,5,9],[4,8],[5,7,9],[6,8]]


window.onload = function() {

    var timer = document.getElementById("timer");
    var play = document.getElementById('play');
    var restart = document.getElementById("restart");
    var time = 0;
    var min = 0;
    var flag = 0;

    //time
    function timertime() {


        min = parseInt(time / 60);
        var s = time % 60;

        timer.innerHTML = "time : " + min+ " min " + s + " s";
        time++;


    }

    // add clickevent
    function prepareClickEvent() {
        play.onclick = function () {
            if (typeof t == "number" && flag == 0) {
                return;
            }

            time = 0;
            t = setInterval(timertime, 300);
            flag = 0;
        };


        restart.onclick = function () {
            clearInterval(t);
            time = 0;
            timertime();
            flag = 1;


        };
    }
//暂时放一下 等下回来
    function which(which) {
        //var current = document.getElementById("which");
        //var left = window.getComputerStyle().left
        var value = which.getAttribute("value");
      //  console.log(value);
       // moveTo(value);


    }

    //bind clickevent
    function bindEvent() {
        var cell = document.getElementById("cell");
        var divs = cell.getElementsByTagName("div");
        //console.log(divs);
        for(var i =0; i < divs.length; i++) {
            //console.log(divs[i]);

            divs[i].onclick = function() {
               

               // which(divs[i]);
                console.log(this.value)

            };

        }

        
        
        
        
        
    }

    prepareClickEvent();
    bindEvent();


};






