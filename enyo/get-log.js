enyo.kind({
	name: 'Lumberjack.GetLog',
	kind: enyo.VFlexBox,
	height: '100%',
	
	published: {
		filter: '',
		custom: ''
	},
	events: {
		onClose: ''
	},
	
	components: [
		
		{name: 'stats', kind: 'Lumberjack.Stats'},
		
		{name: 'getMessages', kind: 'PalmService', subscribe: true, service: 'palm://org.webosinternals.lumberjack/', method: 'getMessages', onResponse: 'getMessagesResponse'},
		
		{name: 'tag', className: 'tag'},
		
		{name: 'h1', kind: 'Header', className: 'header', components: [
				{kind: 'GrabButton'},
				{name: 'title', className: 'title', content: 'Retrieve Log', flex: 1},
				//{kind: 'Button', caption: 'O', style: 'margin: -10px 5px;', onclick: 'pop'},
				{kind: 'Button', caption: 'X', className: 'enyo-button-negative', onclick: 'close'},
		]},
		
		{name: 'spinner', kind: 'SpinnerLarge', className: 'large-spinner'},
		
		{name: 'data', kind: 'wi.FlyweightAwesomeList', data: [], height: '100%', bottomUp: true, onSetupRow: 'setupRow', components: [
			{name: 'logItem', kind: 'Lumberjack.LogItem'}
	    ]},
	],
	
	rendered: function() {
	    this.inherited(arguments);
		this.$.stats.addStat('logsViewed', 1);
		if (this.filter == 'every') {
		} else if (this.filter == 'allapps') {
		} else if (this.filter == 'custom') {
		} else {
			this.$.stats.addStat('appsUsed', this.filter);
		}
		this.$.title.setContent('Retrieve Log');
		if (this.owner && this.owner.$.getItem) {
			var oo = this.owner.$.getItem.getOffset();
			this.$.tag.applyStyle('top', oo.top + 'px');
			this.$.tag.show();
		} else {
			this.$.tag.hide();
		}
		this.$.getMessages.call();
		this.$.spinner.show();
	},
	
	setupRow: function(inSender, inMessage, inIndex) {
		if (this.filter == 'allapps' || this.filter == 'every' || this.filter == 'custom') inMessage.rowClass += ' showapp';
		this.$.logItem.update(inMessage);
	},
	
	getMessagesResponse: function(s, payload) {
		if (payload) {
			switch (payload.stage) {
				case 'start':
					this.contents = '';
					this.contentSize = payload.filesize;
					break;
					
				case 'middle':
					if (payload.contents) {
						this.contents += payload.contents;
					}
					break;
					
				case 'end':
					if (this.contents != '') {
						this.$.data.setData(parser.parse(this.contents, this.filter, this.custom));
					}
					this.$.stats.addStat('getTotalSize', this.contentSize);
					this.$.spinner.hide();
					this.$.data.refresh();
					break;
			}
		} else {
			this.contents = '';
		}
	},
	
	close: function() {
		this.doClose(this);
	},
	
	pop: function() {
	},
	
});
