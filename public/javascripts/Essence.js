/*******************************************************************************************************
 Global Variables
 ******************************************************************************************************/
var EssenceNames = ["Aleth","Ber","Cynd","Dol","Est","Fel","Hix","Gur","Icur"];


/*******************************************************************************************************
 Page Functions
 ******************************************************************************************************/

function searchSel(dropdown,real){
    var input = document.getElementById(dropdown).value.toLowerCase();
    var output = document.getElementsById(real).options;
    for(var i=0;i<output.length;i++){
        if(output[i].value.indexOf(input)==0){
            output[i].selected = true;
        }
        if(document.getElementById(real).value == ''){
            output[0].selected = true;
        }
    }
}
function calculateEssence(){
    var prisms = 0;
	var max = $("input[name='essence']:checked").val();
	var EssenceArray = [0,0,0,0,0,0,0,0,0]
	var i = 0;
	for (i = 0; i < EssenceArray.length; i++) {
		var string = "Essence"+ i.toString();
		EssenceArray[i] = parseInt(document.getElementById(string).value);
	}
	for(i = 0; i < max; i++){
		EssenceArray[i+1] = EssenceArray[i+1] + Math.floor(EssenceArray[i]/3);
        prisms += Math.floor(EssenceArray[i]/3);
		EssenceArray[i] = EssenceArray[i]%3;
	}
    for(i = EssenceArray.length - 1; i > max; i--){
        EssenceArray[i-1] = EssenceArray[i] * 3;
        EssenceArray[i] = 0;
    }
	var div = document.getElementById('result');
	div.innerHTML = "";
	var string = "<table border='1' width=100%><tr><th colspan=9>Result</th></tr><tr>"
	for(i=0;i<EssenceNames.length;i++){
		string += "<td><center>"
		string += EssenceNames[i]
		string += "</center></td>";
	}
	string += "<tr></tr>";
	for(var i = 0; i< EssenceArray.length;i++){
	    string += "<td>";
		string += "<center>"
		string += EssenceArray[i].toString();
		string += "</center>"
		string += "</td>";
	}
	string += "</tr>";
	string += "</table>";
    string += "<p><center> Uses "
    string += prisms.toString()
    string += " prisms, costing "
    string += (prisms * 500).toString();
    string += " gold</center>";
	div.innerHTML = string;

}