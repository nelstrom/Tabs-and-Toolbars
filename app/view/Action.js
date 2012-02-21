Ext.define('Sencha.view.Action', {
    extend: 'Ext.Panel',
    xtype: 'actioncard',

    config: {
        iconCls: 'action',
        title: 'Action',
        html: 'placeholder text',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Toolbars can contain buttons and titles',
            items: [
                {
                    text: 'ping'
                },{
                    text: 'clear'
                }
            ]
        }]
    }
});
