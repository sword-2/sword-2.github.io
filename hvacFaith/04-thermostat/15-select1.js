function setSelect() {
	//set options for select pick list
	try {
		//remove any existing elements
		while (sel1.options.length > 0) {
			sel1.remove(0);
		}

		let opts = []; //store program names first

		for (let i = 0; i < tablesJson.length; i++) {
			//const capTmp =  tablesJson[i][0]?.caption;
			let pnl = '';
			for (let j = 1; j < tablesJson[i].length; j++) {
				const pn = tablesJson[i][j]?.programNm;
				if (pn === null || pn === undefined) {
					pnl = 'none';
				} else {
					pnl = pn.toLowerCase(); //program name lowercase (pnl);
				}
				opts.push(pnl);
				}
		} //alert('setSelect() debug before sort=' + opts.toString());

		opts.sort(); //alert('setSelect() debug after sort=' + opts.toString());

		//remove duplicates ...
		let done = false;
		while (done == false) {
			done = true;
			for (let i=0; i < opts.length - 1; i++) {
				if (opts[i] == opts[i+1]) {
					opts.splice(i, 1);
					done = false;
					i--;
				}
			}
		} //alert('setSelect() debug after duplicate removal=' + opts.toString());

		//add options to select input element
		for (i=0; i< opts.length; i++) {
			// Create a new option
			let newOption = document.createElement("option");
			newOption.value = opts[i]; // Set the value
			newOption.text = opts[i]; // Set the text

			// Add the new option to the dropdown
			sel1.add(newOption);
		}


	} catch (error) {
		alert("setSelect() error:" + error.message);
	}
}


function rptProgram() {
	try {

		let val = sel1.options[sel1.selectedIndex].value;
		//alert('rptProgram val=' + val);
		if (val == 'none') { //unique name made for blank.
			val = '';
		}

		// another option was - let val2 = sel1.options[sel1.selectedIndex].text;
		//var text = e.options[e.selectedIndex].text;
		let out1 = 'search for program=' + val;
		for (let i = 0; i < tablesJson.length; i++) {
			const capTmp =  tablesJson[i][0]?.caption;
			for (let j = 1; j < tablesJson[i].length; j++) {
				const pn = tablesJson[i][j]?.programNm;
				let pnl = '';
				if (pn === null || pn === undefined) {
					pnl = '';
				} else {
					pnl = pn.toLowerCase(); //program name lowercase (pnl);
				}

				if (pnl == val) {
					//pn, day, start time, end time
					const day = tablesJson[i][j]?.day;
					const sTS = tablesJson[i][j]?.sTimeStart;
					const sTE = tablesJson[i][j]?.sTimeEnd;
					const wTS = tablesJson[i][j]?.wTimeStart;
					const wTE = tablesJson[i][j]?.wTimeEnd;

					out1 += '<br>' + day + ',thermostat=' + capTmp + ', summer start=' + sTS + ', summer end=' + sTE + ', winter start=' + wTS + ', winter end=' + wTE;
						//how to print whole line: JSON.stringify(tablesJson[i][j])
				}  //else {
					//out1 += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;not found ' + val + ', instead caption=' + capTmp + ', pnl=' + pnl + ', val=' + val;
					//}
			}
		}
		rpt1.innerHTML = out1; //alert(out1);
	} catch (error) {
		alert("handleSelection() error:" + error.message);
	}
}

