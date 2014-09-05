function ForbiddenGrove(){
    var curDate = new Date();
    //opened this time
    var setDate = new Date(2014,8,2,0,0,0,0);

    //var testDate = new Date(2014,8,4,10,0,0,0);
   // var T = testDate.getTime();

    //alert(setDate.toString() + '\n' + testDate.toString())

    var curTime = curDate.getTime();
    var lastTime = setDate.getTime();
    var diff = curDate - lastTime;
    //alert('CurTime: ' + curDate + '\nDiff: ' + diff + '\nLastTime: ' + lastTime);
    var curSeconds = diff % (3600000 * 20);
    alert(curSeconds);
    if(curSeconds < (3600000 * 16)){
        alert('Forbidden Grove is open');
        var t = ((3600000*16) - curSeconds)
        alert(t/3600000*20);
        var hours = Math.floor(t);
        alert('It will close in:\n\t' + hours + 'hours');
    }
    else{
        alert('Forbidden Grove is closed');
    }
}
