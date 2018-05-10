module.exports = function(Plugin) {
    const Path = require('path');

    return {
        onLoad: function() {
            console.log('Ice Sickle Hello World!', (new Date()).toString());
            Plugin.window.register(Path.join(__dirname, 'windows/helloWindow.json'));
        },
        onMenuClick: function() {
            Plugin.event.send('openWindow', { windowName: 'helloWindow' });
        }
    }
};
