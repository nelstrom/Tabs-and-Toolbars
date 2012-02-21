Ext.define('Sencha.view.buttonbar.IconStyles', {
    extend: 'Ext.Toolbar',
    xtype: 'buttoniconstyles',

    config: {
        docked: 'bottom',
        items: [
            { iconCls: 'star',  iconMask: true,  text: 'favorite' },
            { iconCls: 'star',  iconMask: true,  ui: 'action' },
            { iconCls: 'star',  iconMask: true,  ui: 'confirm' },
            { iconCls: 'star',  iconMask: true,  ui: 'decline' },
            { iconCls: 'star',  iconMask: true,  ui: 'plain' },
        ]
    }
});
