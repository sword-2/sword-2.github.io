include ../make_stuff/include1

Lfile=1.html #Local Ofile

src := $(shell find * -type f ! -name Makefile ! -name $(Lfile) ! -name toc)

all: $(Lfile)

#update sub-file by assembling some local files
#It doesn't have links back to table of contents
$(Lfile): $(src) toc Makefile
	@if [ -f $@ ]; then rm $@; fi; \
	printf '\n<html><head>' >> $@; \
	printf '\n<title>table 1 concept</title>' >> $@; \
	printf '\n</head><body>' >> $@; \
	printf '\n<h2 id=1>Concept(s)</h2>' >> $@; \
	cat toc >> $@; \
	printf '\n<tr>' >> $@; \
	for i in $(src); do \
		printf '\n' >> $@; \
		cat $$i >> $@; \
		printf '\n' >> $@; \
	done; \
	printf '\n</body></html>' >> $@;

toc:
	@if [ -f toc ]; then rm toc; fi; \
	printf '\n<table id=toc1 border=1>' >> $@; \
	printf '\n<caption>sub-contents for 1 concept</caption>' >> $@; \
	printf '\n<tr>' >> $@; \
	printf '\n<th>No</th>' >> $@; \
	printf '\n<th>name</th>' >> $@; \
	printf '\n<th>link</th>' >> $@; \
	printf '\n</tr>' >> $@; \
	for i in $(src); do \
		pfix=$${i%%_*}; \
		sfix=$${i#*_}; \
		printf '<tr>' >> $@; \
		printf '\t<td>%s</td>' $$pfix >> $@; \
		printf '\t<td>%s</td>' $$sfix >> $@; \
		printf '\t<td><a href=#%s>Link</a></td>' $$pfix >> $@; \
		printf '</tr>\n' >> $@; \
	done; \
	printf '\n</table>' >> $@;

.PHONY: clean
clean:
	@if [ -f $(Lfile) ]; then \rm $(Lfile); fi; \
	if [ -f toc ]; then \rm toc; fi;
