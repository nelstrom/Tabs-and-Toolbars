Ext.application({
    name: 'Sencha',

    controllers: ['Main'],
    views:  ['Main'],
    stores: ['MoreCards'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'Sencha.view.Main'
        });
    }
});
