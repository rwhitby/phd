var topics = {
    'what-is-homebrew': {
	name: "What Is Homebrew?",
	body:
	'This is the body of the What Is Homebrew topic.' +
	'It has a <a href="http://www.preware.org/">link</a> in it too.' +
	'It has an <img src="icon.png" alt="image" /> in it too.'
    },
    'installing-preware': {
	name: "Installing Preware",
	body: 
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Stage 1: Enable Developer Mode' +
'</div>' +
'<br />' +
'<strong>About:</strong> Developer Mode allows you to install apps, patches, and more directly on your device without the need for the App Catalog.<br />' +
'<br />' +
'<strong>Note:</strong> These functions are done on your phone.<br />' +
'<br />' +
'1.) Save all open files and close all apps on your phone.<br />' +
'<br />' +
'2.) ' +
'Start typing &quot;webos2009006&quot; (without quotes). A &quot;Developer Mode&quot; app icon will appear, tap on it.<br>' +
'<br />' +
'<img src="images/installing-preware/dev-mode-app.png" width="200" height="149" /><br />' +
'<br />' +
'3.) Set Developer Mode to <em>ON.</em><br>' +
'<br />' +
'<img src="images/installing-preware/dev-mode-on.png" width="200" height="54" /><br />' +
'<br />' +
'4.) You will be asked to &quot;Restart Your Device&quot;. This will reboot your phone.<br>' +
'<br />' +
'<img src="images/installing-preware/dev-mode-reset.png" width="200" height="153" /><br />' +
'<br />' +
'5.) Once your phone has booted, plug it into your home computer with the USB Cable. Select &quot;Just Charge&quot;.<br>' +
'<br />' +
'<img src="images/installing-preware/dev-mode-charge.png" width="200" height="116" /><br />' +
'<br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Stage 2: webOS Quick Install' +
'</div>' +
'<br />' +
'<strong>About:</strong> webOS Quick Install is a utility used to quickly install apps and other things to your device.<br />' +
'<br />' +
'<strong>Note:</strong> These functions are done on your home computer.<br />' +
'<br />' +
'<br />' +
'1.) Ensure you computer is up to data with the latest Java. On your PC, Mac, or Linux computer, click here to <a target="_blank" href="http://www.java.com/en/download/installed.jsp?detect=jre&amp;try=1">Verify Java</a>. Let it update Java as needed. Mac OS X users need to run /Application/Utilities/Java/Java Preferences and drag Java SE 6 to top of both lists, and exit. Windows 7 users may need <a href="http://forums.precentral.net/web-os-development/195043-setting-up-novacom-windows-7-easier-method.html">more help</a>.<br>' +
'<br />' +
'<img src="images/installing-preware/java-verify.png" width="250" height="164" /><br />' +
'<br />' +
'2.) <a href="http://images.precentral.net/sites/precentral.net/files/webos-homebrew-apps/wosqi/WebOSQuickInstall.jar">Download webOS Quick Install</a> from this link. When asked, click &quot;Save&quot;. Save the file it in a location that you can remember, such as <em>My Documents</em> or your <em>Desktop</em>. If this direct link does not work, check the <a href="http://forums.precentral.net/canuck-software/228310-webos-quick-install-v3-14-a.html">official forum thread</a> for details.<br>Please consider donating to the developer.' +
'<br />' +
'<img src="images/installing-preware/qi-save.png" width="250" height="175" /><br />' +
'<br />' +
'3.) When the download is complete, click Open.<br>' +
'<br />' +
'<img src="images/installing-preware/qi-open.png" width="250" height="196" /><br />' +
'<br />' +
'4.) If this is the first time, it will alert you that webOS Doctor is needed. Select the webOS Doctor that is appropriate for your carrier and device.<br>' +
'<br />' +
'<img src="images/installing-preware/qi-carrier.png" width="250" height="175" /><br />' +
'<img src="images/installing-preware/qi-model.png" width="250" height="176" /><br />' +
'<br />' +
'5.) Once your Carrier and Device are selected, click &quot;Start Download&quot;. The webOS Doctor will now download.<br>' +
'<br />' +
'<img src="images/installing-preware/qi-dr-download.png" width="250" height="144" /><br />' +
'<br />' +
'6.) It will automatically open to this screen once ready. Click on the blue &quot;Down Arrow&quot; icon.<br>' +
'<br />' +
'<img src="images/installing-preware/qi-opening.png" width="250" height="154" /><br />' +
'<br />' +
'7.) A special select box will appear. At the top, choose the <span style="color:#0099CC; font-weight:bold">WebOS-Internals Feed (Pre/Pixi)</span> that is appropriate for your device.<br>' +
'<br />' +
'<img src="images/installing-preware/qi-list-01.png" width="250" height="358" /><br />' +
'<br />' +
'8.) Check the box for Preware. Click &quot;Download&quot;, then &quot;Close&quot;.<br>' +
'<br />' +
'<img src="images/installing-preware/qi-list-02.png" width="250" height="357" /><br />' +
'<br />' +
'9.)  It will now show the app in the list. Click the &quot;Install&quot; button.<br>' +
'<br />' +
'<img src="images/installing-preware/qi-opening-with-app.png" width="250" height="154" /><br />' +
'<br />' +
'10.) You can now close webOS Quick Install as well as unplug your phone from the computer.<br />' +
'<br />' +
'11.) It is recommended that you turn off Developer Mode at this point. Follow the same instructions in Stage 1, but set the switch to <em>OFF</em>.'
    },
    'homebrew-applications': {
	name: "Homebrew Applications",
	body: "This is the body of the Homebrew Applications topic."
    },
    'webos-patches': {
	name: "Using Patches to Add Features",
	body: "This is the body of the WebOS Patches topic."
    },
    'webos-themes': {
	name: "Personalise Your Device Theme",
	body: "This is the body of the WebOS Themes topic."
    },
    'custom-kernels': {
	name: "Overclocking & Custom Kernels",
	body: "This is the body of the Custom Kernels topic."
    },
}
