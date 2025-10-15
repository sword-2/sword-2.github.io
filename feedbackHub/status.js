<script>
/* Pre-processing of operator request for a KJV bible in Javascript. */

//window.alert('status.js was called.'); //debugging

var err; //global variable to store error messages for catch block

//status variables:
	var statusFu = document.getElementById("statusFu");
	if (statusFu == null) {
		alert("error: unable to find statusFu element to report status for functions");
	} //else {
	//	alert("globals.js debugging: initialized var stat");
	//}


	var statusErr = document.getElementById("statusErr");
	if (statusErr == null) {
		alert("error: unable to find statusErr element to report status for errors");
	} //else {
	//	alert("globals.js debugging: initialized var stat");
	//}

</script>
