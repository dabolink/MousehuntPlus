var FGOpen = null;

function SeasonalGarden(){
    //Spring start 80hour seasons
    var setDate = new Date(2014,8,7,0,0,0,0);
    var curDate = new Date();
    var status = document.getElementById("SGStatus");
    var time = document.getElementById("SGTime");
    var pic = document.getElementById("SGPic");
    var incDate = 2;
    var incHours = 7;
    var incMins = 0;
    var SGSeason = "";
    curDate.setDate(curDate.getDate()+incDate);
    curDate.setHours(curDate.getHours()+incHours,curDate.getMinutes()+incMins);

    var curTime = curDate.getTime();
    var lastTime = setDate.getTime();
    var diff = curTime - lastTime;
    var diffDate = new Date(diff);

    var curSeconds = diff % (3600000 * 80 * 4);
    if(curSeconds < (3600000 * 80 + (3600000 * 7))){
        if(SGSeason != "spring" && SGSeason != ""){
            alert("Season Has changed to Spring");
        }
        var mins = 60 - diffDate.getMinutes();
        var hours = 24 - diffDate.getHours();
        var days = diffDate.getDay();
        SGSeason = "spring";
        pic.innerHTML = "Insert PIC HERE"
        status.innerHTML = "Season: Spring"
        time.innerHTML = "Summer is coming in " + (6 - days) + " Day," + (22 - hours) + " hours and " + (mins) + " minutes";

    }
    else if(curSeconds > (3600000 * 80) && curSeconds < (3600000 * 80 * 2)){
        if(SGSeason != "summer" && SGSeason != ""){
            alert("Season Has changed to Summer");
        }
        SGSeason = "summer";
        pic.innerHTML = "Insert PIC HERE"
        status.innerHTML = "Season: Summer"
        time.innerHTML = "fall is coming in " + (1) + " hours and " + (1) + "minutes";

    }
    else if(curSeconds > (3600000 * 80 * 2) && curSeconds < (3600000 * 80 * 3)){
        if(SGSeason != "fall" && SGSeason != ""){
            alert("Season Has changed to Fall");
        }
        SGSeason = "fall";
        pic.innerHTML = "Insert PIC HERE"
        status.innerHTML = "Season: Fall"
        time.innerHTML = "Winter is coming in " + (1) + " hours and " + (1) + "minutes";

    }
    else{
        if(SGSeason != "winter" && SGSeason != ""){
            alert("Season Has changed to Winter")
        }
        SGSeason = "winter";
        pic.innerHTML = "Insert PIC HERE"
        status.innerHTML = "Season: Winter"
        time.innerHTML = "Spring is coming in " + (1) + " hours and " + (1) + "minutes";

    }
}
function ForbiddenGrove(){
    var curDate = new Date();
    var status = document.getElementById("FGStatus");
    var timer = document.getElementById("FGTime");
    var pic = document.getElementById("FGPic");
    //opened this time
    var setDate = new Date(2014,8,2,0,0,0,0);
    var incHours = 0;
    var incMins = 0;
    curDate.setHours(curDate.getHours()+incHours,curDate.getMinutes()+incMins);
    //var testDate = new Date(2014,8,4,10,0,0,0);
   // var T = testDate.getTime();

    //alert(setDate.toString() + '\n' + curDate.toString())

    var curTime = curDate.getTime();
    var lastTime = setDate.getTime();
    var diff = curTime - lastTime;
    //alert((diff % (360000 * 20) )/ 3600000 * 20);
    var diffDate = new Date(diff);
    //alert(diffDate.getHours());
    var curSeconds = diff % (3600000 * 20);
    diffDate = new Date(curSeconds);
    //alert(diffDate.getHours());
    console.log(curSeconds + "\n" + (3600000 * 8));
    if(curSeconds < (3600000 * 9) || curSeconds > (3600000 * 13)){
        if(FGOpen == false){
            alert("Forbidden Grove has Opened");
        }
        FGOpen = true;
        pic.innerHTML = "<IMG SRC='/images/OpenGrove.png' ALT='Open'>"
        status.innerHTML = "Open"
        if(curSeconds > (3600000 * 9)) {
            timer.innerHTML = "It will close in:  " + (20 - diffDate.getHours()) + " hours and " + (60 - diffDate.getMinutes()) + " minutes";
        }
        else{
            timer.innerHTML = "It will close in:  " + (24 - diffDate.getHours()) + " hours and " + (60 - diffDate.getMinutes()) + " minutes";
        }
        // alert('Forbidden Grove is open\n' + 'It will close in:  ' + (16 - diffDate.getHours()) + " hours and " + (60 - diffDate.getMinutes()) + ' minutes')
    }
    else{
        if(FGOpen == true){
            alert("Forbidden Grove has Closed");
        }
        FGOpen = false;
        pic.innerHTML = "<IMG SRC='/images/ClosedGrove.png' ALT='Open'>"
        status.innerHTML = "Closed"
        if(4 != diffDate.getHours()) {
            timer.innerHTML = 'It will open in:  ' + (4-diffDate.getHours()) + " hours and " + (60-diffDate.getMinutes()) + ' minutes'
        }
        else{
            timer.innerHTML = 'It will open in ' + (diffDate.getMinutes()) + " minutes"
        }
        //alert('Forbidden Grove is closed\n' + 'It will open in:  ' + (4 - diffDate.getHours()) + " hours and " + (60 - diffDate.getMinutes()) + ' minutes')
    }
}
function refreshTimers(){
    ForbiddenGrove()
    SeasonalGarden()
}