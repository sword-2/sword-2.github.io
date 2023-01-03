.DELETE_ON_ERROR:

include /home2/usr/local/make/include1
#preprocessor debug options: -D to #DEFINE and -g for preparation to run valgrind. 
debug=-g -D DEBUG

#optional debugging line to printout CXX ...
	#$(info $$CXX content: [${CXX}])

#output files
	out1 := segfault.out
	out2 := handle_w_signal.out


all: $(out1) $(out2) 

$(out1) : segfault.cpp Makefile
	$(CXX) $(debug) -D SKIP -g -Wall segfault.cpp -o $@ 2>&1

$(out2) : handle_w_signal.cpp signalHandler.cpp Makefile
	$(CXX) $(debug) -D SKIP -g -Wall handle_w_signal.cpp -o $@ 2>&1


.PHONY : run1
run1:
	./$(out1)

.PHONY : run2
run2:
	./$(out2)


.PHONY : clean
clean:
	@for i in *.out; do \
if [ -f $$i ]; then \rm $$i; fi; \
done;
	@if [ -f core ]; then \rm core; fi;
