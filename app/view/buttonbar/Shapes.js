Ext.define('Sencha.view.buttonbar.Shapes', {
    extend: 'Ext.Toolbar',
    xtype: 'buttonshapes',

    config: {
        docked: 'bottom',
        items: [
            { text: 'back',     ui: 'back' },
            { text: 'normal',   ui: 'normal' },
            { text: 'small',    ui: 'small' },
            { text: 'round',    ui: 'round' },
            { text: 'forward',  ui: 'forward' },
        ]
    }
});
