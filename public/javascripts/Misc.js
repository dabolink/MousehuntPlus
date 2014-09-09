var updateTime = 60000;
function initialization(){
    refreshTimers();
    setInterval(refreshTimers,updateTime);

}

function buttonChange(button){
    var button = button
    button.setAttribute("data-icon","arrow-d");
    button.update()
}

