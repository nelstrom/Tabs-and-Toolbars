Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            homeTabButton: 'tabbar button[title=home]',
            clearButton:   'button[action=clearHomeBadge]',
            starButton:    'button[action=pingHomeBadge]'
        },
        control: {
            clearButton: {
                tap: 'clearHomeBadge'
            },
            starButton: {
                tap: 'incrementHomeBadge'
            },
        }
    },

    incrementHomeBadge: function() {
        var hometab = this.getHomeTabButton(),
            badgenumber = parseInt(hometab.getBadgeText()),
            nextnumber = isNaN(badgenumber) ? 1 : badgenumber+1;

        hometab.setBadgeText(nextnumber);
    },

    clearHomeBadge: function() {
        this.getHomeTabButton().setBadgeText("");
    }
});
