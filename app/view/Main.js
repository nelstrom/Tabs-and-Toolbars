Ext.define('Sencha.view.Main', {
    extend: 'Ext.TabPanel',
    requires: [
        'Sencha.view.Home'
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
            {
                title: 'Search',
                iconCls: 'search'
            },
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
