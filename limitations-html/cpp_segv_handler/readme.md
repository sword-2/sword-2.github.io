# C/C++ memory safety

Caesar was once concerned about [C/C++ not being memory safe](https://media.defense.gov/2022/Nov/10/2003112742/-1/-1/0/CSI_SOFTWARE_MEMORY_SAFETY.PDF). Also, Caesar was encouraging programming languages with more memory safety with swift being one of the newer ones. Swift was investigated for this reason.

## Crash prevention

One investigation was done on C/C++ memory safety was since a lot of C/C++ programming history existed. It was observed that a signal handler on a 'segv' signal successfully recovered from an unsafe memory access without crashing the program. Two small co-located programs were retained from the effort - one that just crashes and the other which recovers.
The author who originated the example cautioned about using that signal handler though. Also, there was a warning when it was build with make, but it was run successfully.  Both were built by typing 'make'. 'make run1' was entered to run the program that just does a seg fault and crashes (core dump). 'make run2' was entered to run the second program that gracefully recovers using a signal handler.

## Anti-tamper protection (stealing passwords; malicious code)

At least for C/C++, the program radare2 easily reverse engineered a simple C/C++ object program file without source code. The radare2 version installed with the package manager (apt) was not the latest version (capability). Tutorials indicated it was possible one could perform malicious acts like stealing passwords, but this was not perused. At this point church concepts like exposing false teaching in our world (Jude 1:3-25) could be mentioned; Also, Exodus 20:15 said Thou shalt not steal (KJV).
	Reference(s):
		1. 
			title: main function not found in GCC compiled code
			host/proxy: reverseengineering.stackexchange.com
			OP: martsc1
		2.
			https://rderik.com/blog/using-radare2-to-patch-a-binary/

## Miscellaneous Vulnerability databases
	1.
		Title: NIST National Vulnerability Database
		url: https://nvd.nist.gov/vuln/search
	2.
		Author: MITRE
		Title: CVE Details The Ultimate security vulnerability database
		url: https://www.cvedetails.com/
