// get the cookies
var prefs = new preferenceCookie();
var vers =  new versionCookie();

var showtopic = new showtopicHandler();

// stage names
var mainStageName = 'phm-main';

function AppAssistant() {}

AppAssistant.prototype.handleLaunch = function(params)
{
    try {
	if (!params) {
	    var mainStageController = this.controller.getStageController(mainStageName);
	    if (mainStageController) {
		var scenes = mainStageController.getScenes();
		if (scenes[0].sceneName == 'main') {
		    mainStageController.popScenesTo('main');
		}
				
		mainStageController.activate();
	    }
	    else {
		this.controller.createStageWithCallback({name: mainStageName, lightweight: true},
							this.launchFirstScene.bind(this));
	    }
	}
    }
    catch (e) {
	Mojo.Log.logException(e, "AppAssistant#handleLaunch");
    }
};

AppAssistant.prototype.launchFirstScene = function(controller)
{
    vers.init();
    //    if (vers.showStartupScene()) {
	controller.pushScene('startup');
    //    }
    //    else {
	controller.pushScene('main');
    //    }
};

AppAssistant.prototype.cleanup = function()
{
};
