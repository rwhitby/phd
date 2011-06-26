function TopicAssistant(topic, popped) {
    /* this is the creator function for your scene assistant object. It will be passed all the 
       additional parameters (after the scene name) that were passed to pushScene. The reference
       to the scene controller (this.controller) has not be established yet, so any initialization
       that needs the scene controller should be done in the setup function below. */

    // setup menu
    this.menuModel = {
	visible: true,
	items: []
    }
	
    this.topic = topic;
    this.popped = popped;
};

TopicAssistant.prototype.aboutToActivate = function(callback) {
    callback.defer();  
}

TopicAssistant.prototype.setup = function() {
    // set theme because this can be the first scene pushed
    var deviceTheme = '';
    if (Mojo.Environment.DeviceInfo.modelNameAscii == 'Pixi' ||
	Mojo.Environment.DeviceInfo.modelNameAscii == 'Veer')
	deviceTheme += ' small-device';
    if (Mojo.Environment.DeviceInfo.modelNameAscii == 'TouchPad' ||
	Mojo.Environment.DeviceInfo.modelNameAscii == 'Emulator')
	deviceTheme += ' no-gesture';
    this.controller.document.body.className = prefs.get().theme + deviceTheme;
	
    // setup menu
    this.menuModel.items = [];
    
    this.menuModel.items.push({
	    label: $L("Help"),
		command: 'do-help'
		});
	
    this.controller.setupWidget(Mojo.Menu.appMenu, { omitDefaultItems: true }, this.menuModel);
    
    this.titleElement =		this.controller.get('topic-title');
    this.bodyElement =		this.controller.get('topic-body');
    this.popButtonElement =	this.controller.get('popButton');
    this.popButtonPressed =	this.popButtonPressed.bindAsEventListener(this);
    
    this.titleElement.update(topics[this.topic].name);
    this.bodyElement.innerHTML = topics[this.topic].body;
    
    // setup back tap
    this.backElement = this.controller.get('back');
    this.backTapHandler = this.backTap.bindAsEventListener(this);
    this.controller.listen(this.backElement, Mojo.Event.tap, this.backTapHandler);

    if (this.popped) {
	this.backElement.hide();
	this.popButtonElement.style.display = 'none';
    }
    else {
	this.controller.listen(this.popButtonElement, Mojo.Event.tap, this.popButtonPressed);
    }
};

TopicAssistant.prototype.popButtonPressed = function(event)
{
    showtopic.newScene(this, this.topic, true);
    this.controller.stageController.popScene();
}

TopicAssistant.prototype.backTap = function(event)
{
    this.controller.stageController.popScene();
};

TopicAssistant.prototype.handleCommand = function(event)
{
    if (event.type == Mojo.Event.command) {
	switch (event.command) {
	case 'do-help':
	this.controller.stageController.pushScene('help');
	break;
	}
    }
}

TopicAssistant.prototype.activate = function(event) {
    /* put in event handlers here that should only be in effect when this scene is active. For
       example, key handlers that are observing the document */
    if (this.controller.stageController.setWindowOrientation) {
	this.controller.stageController.setWindowOrientation("free");
    }
};

TopicAssistant.prototype.deactivate = function(event) {
    /* remove any event handlers you added in activate and do any other cleanup that should happen before
       this scene is popped or another scene is pushed on top */
    if (this.controller.stageController.setWindowOrientation) {
	if (Mojo.Environment.DeviceInfo.modelNameAscii != 'TouchPad' &&
	    Mojo.Environment.DeviceInfo.modelNameAscii != 'Emulator')
	    this.controller.stageController.setWindowOrientation("up");
    }
};

TopicAssistant.prototype.cleanup = function(event) {
    /* this function should do any cleanup needed before the scene is destroyed as 
       a result of being popped off the scene stack */
    this.controller.stopListening(this.backElement, Mojo.Event.tap, this.backTapHandler);
};
