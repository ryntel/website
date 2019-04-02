// oui c'est une fonction de merde, j'avais la flemme voilà :)
function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
	console.log("DEBUG --- Classe actuelle = "  + currentClass);
	if(currentClass == 'light-mode'){	
	document.getElementById('btn_jour').innerHTML = '☀ Day mode';

	} else {
	document.getElementById('btn_jour').innerHTML = '🌙 Night mode';
  }
}
