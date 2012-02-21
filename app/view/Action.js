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
            xtype: 'titlebar',
            title: 'Titlebars accomodate buttons and titles',
            items: [
                {
                    text:    'ping',
                    align:   'right',
                    action:  'pingHomeBadge'
                },{
                    text:    'clear',
                    align:   'left',
                    action:  'clearHomeBadge'
                }
            ]
        }]
    }
});
