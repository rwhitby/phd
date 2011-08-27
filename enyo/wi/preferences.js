var prefs = {};

enyo.kind({
	name:				'wi.Preferences.Popup',
	kind:				enyo.Popup,
	scrim:				true,
	modal:				true,
	className:			'enyo-popup enyo-popup-float wi-prefs',
	showHideMode:		'transition',
	openClassName:		'open',
	dismissWithClick:	false,
	dismissWithEscape:	false,
	
	lsvar:				'prefs',
	
	published: {
		defaults:		{}
	},
	events: {
		onSave:			'',
		onCancel:		'',
	},
	
	height:				'420px',
	width:				'320px',
	
	chrome: [
		{name: 'container', kind: 'VFlexBox', className: 'container', components:[
			{content: 'Preferences', kind: 'Header', className: 'header'},
	    	{kind: 'FadeScroller', className: 'scroller', flex: 1, autoVertical: true, components: [
				{name: 'client', kind: enyo.Control},
			]},
			{kind: 'Toolbar', className: 'enyo-toolbar-light toolbar', components:[
				{kind: 'Button', flex: 1, caption: 'Cancel', onclick: 'cancelButton', className: 'enyo-button-negative'},
				{kind: 'Button', flex: 1, caption: 'Save', onclick: 'saveButton', className: 'enyo-button-affirmative'}
			]},
		]},
	],
	
	constructor: function() {
	    this.inherited(arguments);
		this.loadPrefs();
	},
	renderOpen: function() {
	    this.inherited(arguments);
		this.setupForm();
	},
	
	loadPrefs: function() {
		if (localStorage && localStorage[this.lsvar])
			prefs = enyo.mixin(this.defaults, enyo.json.parse(localStorage[this.lsvar]));
		else {
			prefs = this.defaults;
			localStorage[this.lsvar] = enyo.json.stringify(prefs);
		}
	},
	savePrefs: function() {
		if (prefs) {
			for (var p in prefs) {
				switch (this.$[p].kind) {
					case 'ToggleButton':
						prefs[p] = this.$[p].state;
						break;
					
					case 'Input':
					case 'ListSelector':
						prefs[p] = this.$[p].getValue();
						break;
						
					default:
						this.log('no handler:', this.$[p].kind);
						break;
				}
			}
		}
		if (localStorage)
			localStorage[this.lsvar] = enyo.json.stringify(prefs);
	},
	
	setupForm: function() {
		if (prefs) {
			for (var p in prefs) {
				switch (this.$[p].kind) {
					case 'ToggleButton':
						this.$[p].updateState(prefs[p]);
						break;
					
					case 'Input':
					case 'ListSelector':
						this.$[p].setValue(prefs[p]);
						break;
						
					default:
						this.log('no handler:', this.$[p].kind);
						break;	
				}
			}
		}
	},
	
	saveButton: function() {
		this.savePrefs();
		this.close();
		this.doSave();
	},
	cancelButton: function() {
		this.close();
		this.doCancel();
	},
	
	pop: function() {
		this.openAtCenter();
	}
});
