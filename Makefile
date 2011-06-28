APPID = org.preware.docs

package: clean
	palm-package --use-v1-format .

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
