# README

## Why the project is useful? 

personal use. It might become a lesson learned good or bad in the future. 

## What can be done with the project.

n/a

## How can the project be used?

n/a

## Comments

The repo's are just personal notes. Nothing represents The [SWORD project](https://crosswire.org/svn/sword/trunk). The programming skills and abilities of past and current SWORD programmers exceed this repo. Also, the pastor was not consulted to verify everything is correct.

Many times, but not always, code was adapted from posts other's had on the internet whether a blog, stackoverflow, Apple forum, etc. Usually code was modified a little or combined with other code scraps from another blog. Attempts to start some documents included ...

- doxygen [link](https://sword-2.github.io/html/html/index.html).
- incomplete draft of [requirements](https://sword-2.github.io/requirements/1a_des/o_des_rel.html).

## Limitations

Perceived limitations follows ...
- [Memory safety concern and investigation for C/C++](https://sword-2.github.io/limitations-html/cpp_segv_handler/index.html).
- [swift document compiler (docc)](https://sword-2.github.io/limitations-html/swift/docc.html).


### doxygen
The Doxyfile INPUT tag depends on an environment variable called SWORDPATH. One was pre-loaded in the shell's .profile as shown in the line(s) of code below.
	SWORDPATH=/home2/usr/local/bible; export SWORDPATH
A common path like /home/usr/local or another path can work. The /home2 path was just a different partition and out of scope.

The Doxyfile originally from the SWORD trunk was updated to remove obsolete tags relative to a newer version doxygen version operated in 2022. An experiment was done to make standalone .dox files including a mainpage.dox to see if it could replace the \mainpage content formerly in include/swmgr.h. 



