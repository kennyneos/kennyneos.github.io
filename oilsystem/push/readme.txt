open plugins/cordova-plugin-fcm/scripts/fcm_config_files_process.js

// change
var strings = fs.readFileSync("platforms/android/res/values/strings.xml").toString();
// to
var strings = fs.readFileSync("platforms/android/app/src/main/res/values/strings.xml").toString();

// AND

//change
fs.writeFileSync("platforms/android/res/values/strings.xml", strings);

//to
fs.writeFileSync("platforms/android/app/src/main/res/values/strings.xml", strings);