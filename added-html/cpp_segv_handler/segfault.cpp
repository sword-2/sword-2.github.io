/* test handling of invalid memory access. */


#include <sstream>
#include <iostream>
#include <cstring> //strerror



int main(int argc, char *argv[]) {
std::string err; //error reporting
try {
 int *test = (int *)0x00000001;
 *test = 232;
return(0);
} //end try
catch (std::string &msg) { std::cerr << __FILE__ << " is reporting an exception: " << msg; return(1); } 
catch (std::exception &e) { std::cerr << __FILE__ << " is reporting an exception: " << e.what(); return(1); }
catch (...) { std::cerr << __FILE__ << " is reporting an exception: " << strerror(errno); return(1); }
} //end main()

#ifndef SKIP
#endif
