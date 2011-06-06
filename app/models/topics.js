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
	name: "Installing Preware (Required)",
	body: 
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'Stage 1: Enable Developer Mode' +
'</div>' +
'<br />' +
'<strong>About:</strong> Developer Mode allows you to install homebrew applicatios, patches, themes and more directly on your device without the need for the App Catalog.<br />' +
'<br />' +
'<strong>Note:</strong> These functions are done on your phone.<br />' +
'<br />' +
'1.) Save all open files and close all apps on your phone.<br />' +
'<br />' +
'2.) Start typing "webos20090606" (without quotes). A "Developer Mode" app icon will appear, tap on it.<br />' +
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
'1.) Ensure you computer is up to data with the latest Java. On your PC, Mac, or Linux computer, go to http://bit.ly/phd-java-test to verify your Java version. Let it update Java as needed. Mac OS X users need to run /Application/Utilities/Java/Java Preferences and drag Java SE 6 to top of both lists, and exit.<br />' +
'<br />' +
'<img src="images/installing-preware/java-verify.png" width="250" height="164" /><br />' +
'<br />' +
'2.) Download webOS Quick Install from the <a href="http://forums.precentral.net/canuck-coding/274461-webos-quick-install-v4-1-1-a.html">official forum thread</a> (http://bit.ly/phd-wosqi4). When asked, click "Save". Save the file in a location that you can remember, such as <em>My Documents</em> or your <em>Desktop</em>. Please consider donating to the developer.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-save.png" width="250" height="175" /><br />' +
'<br />' +
'3.) When the download is complete, click Open.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-open.png" width="250" height="196" /><br />' +
'<br />' +
'4.) If you have not previously installed Novacom drivers on your computer, webOS Quick Install will alert you that the Novacom Driver is missing and needs to be installed.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-novacom-required.png" width="250" height="54" /><br />' +
'<br />' +
'Select Yes to allow the Novacom Driver to be downloaded and installed.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-novacom-downloading.png" width="250" height="160" /><br />' +
'<img src="images/installing-preware/qi-novacom-installed.png" width="250" height="160" /><br />' +
'<br />' +
'5.) If you forgot to enable developer mode, or do not have your device connected properly, you may see the following error messages. Enable developer mode and/or reconnect your device before relaunching webOS Quick Install.<br />' +
'<img src="images/installing-preware/qi-onlaunch-prompt.png" width="250" height="160" /><br />' +
'<img src="images/installing-preware/qi-duringusage-prompt.png" width="250" height="160" /><br />' +
'<br />' +
'6.) If webOS Quick Install is still unable to connect to your device, select the menu item "File->Reinstall Novacom". If all attempts to connect to your device fail and you have double-checked developer mode and physical connections (no USB hubs or extenders), please ask for assistance in the <a href="http://forums.precentral.net/canuck-coding/274461-webos-quick-install-v4-1-1-a.html">official forum thread</a> (http://bit.ly/phd-wosqi4).<br />' +
'7.) If all is well, webOS Quick Install will automatically open to this screen once ready. Click on the Online Repository button (the blue globe button below the green plus and red minus buttons).<br />' +
'<br />' +
'<img src="images/installing-preware/qi-opening.png" width="250" height="160" /><br />' +
'<br />' +
'8.) At this point, webOS Quick Install will download all the available package information from a number of online repositories hosted by WebOS Internals, PreCentral and some other sites.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-feed-loading.png" width="250" height="160" /><br />' +
'<br />' +
'9.) Type "Preware" in the search box and click the search button. The Preware package description will be shown. Click the "Install" button.<br />' +
'<br />' +
'<img src="images/installing-preware/qi-opening-with-app.png" width="250" height="183" /><br />' +
'<br />' +
'<img src="images/installing-preware/qi-preware-installing.png" width="250" height="183" /><br />' +
'<br />' +
'10.) You can now close webOS Quick Install as well as unplug your phone from the computer.<br />' +
'<br />' +
'11.) You can leave Developer Mode on if you intend on using WebOS Quick Install in the future, otherwise you can turn it off at this point. Follow the same instructions in Stage 1, but set the switch to <em>OFF</em>. You only need Developer Mode to install Preware. Once Preware is installed, you no longer need to put your phone in Developer Mode or connect it to your computer to install packages using Preware.<br />' +
'<br />' +
'12.) The WebOS Internals Wiki contains the <a href="http://www.webos-internals.org/wiki/Application:Preware">official documentation for Preware</a>. If you have questions about Preware, please read the <a href="http://m.forums.precentral.net/webos-internals/245792-preware-1-x.html">official forum thread</a> (http://bit.ly/phd-preware) and then ask for assistance there if your question is not already answered in the documentation or the forum thread.<br />' +
'<br />'
    },
    'homebrew-applications': {
	name: "Great Homebrew Applications",
	body:
'There are many great homebrew applications available in Preware.<br />' +
'<br />' +
'Here are some of the leading homebrew applications from WebOS Internals and other developers (more great applications will be added to this list in future updates):<br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'Save/Restore' +
'</div>' +
'<br />' +
'Save/Restore enables saving and restoring application data to and from the /media/internal/saverestore/ directory on a webOS device.<br />' +
'<br />' +
'<img src="images/homebrew-applications/saverestore.png" width="200" /><br />' +
'<br />' +
'The WebOS Internals Wiki contains the <a href="http://www.webos-internals.org/wiki/Application:SaveRestore">official documentation for Save/Restore</a>.<br />' +
'<br />' +
'If you have questions about Save/Restore, please read the <a href="http://m.forums.precentral.net/webos-internals/237558-save-restore-community-development.html">official forum thread</a> (http://bit.ly/phd-saverestore) and then ask for assistance there if your question is not already answered in the documentation or the forum thread.<br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'Mode Switcher' +
'</div>' +
'<br />' +
'Mode Switcher brings profile support to WebOS in the form of "modes" that can control nearly every available setting on the Palm Pre/Pixi.  These modes can be activated manually, or triggered automatically by a number of different methods.<br />' +
'<br />' +
'<img src="images/homebrew-applications/modeswitcher.png" width="200" /><br />' +
'<br />' +
'The WebOS Internals Wiki contains the <a href="http://www.webos-internals.org/wiki/Application:ModeSwitcher">official documentation for Mode Switcher</a>.<br />' +
'<br />' +
'If you have questions about Mode Switcher, please read the <a href="http://m.forums.precentral.net/enlightened-linux-solutions/260212-ms-mode-switcher-1-x.html">official forum thread</a> (http://bit.ly/phd-modeswitcher) and then ask for assistance there if your question is not already answered in the documentation or the forum thread.<br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'Dr. Battery' +
'</div>' +
'<br />' +
'Dr. Battery is an analysis and recalibration utility for your battery, allowing you to access the true capacity of your battery, to recalibrate your battery capacity measurement, and to get reliable info about remaining runtime.<br />' +
'<br />' +
'<img src="images/homebrew-applications/drbattery.png" width="200" /><br />' +
'<br />' +
'If you have questions about Dr. Battery, please read the <a href="http://m.forums.precentral.net/homebrew-apps/260947-dr-battery.html">official forum thread</a> (http://bit.ly/phd-drbattery) and then ask for assistance there if your question is not already answered in the forum thread.<br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'wIRC' +
'</div>' +
'<br />' +
'wIRC is the premier native webOS IRC client.  If you want to chat to the WebOS Internals developers in the #webos-internals IRC channel, or other webOS developers in the #webos IRC channel, this is the app for you.<br />' +
'<br />' +
'<img src="images/homebrew-applications/wirc.png" width="200" /><br />' +
'<br />' +
'The WebOS Internals Wiki contains the <a href="http://www.webos-internals.org/wiki/Application:wIRC">official documentation for wIRC</a>.<br />' +
'<br />' +
'If you have questions about wIRC, please read the <a href="http://m.forums.precentral.net/webos-internals/213722-wirc-webos-irc-client.html">official forum thread</a> (http://bit.ly/phd-wirc) and then ask for assistance there if your question is not already answered in the documentation or the forum thread.<br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'Terminal' +
'</div>' +
'<br />' +
'Terminal is a command line terminal for webOS, enabling you to get complete "root" access to your device.  Unfortunately, Terminal is not operational on webOS 2.0 yet.<br />' +
'<br />' +
'<img src="images/homebrew-applications/terminal.png" width="200" /><br />' +
'<br />' +
'The WebOS Internals Wiki contains the <a href="http://www.webos-internals.org/wiki/Application:Terminal">official documentation for Terminal</a>.<br />' +
'<br />' +
'If you have questions about Terminal, please read the <a href="http://m.forums.precentral.net/webos-internals/224502-terminal-app.html">official forum thread</a> (http://bit.ly/phd-terminal) and then ask for assistance there if your question is not already answered in the documentation or the forum thread.<br />' +
'<br />'
    },
    'webos-patches': {
	name: "Using Patches to Add Features",
	body:
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Stage 1: Choose Your Patch' +
'</div>' +
'<br />' +
'1.) There are many different categories of patches to choose from.<br />' +
'<br />' +
'<img src="images/webos-patches/select-patch-category.png" width="200" /><br />' +
'<br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Stage 2: Install Your Patch' +
'</div>' +
'<br />' +
'1.) Select a patch of your choice and install it.<br />' +
'<br />' +
'<img src="images/webos-patches/select-patch.png" width="200" /><br />' +
'<br />' +
'2.) Allow any required dependencies to be installed.<br />' +
'<br />' +
'<img src="images/webos-patches/install-patch-dependencies.png" width="200" /><br />' +
'<br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Stage 3: Restart Luna' +
'</div>' +
'<br />' +
'1.) Restart Luna to allow the patch to take effect.<br />' +
'<br />' +
'<img src="images/webos-patches/restart-luna.png" width="200" /><br />' +
'<br />' +
'<br />' +
'<div style="background-color:#333333; color:#FFFFFF; font-weight:bold; padding:4px; -webkit-border-radius: 5px;">' +
'  Important Notes' +
'</div>' +
'<br />' +
'1.) Most patches will update automatically after any webOS update, but there are some patches which must be uninstalled before each webOS update.  Refer to <a href="http://m.forums.precentral.net/webos-patches/253860-attention-patches-must-removed-prior-ota-update.html">this thread</a> (http://bit.ly/phd-removepatches) on the PreCentral forums for details.<br />' +
'<br />' +
'2.) If you have any questions about a particular patch, you can often find an existing forum thread for the patch in the <a href="http://m.forums.precentral.net/webos-patches/">webOS Patches Forum</a> (http://bit.ly/phd-webospatches).<br />' +
'<br />'
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
'<br />' +
'4.) If you have any questions about a particular theme, you can often find an existing forum thread for the theme in the <a href="http://m.forums.precentral.net/webos-themes/">webOS Themes Forum</a> (http://bit.ly/phd-webosthemes).<br />' +
'<br />'
    },
    'custom-kernels': {
	name: "Overclocking & Custom Kernels",
	body:
'<strong>Note that overclocking is very likely to <a href=http://developer.palm.com/blog/2010/03/a-statement-on-the-\
overclocking-patches/>void your warranty</a> if things go wrong.</strong>' +
'<br />' +
'<br />' +
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
'4.) For the Palm Pre/Pre+, select Screenstate 500/1000 (this is a default profile that comes programmed into Govnah). Note that overclocking to 1GHz is only available on the Palm Pre/Pre+.  For the Palm Pixi/Pixi+, select OnDemandTcl 806 (the Pixi/Pixi+ has an 806.4MHz overclocking limit, and does not have the screenstate option available). There is no stable overclocking solution publicly available yet for the Palm Pre 2, but WebOS Internals is currently testing 1.4GHz overclocking code for stability.<br />' +
'<br />' +
'<img src="images/custom-kernels/run-govnah-4.png" width="200" /><br />' +
'<br />' +
'5.) For the Palm Pre/Pre+, Govnah will now show that you are running the Screenstate 500/1000 profile, which means that your phone will be running at 1GHz with the screen on and 500MHz when the screen is off. For the Palm Pixi/Pixi+, Govnah will show that you are running the OnDemandTcl 806 profile, which means that your phone will speed up to 806.4MHz when under load, but clock back down to 122.8MHz when not under load.<br />' +
'<br />' +
'<img src="images/custom-kernels/run-govnah-5.png" width="200" /><br />' +
'<br />' +
'6.) Close the Govnah program (the kernel operates independently in the background, so the Govnah program does not need to be kept open).<br />' +
'<br />' +
'7.) The WebOS Internals Wiki contains the <a href="http://www.webos-internals.org/wiki/Application:Govnah">official documentation for Govnah</a>. If you have questions about Govnah, please read the <a href="http://m.forums.precentral.net/webos-internals/244701-govnah.html">official forum thread</a> (http://bit.ly/phd-govnah) and then ask for assistance there if your question is not already answered in the documentation or the forum thread.<br />' +
'<br />' +
'8.) The WebOS Internals Wiki also contains the <a href="http://www.webos-internals.org/wiki/Application:UberKernel">official documentation for UberKernel</a>. If you have questions about UberKernel, please read the <a href="http://m.forums.precentral.net/webos-internals/242728-webos-internals-uber-kernel.html">official forum thread</a> (http://bit.ly/phd-uberkernel) and then ask for assistance there if your question is not already answered in the documentation or the forum thread.<br />' +
'<br />'
    },
}
