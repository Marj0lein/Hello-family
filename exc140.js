var input = document.getElementById("input");
var button = document.getElementById("button");

document.getElementById("input").focus();

function getInputVal(){
	var inputVal = document.getElementById("input").value;
	return (inputVal);
}

function welcomeMe(){
	var greeting;
	var inputVal = getInputVal();
	switch (inputVal){
		case "Lein":
			greeting = "Hallo Marjolein!";
			break;
		case "Jan":
			greeting = "Dag schat!";
			break;
		case "Neva":
			greeting = "Ha lieve knuffel!";
			break;
		case "Mex":
			greeting = "Daag stoere vent!";
			break;
		default:
			greeting = "I only know the Jonk family :)"
		}
	alert(greeting);
}

button.addEventListener("click", welcomeMe);