//make a json file the operator could copy out
function mkJsonFile() {
	try {
		let formattedOut = '';
		for (let i = 0; i < tablesJson.length; i++) {
			let tmpOut = '<br>{';
			//tmpOut += '<br><br>{ "table": ' + cap + '},';
			//tmpOut += '<br><br>{ "thermostat": ' + thermostat + '},';
			tmpOut += '<br>' + JSON.stringify(tablesJson[i][0], null, 2);
			for (let k = 1; k < tablesJson[i].length; k++) {
				if (k == tablesJson[i].length - 1) {
					tmpOut += JSON.stringify(tablesJson[i][k], null, 2);
				} else {
					tmpOut += '<br><br>' + JSON.stringify(tablesJson[i][k], null, 2) + ',';
				}
			}
			tmpOut += '<br><br>}';
			formattedOut += tmpOut;
		}
		return formattedOut;
	} catch (error) {
		alert("mkJsonFile() error: " + error.message);
	}
} //end function
