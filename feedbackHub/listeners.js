<script defer>
//defer till after page is loaded


//First iteration of tanach.us
tUSbtn.addEventListener('click', async () => {
  [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: 'JSON Files',
          accept: { 'application/json': ['.json'] },
        },
      ],
    });
  const file = await fileHandle.getFile();
  const contents = await file.text();
  const jsonData = JSON.parse(contents);
  loadTblTUS(jsonData); //example scripture file from an AI
});


transl.addEventListener('click', DoTransl); //Respond to translate button



</script>
