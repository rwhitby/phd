function StartupAssistant(changelog)
{
    this.justChangelog = changelog;
	
    // on first start, this message is displayed, along with the current version message from below
    this.firstMessage = $L('The definitive source for information about Preware, WebOS Internals and great Homebrew Applications.<br><br>Rod Whitby (the founder/lead of WebOS Internals, and architect of the Preware webOS homebrew ecosystem) has gathered together an extensive collection of official documentation about the Preware Homebrew Installer and other Homebrew Applications, Patches, Themes and Custom Kernels.');
	
    this.secondMessage = $L('We hope you enjoy learning about Preware & Homebrew Applications.<br><br>You can find more information about Preware and WebOS Internals at <a href=http://www.webos-internals.org/>http://www.webos-internals.org/</a><br><br>The latest additions and changes to Preware Homebrew Documentation are detailed in the section below:');
	
    // on new version start
    this.newMessages =
	[
	 // Don't forget the comma on all but the last entry
	 { version: '3.0.0', log: [ 'Packaged both Mojo and Enyo versions in a multi-platform package' ] },
	 { version: '2.0.1', log: [ 'Clarified that Just Charge is renamed to Cancel on a TouchPad' ] },
	 { version: '2.0.0', log: [ 'Now compatible with the HP TouchPad at full screen resolution',
				    'Updated Preware installation information for WebOS Quick Install 4.x',
				    'Removed the Terminal app, as it is not compatible with webOS 2.0 or later',
				    'Allows free rotation when viewing topics to enlarge screenshots'
				    ] },
	 { version: '1.1.1', log: [ 'Added overclocking information for the Palm Pixi/Pixi+ release of UberKernel',
				    'Added installation information for webOS 2.0 on the Pre 2',
				    'Noted that Terminal is not operational on webOS 2.0'
				    ] },
	 { version: '1.1.0', log: [ 'Added a Changelog button to the Help scene',
				    'Noted that Developer Mode is only required to install Preware',
				    'Added official documentation and forum thread links for all sections',
				    'Added overclocking information for Palm Pixi/Pixi+ and Palm Pre 2'
				    ] },
	 { version: '1.0.2', log: [ 'Improved topic loading code to give smoother transitions',
				    'Added some more troubleshooting hints for webOS Quick Install',
				    'Noted that Govnah does not need to be kept open',
				    'Added screenshots for the featured apps',
				    'Added a direct link to the PHD forum thread in the Help scene',
				    'Added webOS-related support sites to the Help scene'
				    ] },
	 { version: '1.0.1', log: [ 'Fixed a couple of typos (thanks to everyone who reported them)',
				    'Provided bit.ly links for all URLs destined for the desktop computer' ] },
	 { version: '1.0.0', log: [ 'Initial Release' ] }
	];
	
    // setup menu
    this.menuModel =
	{
	    visible: true,
	    items:
	    [
		    {
				label: $L("Help"),
				command: 'do-help'
		    }
	     ]
	};
	
    // setup command menu
    this.cmdMenuModel =
	{
	    visible: false, 
	    items:
		[
			{},
			{
				label: $L("I'm eager to learn! Let's continue ..."),
				command: 'do-continue'
			},
			{}
		]
	};
};

StartupAssistant.prototype.setup = function()
{
    // set theme because this can be the first scene pushed
    var deviceTheme = '';
    if (Mojo.Environment.DeviceInfo.modelNameAscii == 'Pixi' ||
	Mojo.Environment.DeviceInfo.modelNameAscii == 'Veer')
	deviceTheme += ' small-device';
    if (Mojo.Environment.DeviceInfo.modelNameAscii == 'TouchPad' ||
	Mojo.Environment.DeviceInfo.modelNameAscii == 'Emulator')
	deviceTheme += ' no-gesture';
    this.controller.document.body.className = prefs.get().theme + deviceTheme;
	
    // get elements
    this.titleContainer = this.controller.get('title');
    this.dataContainer =  this.controller.get('data');

    if (Mojo.Environment.DeviceInfo.modelNameAscii == 'TouchPad' ||
	Mojo.Environment.DeviceInfo.modelNameAscii == 'Emulator')
	this.backElement = this.controller.get('back');
    else
	this.backElement = this.controller.get('header');
	
    // set title
    if (this.justChangelog) {
	this.titleContainer.innerHTML = $L('Changelog');
	// setup back tap
	this.backTapHandler = this.backTap.bindAsEventListener(this);
	this.controller.listen(this.backElement, Mojo.Event.tap, this.backTapHandler);
    }
    else {
	this.controller.get('back').hide();
	if (vers.isFirst) {
	    this.titleContainer.innerHTML = $L('Preware Homebrew Documentation');
	}
	else if (vers.isNew) {
	    this.titleContainer.innerHTML = $L('Preware Homebrew Documentation');
	}
    }
	
	
    // build data
    var html = '';
    if (this.justChangelog) {
	for (var m = 0; m < this.newMessages.length; m++) {
	    html += Mojo.View.render({object: {title: 'v' + this.newMessages[m].version}, template: 'startup/changeLog'});
	    html += '<ul>';
	    for (var l = 0; l < this.newMessages[m].log.length; l++) {
		html += '<li>' + this.newMessages[m].log[l] + '</li>';
	    }
	    html += '</ul>';
	}
    }
    else {
	if (vers.isFirst) {
	    html += '<div class="text">' + this.firstMessage + '</div>';
	}
	if (vers.isNew) {
	    html += '<div class="text">' + this.secondMessage + '</div>';
	    for (var m = 0; m < this.newMessages.length; m++) {
		html += Mojo.View.render({object: {title: 'v' + this.newMessages[m].version}, template: 'startup/changeLog'});
		html += '<ul>';
		for (var l = 0; l < this.newMessages[m].log.length; l++) {
		    html += '<li>' + this.newMessages[m].log[l] + '</li>';
		}
		html += '</ul>';
	    }
	}
    }
    
    // set data
    this.dataContainer.innerHTML = html;
	
	
    // setup menu
    this.controller.setupWidget(Mojo.Menu.appMenu, { omitDefaultItems: true }, this.menuModel);
	
    // set command menu
    if (!this.justChangelog) {
	this.controller.setupWidget(Mojo.Menu.commandMenu, { menuClass: 'no-fade' }, this.cmdMenuModel);
    }
	
    // set this scene's default transition
    this.controller.setDefaultTransition(Mojo.Transition.zoomFade);
};

StartupAssistant.prototype.activate = function(event)
{
    if (!this.justChangelog) {
	// start continue button timer
	this.timer = this.controller.window.setTimeout(this.showContinue.bind(this), 5 * 1000);
    }
};

StartupAssistant.prototype.showContinue = function()
{
    // show the command menu
    this.controller.setMenuVisible(Mojo.Menu.commandMenu, true);
};

StartupAssistant.prototype.backTap = function(event)
{
    if (this.justChangelog) {
	this.controller.stageController.popScene();
    }
};

StartupAssistant.prototype.handleCommand = function(event)
{
    if (event.type == Mojo.Event.command) {
	switch (event.command) {
	case 'do-continue':
	this.controller.stageController.swapScene({name: 'main', transition: Mojo.Transition.crossFade});
	break;
			
	case 'do-prefs':
	this.controller.stageController.pushScene('preferences');
	break;
			
	case 'do-help':
	this.controller.stageController.pushScene('help');
	break;
	}
    }
}
