function switchClass () {
	var currentClassName = document.getElementById("idObject").className;
	if (currentClassName == "RedSquare") {
		document.getElementById("idObject").className = "RedSquare YellowCircle";
	} else {
		document.getElementById("idObject").className = "RedSquare";
	}
}