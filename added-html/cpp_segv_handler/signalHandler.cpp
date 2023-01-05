//#define _GNU_SOURCE /* Bring REG_XXX names from /usr/include/sys/ucontext.h */
#include <unistd.h> //for write()
#include <ucontext.h>

extern volatile sig_atomic_t keep_going;


/* Copied from the following article
 	* Title: Can a C program continue execution after a signal is handled?
 	* OP: Nobilis
 	* host/proxy: stackoverflow.com

Many say not to use printf but it worked for a spot test
*/

static void sigaction_segv(int signal, siginfo_t *si, void *arg) {
	ucontext_t *ctx = (ucontext_t *)arg;

	/* We are on linux x86, the returning IP is stored in RIP (64bit) or EIP (32bit). In this example, the length of the offending instruction is 6 bytes.
	So we skip he offender ! */
#if __WORDSIZE == 64
	printf("\nCaught SIGSEGV, addr %p, RIP 0x%lx\n", si->si_addr, ctx->uc_mcontext.gregs[REG_RIP]);
	ctx->uc_mcontext.gregs[REG_RIP] += 6;
#else
	printf("\nCaught SIGSEGV, addr %p, RIP 0x%x\n", si->si_addr, ctx->uc_mcontext.gregs[REG_EIP]);
	ctx->uc_mcontext.gregs[REG_EIP] += 6;
#endif

	keep_going = 0; //global to tell main program to stop, something went wrong.
	printf("\nsignal handler about to return to main.");
} //end function


#ifndef SKIP
/* The function below was skipped because it just returned back to the same place in main to repeat segmentation fault, like an infinite loop.
*/
void infinite_loop(int signum) {
  try {
	write(1, "\nsignalHandler was called.", strlen("\nsignalHandler was called."));
	keep_going = 0;
	return; //exit(signum);
  } catch (...) {
	write(1, "\nsignalHandler in catch block", strlen("\nsignalHandler in catch block"));
	keep_going = 0;
	return; //exit(signum);
  }
} //end infinite loop()
#endif
