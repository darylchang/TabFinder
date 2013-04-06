document.getElementById("query").onkeypress = "return runScript(event);"

function runScript(e) {
		 if (e.keyCode == 13) {
        var tb = document.getElementById("query");
        var text = tb.value;
        console.log(text);
        return false;
	}
}	