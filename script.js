function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
	if(currentClass == 'light-mode'){	
	document.getElementById("a_changer").classList.add('text-white');
	document.getElementById("a_changer").classList.add('bg-dark');
	document.getElementById("carte_hisa").classList.add('text-white');
	document.getElementById("carte_hisa").classList.add('bg-dark');
	document.getElementById("carte_captain").classList.add('text-white');
	document.getElementById("carte_captain").classList.add('bg-dark');
	document.getElementById("carte_velovo").classList.add('text-white');
	document.getElementById("carte_velovo").classList.add('bg-dark');
	document.getElementById("carte_xary").classList.add('text-white');
	document.getElementById("carte_xary").classList.add('bg-dark');
	document.getElementById("carte_jo").classList.add('text-white');
	document.getElementById("carte_jo").classList.add('bg-dark');
	document.getElementById("carte_oza").classList.add('text-white');
	document.getElementById("carte_oza").classList.add('bg-dark');
	document.getElementById("carte_pumba").classList.add('text-white');
	document.getElementById("carte_pumba").classList.add('bg-dark');
	document.getElementById("carte_thermal").classList.add('text-white');
	document.getElementById("carte_thermal").classList.add('bg-dark');
	} else {
	document.getElementById("a_changer").classList.remove('text-white');
	document.getElementById("a_changer").classList.remove('bg-dark');
	document.getElementById("carte_hisa").classList.remove('text-white');
	document.getElementById("carte_hisa").classList.remove('bg-dark');
	document.getElementById("carte_captain").classList.remove('text-white');
	document.getElementById("carte_captain").classList.remove('bg-dark');
	document.getElementById("carte_velovo").classList.remove('text-white');
	document.getElementById("carte_velovo").classList.remove('bg-dark');
	document.getElementById("carte_xary").classList.remove('text-white');
	document.getElementById("carte_xary").classList.remove('bg-dark');
	document.getElementById("carte_jo").classList.remove('text-white');
	document.getElementById("carte_jo").classList.remove('bg-dark');
	document.getElementById("carte_oza").classList.remove('text-white');
	document.getElementById("carte_oza").classList.remove('bg-dark');
	document.getElementById("carte_pumba").classList.remove('text-white');
	document.getElementById("carte_pumba").classList.remove('bg-dark');
	document.getElementById("carte_thermal").classList.remove('text-white');
	document.getElementById("carte_thermal").classList.remove('bg-dark');
  }
}
