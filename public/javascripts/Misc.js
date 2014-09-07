var updateTime = 60000;
function initialization(){
    ForbiddenGrove();
    setInterval(ForbiddenGrove,updateTime);

}

function buttonChange(button){
    var button = button
    button.setAttribute("data-icon","arrow-d");
    button.update()
}

