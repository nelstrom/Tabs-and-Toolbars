Ext.define('Sencha.view.Main', {
    extend: 'Ext.TabPanel',

    config: {
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
