enyo.kind(
    {
	name: 'PHD.Main',
	kind: enyo.VFlexBox,
	
	components: [
	    
	    {kind: 'AppMenu', components: [
		 {caption: 'Credits', onclick: 'showCredits'},
		 {caption: 'Help', onclick: 'showHelp'}
	     ]},
	    
	    {kind: 'SlidingPane', flex: 1, wideWidth: 800, components: [
		 
		 {name: 'main', kind: 'enyo.SlidingView', width: '375px', components: [
		      
		      {kind: wi.Header, random: [
			   {weight: 30, tagline: 'Collated by Rod Whitby from WebOS Internals'}
		       ]},
		      
		      {className: 'main-list', components: [
			   {name: 'what-is-homebrew',  kind: 'PHD.MainItem', className: 'main-item',
			    label: 'What Is Homebrew?', icon: 'intro', onclick: 'popIntro'},
			   {name: 'installing-preware', kind: 'PHD.MainItem', className: 'main-item',
			    label: 'Installing Preware', icon: 'preware', onclick: 'popPreware' },
			   {name: 'homebrew-applications',  kind: 'PHD.MainItem', className: 'main-item',
			    label: 'Great Homebrew Applications', icon: 'apps', onclick: 'popApps'},
			   {name: 'webos-patches', kind: 'PHD.MainItem', className: 'main-item',
			    label: 'Using Patches to Add New Features', icon: 'patches', onclick: 'popPatches'}
		       ]}
		  ]}
	     ]}
	],
	
	initComponents: function() {
	    this.inherited(arguments);
	    this.$.slidingPane.createComponent(this.getBlankPanel(), {owner: this});
	},

	rendered: function() {
	    this.inherited(arguments);
	},
	
	getBlankPanel: function() {
	    return {name: 'blank', kind: 'enyo.SlidingView', flex: 1, peekWidth: 320,
		    className: 'blank-slider', dragAnywhere: false, components: [
			{kind: enyo.VFlexBox, align: 'center', pack: 'center', width: '100%', height: '100%',
			 components: [
			     {content: "WebOS-Internals.org", className: 'centered'}
			 ]}
		    ]};
	},
	
	popIntro: function() {
	    this.popTopic('what-is-homebrew');
	},

	popPreware: function() {
	    this.popTopic('installing-preware');
	},

	popApps: function() {
	    this.popTopic('homebrew-applications');
	},

	popPatches: function() {
	    this.popTopic('webos-patches');
	},

	popTopic: function(topic) {
	    this.destroyBlank();
	    if (this.$.topic) this.$.topic.destroy();
	    this.$.slidingPane.createComponent(
		{name: 'topic', kind: 'enyo.SlidingView', flex: 1, components: [
		     {name: 'showTopic', kind: 'PHD.Topic', className: 'topic',
		      topic: topic, panelNum: this.panelNum, onClose: 'destroyTopic' }
		 ]}, {owner: this});
	    this.$.slidingPane.render();
	},
	
	destroyBlank: function() {
	    if (this.$.blank) this.$.blank.destroy();
	},

	destroyTopic: function(inSender) {
	    if (this.$.topic) this.$.topic.destroy();
	    this.$.slidingPane.createComponent(this.getBlankPanel(), {owner: this});
	    this.$.main.select();
	    this.$.slidingPane.render();
	},

	getSlidingParent: function(e) {
	    while (e.kind != 'enyo.SlidingView') {
		e = e.parent;
	    }
	    return e;
	}
    }
);
