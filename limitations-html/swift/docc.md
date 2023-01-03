<html>
<head></head>
<body>
<h1>Swift document compiler (docc)</h1>

<p>The docc output file was observed to require operation of JavaScript. JavaScript was great for many user environments. But it was not good for at least one local terminal software development environment. The one terminal environment Ubuntu 20.04 server used terminal browsers like w3m and elinks, and these didn't do JavaScript.</p>

<p>A html2text program was operated in the hopes of converting the docc output to text for a text editor (vim, nano, etc), but it didn't work. A similar JavaScript error was reported just like the terminal browsers.</p> 

<p>Some internet searching did not find a way to turn off the JavaScript for docc. It was already known how to turn it off JavaScript in doxygen, using the HTML_DYNAMIC_MENUS tag. For this reason, doxygen was being operated instead of docc.</p>
</body></html>
