Ext.define('Sencha.view.buttonbar.ShapeColors', {
    extend: 'Ext.Toolbar',
    xtype: 'buttonshapecolors',

    config: {
        docked: 'bottom',
        items: [
            { text: 'action',   ui: 'action-round' },
            { text: 'action',   ui: 'action-small' },
            { text: 'confirm',  ui: 'confirm-round' },
            { text: 'confirm',  ui: 'confirm-small' },
            { text: 'decline',  ui: 'decline-round' },
            { text: 'decline',  ui: 'decline-small' },
        ]
    }
});
