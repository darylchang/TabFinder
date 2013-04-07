document.getElementById("query").onkeypress = runScript;

function runScript(e) {
	 if (e.keyCode == 13) {
        var tb = document.getElementById("query");
        var text = tb.value;
        console.log(text);
        return false;
	}
}
