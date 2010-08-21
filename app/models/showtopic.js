function showtopicHandler() {};

showtopicHandler.prototype.newScene = function(assistant, topic, popit)
{
    try {
	var stageName = 'showtopic-' + topic;
	var stageController = Mojo.Controller.appController.getStageController(stageName);
		
	if (stageController && stageController.activeScene().sceneName == topic) {
	    stageController.activate();
	    return;
	}
	else if (stageController && stageController.activeScene().sceneName != topic) {
	    stageController.popScenesTo('topic');
	    stageController.activate();
	    return;
	}
		
	if (!popit) {
	    assistant.controller.stageController.pushScene('topic', topic, false);
	}
	else {
	    Mojo.Controller.appController.createStageWithCallback({
		    name: stageName, lightweight: true},
		this.newSceneCallback.bind(this, topic, true));
	}
    }
    catch (e) {
	Mojo.Log.logException(e, "showtopicHandler#newScene");
    }
};

showtopicHandler.prototype.newSceneCallback = function(topic, popped, controller)
{
    controller.pushScene('topic', topic, popped);
};
