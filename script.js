function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
	if(currentClass == 'light-mode'){	
	document.getElementById("a_changer").classList.add('text-white');
	document.getElementById("a_changer").classList.add('bg-dark');
	} else {
	document.getElementById("a_changer").classList.remove('text-white');
	document.getElementById("a_changer").classList.remove('bg-dark');
  }
}
