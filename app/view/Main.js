Ext.define('Sencha.view.Main', {
    extend: 'Ext.TabPanel',
    requires: [
        'Sencha.view.Home',
        'Sencha.view.Search'
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
            {
                title: 'Action',
                iconCls: 'action'
            },
            {
                title: 'Settings',
                iconCls: 'settings'
            },
            {
                title: 'More',
                iconCls: 'more'
            },
        ]
    }
});
