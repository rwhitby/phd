enyo.kind({
	name: 'PHD.Topic',
	kind: enyo.VFlexBox,
	height: '100%',
	
	published: {
		topic: ''
	},
	events: {
		onClose: ''
	},
	
	components: [
		
		{name: 'tag', className: 'tag'},
		
		{name: 'h1', kind: 'Header', className: 'header', components: [
				{kind: 'GrabButton'},
				{name: 'title', className: 'title', content: 'Topic Title', flex: 1}
		]},
		
		{kind: "FadeScroller", height: "100%", components: [ {name: 'data', className: 'body', allowHtml: true}]}
	],
	
	rendered: function() {
	    this.inherited(arguments);
	    this.$.title.setContent(topics[this.topic].name);
	    if (this.owner && this.owner.$[this.topic]) {
		var oo = this.owner.$[this.topic].getOffset();
		this.$.tag.applyStyle('top', oo.top + 'px');
		this.$.tag.show();
	    } else {
		this.$.tag.hide();
	    }
	    this.$.data.setContent(topics[this.topic].body);
	},
});

