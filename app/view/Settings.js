Ext.define('Sencha.view.Settings', {
    extend: 'Ext.form.FormPanel',
    xtype: 'settingscard',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password'
    ],

    config: {
        iconCls: 'settings',
        title: 'Settings',
        items: [
            {
                xtype: 'fieldset',
                title: 'Details',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        label: 'Username'
                    },{
                        xtype: 'passwordfield',
                        name : 'password',
                        label: 'Password'
                    }
                ],
            },{
                xtype:  'button',
                text:   'save',
                ui:     'confirm'
            }
        ]
    }
});
