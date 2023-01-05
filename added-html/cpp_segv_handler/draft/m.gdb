#debugging of main with gdb batch mode
set width 0
set height 0
set verbose off
#following needed to set breakpoint on shared library, which loads later on
set breakpoint pending on

#break at main won't print argc/argv, but next one will on __libc_start_main
#b main
#commands 1
#	backtrace
#	continue
#end


#argc/v undefined if doing b main. This was the next closest known alternative.
#This just to print argc, argv
b m2.cpp:13
commands 1
	p argc
	#To print an artificial array ...
	p *argv@argc
#	print "stopped on line 74, argc=%s", argc
#	backtrace
#	info breakpoints
#	info locals
#	info registers
	continue
end

#info locals will print the variables in constructor socket_c()
b m2.cpp:14
commands 2
#	backtrace
#	select-frame 1 #?no frame 1 until after a subroutine call
	p "test="
	p test
#	printf "\naddress=%s, port=%d\n", address, port #unable to print this way
	continue
end


catch throw
commands
	p "gdb caught an exception which was thrown somewhere"
	backtrace
#	select-frame 1 #?no frame if not having called a subroutine
	info locals
#	finish allowed the program to print its exception message
#	finish
#	print $_siginfo
end


#	printf "\nchoiceDest=%s\n", choiceDest
#	p soc->err
#	p soc->errSS
#	p soc->result
#	continue

#print 'about to print soc->err, errSS, & result'

#set args 0 '127.0.0.1' 80
#show args
#run 0 '127.0.0.1' 80

#printf "Note, however: in batch mode, arguments will be ignored!\n"
#run the program with the supplied command line arguments
run
