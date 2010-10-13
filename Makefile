package: clean
	palm-package .

test: package
	- palm-install -r org.preware.docs
	palm-install org.preware.docs_*.ipk
	palm-launch org.preware.docs

clean:
	find . -name '*~' -delete
	rm -f ipkgtmp*.tar.gz org.preware.docs_*.ipk
