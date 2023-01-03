include ../make_stuff/include1

Lfile=8a.html #Local Ofile

src := $(shell find ./* -type f ! -name Makefile ! -name $(Lfile))

all: $(Lfile)

#update sub-file by assembling some local files
#It doesn't have links back to table of contents
$(Lfile): $(src) Makefile
	@if [ -f $@ ]; then rm $@; fi; \
	printf '\n<html><head>' >> $@; \
	printf '\n<title>Integrated Architecture Products</title>' >> $@; \
	printf '\n</head><body>' >> $@; \
	printf '\n<h2 id=8a>Integrated Architecture Products</h2>' >>  $@; \
	printf '\n<tr>' >> $@; \
	for i in $(src); do \
		printf '\n' >> $@; \
		cat $$i >> $@; \
		printf '\n' >> $@; \
	done; \
	printf '\n</body></html>' >> $@;

.PHONY: clean
clean:
	@if [ -f $(Lfile) ]; then \rm $(Lfile); fi
