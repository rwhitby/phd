enyo.kind({
	name: 'PHD.MainItem',
	kind: 'Item',
	layoutKind: 'HFlexLayout',
	align: 'center',
	tapHighlight: true,
	
	published: {
		label: '',
		disabled: false
	},
	
	components: [
		{name: 'icon', className: 'icon'},
		{name: 'text', flex: 1},
	],
	
	rendered: function() {
		this.$.icon.addClass(this.icon);
		this.$.text.setContent(this.label);
	},
	
});
