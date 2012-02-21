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
                title: 'Home'
            },
            {
                title: 'Search'
            },
            {
                title: 'Action'
            },
            {
                title: 'Settings'
            },
            {
                title: 'More'
            },
        ]
    }
});
