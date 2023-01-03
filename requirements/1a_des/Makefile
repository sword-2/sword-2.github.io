#Makefile to build up document more efficiently

#An include to have the same variable definitions among several Makefiles
include make_stuff/include1

#default recipe for make without arguments
all: update_each_folder $(toc_relative) $(Ofile_rel)
#$(Ofile)

doc_home=$(shell pwd)
export $(doc_home) #hope to pass variable to the submakes
$(info $$doc_home is [${doc_home}]) #variable doesn't have a trailing slash
doc_dirs=$(sort $(shell find * -maxdepth 1 -type d ! -name make_stuff))

#Simple open of the relative Ofile
open:
	w3m $(Ofile_rel)

#Go thru each directory and update the [sub] file in that dir
.PHONY: update_each_folder
update_each_folder: $(doc_dirs)
	@for i in $(doc_dirs); do \
		$(MAKE) -C "$$i"; \
	done

#Ofile version when reative links work. Doesn't need dependencies
$(Ofile_rel): update_each_folder Makefile $(toc_relative)
	@if [ -f $@ ]; then rm $@; fi; \
	printf '<html><head>' >> $@; \
	printf '\n<title>Operator Description</title>' >> $@; \
	printf '</head><body>' >> $@; \
	printf '\n<h2>Operator Description</h2>' >> $@; \
	cat $(toc_relative)  >> $@; \
	printf '</body></html>' >> $@;

#Ofile version when relative links don't work like Android content provider.
#This format is less preferred since it is just one giant document.
#Dependent on all the subfiles
$(Ofile): update_each_folder Makefile $(toc_big_file)
	if [ -f $@ ]; then rm $@; fi; \
	printf '<html><head>' >> $@; \
	printf '\n<title>Operator Description</title>' >> $@; \
	printf '\n</head><body>' >> $@; \
	printf '\n<h2>Operator Description</h2>' >> $@; \
	cat $(toc_big_file) >> $@; \
	for i in $(doc_dirs); do \
		pfix=$${i%%_*}; \
		printf '%s' "$$pfix"; \
		cd "$$pfix"_*; \
		tmp2=$$(sed -n '/<body>/,/<\/body>/{/<body>/d;/<\/body>/d;p}' "$$pfix.html"); \
		printf '%s' "$$tmp2" >> $(Ofile_dirs); \
		printf '\n<a href=#toc>back to contents</a>' >> $(Ofile_dirs); \
		printf '\n' >> $(Ofile_dirs); \
		cd ..; \
	done; \
	printf '</body></html>' >> $@;

$(toc_relative): $(doc_dirs) Makefile
	@if [ -f $@ ]; then rm $@; fi; \
	printf '\n<table id=toc border=1>' >> $@; \
	printf '\n<caption>Contents</caption>' >> $@; \
	printf '\n<tr><th>No</th>' >> $@; \
	printf '\n<th>Name</th>' >> $@; \
	printf '\n<th>Link</th></tr>' >> $@; \
	for i in $(doc_dirs); do \
		pfix=$${i%%_*}; \
		sfix=$${i#*_}; \
		printf '<tr>' >> $@; \
		printf '\t<td>%s</td>' $$pfix >> $@; \
		printf '\t<td>%s</td>' $$sfix >> $@; \
		printf '\t<td><a href=%s/%s.html>Link</a></td>' $$i $$pfix >> $@; \
		printf '</tr>\n' >> $@; \
	done; \
	printf '</table>' >> $@;

$(toc_big_file): $(doc_dirs) Makefile
	@if [ -f $@ ]; then rm $@; fi; \
	printf '\n<table id=toc border=1>' >> $@; \
	printf '\n<caption>Contents</caption>' >> $@; \
	printf '\n<tr><th>No</th>' >> $@; \
	printf '\n<th>Name</th>' >> $@; \
	printf '\n<th>Link</th></tr>' >> $@; \
	for i in $(doc_dirs); do \
		pfix=$${i%%_*}; \
		sfix=$${i#*_}; \
		printf '<tr>' >> $@; \
		printf '\t<td>%s</td>' $$pfix >> $@; \
		printf '\t<td>%s</td>' $$sfix >> $@; \
		printf '\t<td><a href=#%s>Link</a></td>' $$pfix >> $@; \
		printf '</tr>\n' >> $@; \
	done; \
	printf '</table>' >> $@;


.PHONY: clean
clean:
	if [ -f $(Ofile) ]; then \rm $(Ofile); fi; \
	if [ -f $(Ofile_rel) ]; then \rm $(Ofile_rel); fi; \
	if [ -f $(toc_big_file) ]; then \rm  $(toc_big_file); fi; \
	if [ -f $(toc_relative) ]; then \rm $(toc_relative); fi; \
	for i in $(doc_dirs); do \
		$(MAKE) -C "$$i" $@; \
	done


