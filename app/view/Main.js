Ext.define('Sencha.view.Main', {
    extend: 'Ext.TabPanel',
    requires: [
        'Sencha.view.Home',
        'Sencha.view.Search',
        'Sencha.view.Action',
        'Sencha.view.Settings',
        'Sencha.view.More'
    ],

    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        defaults: {
            html: 'placeholder text',
            styleHtmlContent: true
        },
        items: [
            { xtype: 'homecard' },
            { xtype: 'searchcard' },
            { xtype: 'actioncard' },
            { xtype: 'settingscard' },
            { xtype: 'morecard' }
        ]
    }
});
