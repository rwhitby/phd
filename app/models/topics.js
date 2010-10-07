var topics = {
    'what-is-homebrew': {
	name: "What Is Homebrew?",
	body:
'Homebrew is the name for an extensive collection of user-contributed applications, patches, themes and kernels for your webOS device that are distributed alongside the official Palm App Catalog.<br />' +
'<br />' +
'Many applications in the official Palm App Catalog started off as homebrew applications.<br />' +
'<br />' +
'Other homebrew applications use undocumented features which prevents them being included in the official Palm App Catalog.<br />' +
'<br />' +
'The best way to access this homebrew collection is to use Preware.<br />' +
'<br />' +
'Although Palm does not officially support homebrew, Palm has publicly stated that they support the ability for the homebrew community to develop and distribute homebrew applications.<br />' +
'<br />'
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
'2.) Start typing "webos2009006" (without quotes). A "Developer Mode" app icon will appear, tap on it.<br />' +
'<br />' +
'<img src="images/installing-preware/dev-mode-app.png" width="200" height="149" /><br />' +
'<br />' +
'3.) Set Developer Mode to <em>ON</em>.<br />' +
'<br />' +
'<img src="images/installing-preware/dev-mode-on.png" width="200" height="54" /><br />' +
'<br />' +
'4.) You will be asked to "Restart Your Device". This will reboot your phone.<br />' +
'<br />' +
'<img src="images/installing-preware/dev-mode-reset.png" width="200" height="153" /><br />' +
'<br />' +
'5.) Once your phone has booted, plug it into your home computer with the USB Cable. Select "Just Charge".<br />' +
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
'1.) Ensure you computer is up to data with the latest Java. On your PC, Mac, or Linux computer, click here to <a target="_blank" href="http://www.java.com/en/download/installed.jsp?detect=jre&amp;try=1">Verify Java</a>. Let it update Java as needed. Mac OS X users need to run /Application/Utilities/Java/Java Preferences and drag Java SE 6 to top of both lists, and exit. Windows 7 users may need <a href="http://forums.precentral.net/web-os-development/195043-setting-up-novacom-windows-7-easier-method.html">more help</a>.<br />' +
'<br />' +
'<img src="images/installing-preware/java-verify.png" width="250" height="164" /><br />' +
'<br />' +
'2.) <a href="http://images.precentral.net/sites/precentral.net/files/webos-homebrew-apps/wosqi/WebOSQuickInstall.jar">Download webOS Quick Install</a> from this link. When asked, click "Save". Save the file it in a location that you can remember, such as <em>My Documents</em> or your <em>Desktop</em>. If this direct link does not work, check the <a href="http://forums.precentral.net/canuck-software/228310-webos-quick-install-v3-14-a.html">official forum thread</a> for details. Please consider donating to the developer.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-save.png" width="250" height="175" /><br />' +
'<br />' +
'3.) When the download is complete, click Open.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-open.png" width="250" height="196" /><br />' +
'<br />' +
'4.) If this is the first time, it will alert you that webOS Doctor is needed. Select the webOS Doctor that is appropriate for your carrier and device.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-carrier.png" width="250" height="175" /><br />' +
'<img src="images/installing-preware/qi-model.png" width="250" height="176" /><br />' +
'<br />' +
'5.) Once your Carrier and Device are selected, click "Start Download". The webOS Doctor will now download.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-dr-download.png" width="250" height="144" /><br />' +
'<br />' +
'6.) It will automatically open to this screen once ready. Click on the blue "Down Arrow" icon.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-opening.png" width="250" height="154" /><br />' +
'<br />' +
'7.) A special select box will appear. At the top, choose the <span style="color:#0099CC; font-weight:bold">WebOS-Internals Feed (Pre/Pixi)</span> that is appropriate for your device.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-list-01.png" width="250" height="358" /><br />' +
'<br />' +
'8.) Check the box for Preware. Click "Download", then "Close".<br />' +
'<br />' +
'<img src="images/installing-preware/qi-list-02.png" width="250" height="357" /><br />' +
'<br />' +
'9.)  It will now show the app in the list. Click the "Install" button.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-opening-with-app.png" width="250" height="154" /><br />' +
'<br />' +
'10.) You can now close webOS Quick Install as well as unplug your phone from the computer.<br />' +
'<br />' +
'11.) It is recommended that you turn off Developer Mode at this point. Follow the same instructions in Stage 1, but set the switch to <em>OFF</em>.<br />' +
'<br />'
    },
    'homebrew-applications': {
	name: "Homebrew Applications",
	body:
"This is the body of the Homebrew Applications topic."
    },
    'webos-patches': {
	name: "Using Patches to Add Features",
	body:
"This is the body of the WebOS Patches topic."
    },
    'webos-themes': {
	name: "Personalise Your Device Theme",
	body:
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Stage 1: Enable Theme Feeds' +
'</div>' +
'<br />' +
'<strong>About:</strong> By default, theme feeds are disabled in Preware.  You must enable them before you can install a theme.<br />' +
'<br />' +
'<strong>Note:</strong> These functions are done on your phone.<br />' +
'<br />' +
'1.) Open Preware.<br />' +
'<br />' +
'2.) Select the "Manage Feeds" menu item.<br />' +
'<br />' +
'<img src="images/webos-themes/select-manage-feeds.png" width="200" /><br />' +
'<br />' +
'3.) Scroll down to locate the "precentral-themes" and "prethemer" feeds.<br />' +
'<br />' +
'<img src="images/webos-themes/locate-theme-feeds.png" width="200" /><br />' +
'<br />' +
'3.) Enable the "precentral-themes" and "prethemer" feeds.<br />' +
'<br />' +
'<img src="images/webos-themes/enable-theme-feeds.png" width="200" /><br />' +
'<br />' +
'4.) Backswipe to return to the main Preware screen, and update the package list.<br />' +
'<br />' +
'<img src="images/webos-themes/update-package-list.png" width="200" /><br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Stage 2: Choose Your Theme' +
'</div>' +
'<br />' +
'1.) There are many different categories of themes to choose from.<br />' +
'<br />' +
'<img src="images/webos-themes/choose-theme-category.png" width="200" /><br />' +
'<br />' +
'2.) Select a theme of your choice and install it.<br />' +
'<br />' +
'<img src="images/webos-themes/install-theme.png" width="200" /><br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Important Notes' +
'</div>' +
'<br />' +
'1.) You can only have one theme installed at a time.  If you wish to install another theme, you must first remove any installed theme.<br />' +
'<br />' +
'2.) Themes must always be removed before any webOS update.<br />' +
'<br />' +
'3.) Once you have settled on your chosen theme, you may wish to disable the theme feeds to reduce your Preware startup time.<br />' +
'<br />'
    },
    'custom-kernels': {
	name: "Overclocking & Custom Kernels",
	body:
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Stage 1: Installing Govnah' +
'</div>' +
'<br />' +
'<strong>About:</strong> Govnah is an application that allows you to configure a custom kernel (you will install a custom kernel later in this procedure).<br />' +
'<br />' +
'<strong>Note:</strong> These functions are done on your phone.<br />' +
'<br />' +
'1.) Run the Preware app on your phone. It will load feed information for about a minute.<br />' +
'<br />' +
'<img src="images/custom-kernels/run-preware-1.png" width="200" /><br />' +
'<br />' +
'<img src="images/custom-kernels/run-preware-2.png" width="200" /><br />' +
'<br />' +
'<img src="images/custom-kernels/run-preware-3.png" width="200" /><br />' +
'<br />' +
'2.) Once the program loads all the feeds. Type "Govnah" and hit the Enter key. Tap on Govnah when it shows up on the search results list.<br />' +
'<br />' +
'<img src="images/custom-kernels/install-govnah-1.png" width="200" /><br />' +
'<br />' +
'<img src="images/custom-kernels/install-govnah-2.png" width="200" /><br />' +
'<br />' +
'3.) Click install. You will see the progress wheel as the program installs. Click Ok when Preware tells you that the Application has finished installing.<br />' +
'<br />' +
'<img src="images/custom-kernels/install-govnah-3.png" width="200" /><br />' +
'<br />' +
'<img src="images/custom-kernels/install-govnah-4.png" width="200" /><br />' +
'<br />' +
'<img src="images/custom-kernels/install-govnah-5.png" width="200" /><br />' +
'<br />' +
'4.) Perform a back gesture to bring you to the previous screen of search results.<br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Stage 2: Installing UberKernel' +
'</div>' +
'<br />' +
'<strong>About:</strong> UberKernel is a custom kernel that allows you to overclock your device.<br />' +
'<br />' +
'<strong>Note:</strong> These functions are done on your phone.<br />' +
'<br />' +
'1.) Now search for Uberkernel. Select Uberkernel from the list and tap on it.<br />' +
'<br />' +
'<img src="images/custom-kernels/install-kernel-1.png" width="200" /><br />' +
'<br />' +
'2.) Tap the Install button. When Uberkernel finishes installing, restart your phone.<br />' +
'<br />' +
'<img src="images/custom-kernels/install-kernel-2.png" width="200" /><br />' +
'<br />' +
'<img src="images/custom-kernels/install-kernel-3.png" width="200" /><br />' +
'<br />' +
'<img src="images/custom-kernels/install-kernel-4.png" width="200" /><br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Stage 3: Configuring Govnah' +
'</div>' +
'<br />' +
'<strong>About:</strong> Govnah provides many different configuration options.  Here we will select the most commonly used configuration.<br />' +
'<br />' +
'<strong>Note:</strong> These functions are done on your phone.<br />' +
'<br />' +
'1.) When phone restarts, launch Govnah.<br />' +
'<br />' +
'<img src="images/custom-kernels/run-govnah-1.png" width="200" /><br />' +
'<br />' +
'2.) The program will launch. Tap on "I\'ve read this, let\'s continue..".<br />' +
'<br />' +
'<img src="images/custom-kernels/run-govnah-2.png" width="200" /><br />' +
'<br />' +
'3.) Tap on the Profile line.<br />' +
'<br />' +
'<img src="images/custom-kernels/run-govnah-3.png" width="200" /><br />' +
'<br />' +
'4.) Select Screenstate 500/1000 (This is a default profile that comes programmed into Govnah)<br />' +
'<br />' +
'<img src="images/custom-kernels/run-govnah-4.png" width="200" /><br />' +
'<br />' +
'5.) Govnah will now show that you are running the Screenstate 500/1000 profile, which means that your phone will be running at 1GHz with the screen on and 500MHz when the screen is off.<br />' +
'<br />' +
'<img src="images/custom-kernels/run-govnah-5.png" width="200" /><br />' +
'<br />' +
'6.) Close the program.<br />' +
'<br />'
    },
}
