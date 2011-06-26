APPID = org.preware.docs

package: clean
	palm-package .

test: package
	- palm-install -r ${APPID}
	palm-install ${APPID}_*.ipk
	palm-launch ${APPID}

install: package
	palm-install ${APPID}_*.ipk
	palm-launch ${APPID}

clean:
	find . -name '*~' -delete
	rm -f ipkgtmp*.tar.gz ${APPID}_*.ipk

clobber: clean
