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
            title: 'Buttons'
        }]
    }
});
