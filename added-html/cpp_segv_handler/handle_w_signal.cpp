/* Handle an memory fault with a signal. main attempts a memory access violation to cause signal. */


#include <sstream>
#include <iostream>
#include <cstring> //strerror
		#include <csignal> //respond to Linux kill statement
#include "signalHandler.cpp"

/* This flag controls termination of the main loop */
volatile sig_atomic_t keep_going = 1;

int main(int argc, char *argv[]) {
std::string err; //error reporting

try {
	//respond to a segmentation fault with a signal
	struct sigaction new_action;
	sigemptyset (&new_action.sa_mask);
	new_action.sa_sigaction = sigaction_segv; //signalHandler;
	new_action.sa_flags = SA_RESTART;
	sigaction (SIGSEGV, &new_action, NULL);


 	while (keep_going) {
		std::cout << '\n' << __FILE__ << " is about to attempt an invalid memory write to activate a signal handler.";
		int *test = (int *)0x00000001;
		*test = 232;
	}
	std::cout << '\n' << __FILE__ << " has returned to main(). Main now ends by returning 0"; return(0);
} //end try
catch (std::string &msg) { std::cerr << __FILE__ << " exception: " << msg << "; returning 1"; return(1); } 
catch (std::exception &e) { std::cerr << __FILE__ << " exception: " << e.what() << "; returning 1"; return(1); }
catch (...) { std::cerr << __FILE__ << " exception: " << strerror(errno) << "; returning 1"; ; return(1); }
} //end main()

#ifndef SKIP
	// n/a
#endif
