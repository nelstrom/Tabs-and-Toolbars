Ext.define('Sencha.store.MoreCards', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['title', 'xtype'],
        data: [
            { title: 'About',      xtype: 'aboutcard' },
            { title: 'Bookmarks',  xtype: 'bookmarkscard' }
        ]
    }
});
