var exec = require('cordova/exec');

exports.loadURL = function(url, key, success, error) {
    exec(success, error, "JitsiPlugin", "loadURL", [url, key]);
};

exports.destroy = function(success, error) {
    exec(success, error, "JitsiPlugin", "destroy", []);
};