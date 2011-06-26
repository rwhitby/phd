function CreditsAssistant() {};

CreditsAssistant.prototype.setup = function()
{
    // setup back tap
    this.backElement = this.controller.get('icon');
    this.backTapHandler = this.backTap.bindAsEventListener(this);
    this.controller.listen(this.backElement, Mojo.Event.tap, this.backTapHandler);

    this.controller.get('credits-title').innerHTML = $L("Credits");

    // setup menu
    this.controller.setupWidget(Mojo.Menu.appMenu, {omitDefaultItems: true}, {visible: false});
};

CreditsAssistant.prototype.backTap = function(event)
{
    this.controller.stageController.popScene();
};

CreditsAssistant.prototype.activate = function(event) {};

CreditsAssistant.prototype.deactivate = function(event) {}
CreditsAssistant.prototype.cleanup = function(event) {
    this.controller.stopListening(this.backElement,  Mojo.Event.tap, this.backTapHandler);
}
