Ext.define('Sencha.view.Main', {
    extend: 'Ext.TabPanel',

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
            {
                title: 'Home',
                iconCls: 'home',
                badgeText: '1'
            },
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
