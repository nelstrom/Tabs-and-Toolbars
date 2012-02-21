Ext.define('Sencha.view.More', {
    extend: 'Ext.navigation.View',
    xtype: 'morecard',
    requires: [
        'Ext.dataview.List',
        'Sencha.view.About',
        'Sencha.view.Bookmarks'
    ],

    config: {
        iconCls: 'more',
        title: 'More',
        items: [{
            title: 'More',
            xtype: 'list',
            itemTpl: '{title}',
            store: 'MoreCards',
            listeners: {
                itemtap: function(list, index, item, record) {
                    this.up('morecard').push({
                        xtype: record.data.xtype
                    });
                }
            }
        }]
    }
});
