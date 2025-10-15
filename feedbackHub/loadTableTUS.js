<!--
<script>

// Function to translate text
async function translateText(text, targetLanguage) {
	alert('translateText() deactivated - this alert should not appear');
	const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`);
	const result = await response.json();
	return result[0][0][0]; // Extract translated text
}

</script>
-->

<script>
//defer till after page is loaded


function loadTblTUS(jD) { //jsonData (jD)
	try {
	alert("starting loadTblTUS(), it only loads one row to start for debugging.");
	//return

	tUsTabBdy.innerHTML = '';	// Clear existing rows in tbody
	//return `Hello, ${name}!`;
	for (let key in jD) {
		//alert("key=" + key + ", data=" + jsonData[key]);
		/* The AI said the File System API does not report directory path. Therefore, operator may have to do second selection of bibliography
		if (key == "book") {
			//alert("book=" + jsonData[key]);
			caption.innerText = jD[key];
		*/

	if (key == "No" ) {
 		tUscaption.innerText = jD[key];
	} else { //expect verse number keys
		//alert("debugging: versekey=" + key + ", verse value=" + jsonData[key]);

		const row = document.createElement('tr');
		const verseNo = document.createElement('td');
		verseNo.classList.add("notranslate");
		verseNo.textContent = key;

		//assemble separate words to a verse
			var vsTxt = ""
			for (let key2 in jD[key]) {
				//alert("jD[key][key2]=" + jD[key][key2]);
				for (let key3 in jD[key][key2]) { //in the objects w : Hebrew word
					const basicTxt = JSON.stringify(jD[key][key2][key3])
					const strippedString = basicTxt.slice(1, -1); //remove quotes off front and back. JSON.stringify added them to value
					//vsTxt += JSON.stringify(jD[key][key2][key3]) + " ";
					vsTxt += strippedString + " ";
					}
				}
			//});

        const verseText = document.createElement('td');
		verseText.classList.add("translate");
        verseText.textContent = vsTxt;

		/*
		//This was deactivated, browser compatibility might be a question.
		//verseText.setAttribute("lang", "he"); //The translation might not go if text added by javascript.
		var trTxt2;
		translateText(vsTxt, 'en') // Use language code (e.g., 'en', 'es')
			.then(translatedText => {
				trTxt2 = translatedText;
				})
			.catch(error => console.error("Translation error:", error))
        verseText.textContent = trTxt2;
		*/

		row.appendChild(verseNo);
        row.appendChild(verseText);
        tUsTabBdy.appendChild(row);
	} //end else
		if (key >=1 ) {
			return; //keep loop short for debugging
			}
  } //end for
  } catch (error) {
    // Handle the error
	statusErr.innerHTML += 
    alert("loadTblTUS() caught an error: " + error.message);
  }
}

</script>

