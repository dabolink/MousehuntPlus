function ForbiddenGrove(){
    var curDate = new Date();
    var status = document.getElementById("FGStatus");
    var timer = document.getElementById("FGTime");
    var pic = document.getElementById("FGPic");
    //opened this time
    var setDate = new Date(2014,8,2,0,0,0,0);

    //var testDate = new Date(2014,8,4,10,0,0,0);
   // var T = testDate.getTime();

    //alert(setDate.toString() + '\n' + curDate.toString())

    var curTime = curDate.getTime();
    var lastTime = setDate.getTime();
    var diff = curDate - lastTime;
    //alert((diff % (360000 * 20) )/ 3600000 * 20);
    var diffDate = new Date(diff);
    //alert(diffDate.getHours());
    var curSeconds = diff % (3600000 * 20);
    diffDate = new Date(curSeconds);
    //alert(diffDate.getHours());
    //alert(curSeconds/(3600000 * 4))
    if(curSeconds > (3600000 * 16)){
        pic.innerHTML = "<IMG SRC='/images/OpenGrove.png' ALT='Open'>"
        status.innerHTML = "Open"
        timer.innerHTML = "It will close in:  " + (16 - diffDate.getHours()) + " hours and " + (60 - diffDate.getMinutes()) + " minutes"
       // alert('Forbidden Grove is open\n' + 'It will close in:  ' + (16 - diffDate.getHours()) + " hours and " + (60 - diffDate.getMinutes()) + ' minutes')
    }
    else{
        pic.innerHTML = "<IMG SRC='/images/ClosedGrove.png' ALT='Open'>"
        status.innerHTML = "Closed"
        if(4 != diffDate.getHours()) {
            timer.innerHTML = 'It will open in:  ' + (4 - diffDate.getHours()) + " hours and " + (60 - diffDate.getMinutes()) + ' minutes'
        }
        else{
            timer.innerHTML = 'It will open in ' + (60 - diffDate.getMinutes()) + " minutes"
        }
        //alert('Forbidden Grove is closed\n' + 'It will open in:  ' + (4 - diffDate.getHours()) + " hours and " + (60 - diffDate.getMinutes()) + ' minutes')
    }
}
function refreshTimers(){
    ForbiddenGrove()
}
