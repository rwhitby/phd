function HelpAssistant()
{
	
}

HelpAssistant.prototype.setup = function()
{
	this.controller.get('main-title').innerHTML = $L('Preware Homebrew Documentation');
	this.controller.get('version').innerHTML = $L('v0.0.0');
	this.controller.get('subTitle').innerHTML = $L('');	
	
	// setup menu
	this.controller.setupWidget(Mojo.Menu.appMenu, {omitDefaultItems: true}, {visible: false});
	
	// get elements
	this.versionElement = 	this.controller.get('version');
	this.subTitleElement =	this.controller.get('subTitle');
	
	this.versionElement.innerHTML = "v" + Mojo.Controller.appInfo.version;
	this.subTitleElement.innerHTML = $L('Please use these resources for assistance ...');;

	this.supportModel = 
	{
		items: []
	};
	
	this.supportModel.items.push({
		text: $L('Wiki Page'),
		detail: 'http://www.webos-internals.org/',
		Class: 'img_web',
		type: 'web'
	});
	this.supportModel.items.push({
		text: $L('Forums'),
		detail: 'http://www.precentral.net/',
		Class: 'img_web',
		type: 'web'
	});
	this.supportModel.items.push({
		text: $L('IRC Channel'),
		detail: 'http://webchat.freenode.net?channels=webos-internals',
		Class: 'img_web',
		type: 'web'
	});
	
	this.controller.setupWidget
	(
		'supportList', 
		{
			itemTemplate: "help/rowTemplate",
			swipeToDelete: false,
			reorderable: false
		},
		this.supportModel
	);
	
	this.controller.listen('supportList', Mojo.Event.listTap, this.listTapHandler.bindAsEventListener(this));
	
}
HelpAssistant.prototype.listTapHandler = function(event)
{
	switch (event.item.type)
	{
		case 'web':
			this.controller.serviceRequest("palm://com.palm.applicationManager", 
			{
				method: "open",
				parameters: 
				{
					id: 'com.palm.app.browser',
					params: 
					{
						target: event.item.detail
					}
				}
			});
			break;
			
		case 'email':
			this.controller.serviceRequest('palm://com.palm.applicationManager', 
			{
				method: 'open',
				parameters: 
				{
					target: 'mailto:' + event.item.address + "?subject=" + Mojo.appInfo.title + " " + event.item.subject
				}
			});
			break;
			
		case 'scene':
			this.controller.stageController.pushScene(event.item.detail);
			break;
	}
}

HelpAssistant.prototype.activate = function(event)
{
	if (this.controller.stageController.setWindowOrientation)
	{
    	this.controller.stageController.setWindowOrientation("up");
	}
}
HelpAssistant.prototype.deactivate = function(event) {}
HelpAssistant.prototype.cleanup = function(event)
{
	this.controller.stopListening('supportList', Mojo.Event.listTap, this.listTapHandler.bindAsEventListener(this));
}
