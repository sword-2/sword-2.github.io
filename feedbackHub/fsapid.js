<script>
//The example produced an error for the same directory that would work in the window.showOpenFilePicker()
//example adapted from https://www.slingacademy.com/article/manage-directories-and-paths-with-the-javascript-file-system-api/
//async and await keywords removed due to their potential to cause error in FS API.
//
const dirBtn = document.getElementById('dirBtn');


async function getDirectory() {
  // Check if the method is available in the window context
  if ('showDirectoryPicker' in window) {
    try {
		//await new Promise(r => setTimeout(r, 1000)); //see if it overcomes an error
      const dirHandle = await window.showDirectoryPicker(); //id, mode, startIn args per https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker
      alert('Directory selected:' + dirHandle);

      //return dirHandle;
    } catch (error) {
      alert('Error selecting directory:' + error);
    }
  } else {
    alert('Directory picker not supported in this browser.');
  }
}

dirBtn.addEventListener('click', getDirectory);
</script>
