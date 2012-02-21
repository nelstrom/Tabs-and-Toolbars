Ext.define('Sencha.view.buttonbar.Colors', {
    extend: 'Ext.Toolbar',
    xtype: 'buttoncolors',

    config: {
        docked: 'bottom',
        items: [
            { text: 'normal' },
            { text: 'action',   ui: 'action' },
            { text: 'confirm',  ui: 'confirm' },
            { text: 'decline',  ui: 'decline' }
        ]
    }
});
