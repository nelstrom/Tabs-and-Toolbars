Ext.define('Sencha.view.Search', {
    extend: 'Ext.Panel',
    xtype: 'searchcard',

    config: {
        iconCls: 'search',
        title: 'Search',
        html: 'placeholder text',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Search'
        }]
    }
});
