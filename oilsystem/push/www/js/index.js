
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function() {
        document.getElementById('btn').addEventListener('click', app.registerWithFCM);
		document.getElementById('btn2').addEventListener('click', app.getMessageFromFCM);
    },
	
	registerWithFCM: function(){
		try {

			/* if (window.FCMPlugin == null) {

				alert("FCMPlugin is null")

				return;

			}*/

			window.FCMPlugin.getToken(function (token) {

				//”token” received from FCM server.

				//It will get automatically registered in you device. No extra code is needed.

				alert(token);

				document.getElementById("txtFCMId").value = token;

			});
			
			

		}

		catch (e) {

			alert(e);

		}	


	},
	
	getMessageFromFCM: function (){
		alert("onNotification");

		try {

			window.FCMPlugin.onNotification(function (data) {

			if(data.wasTapped){
			  //Notification was received on device tray and tapped by the user.
				  alert( JSON.stringify(data) );
				}else{
				  //Notification was received in foreground. Maybe the user needs to be notified.
				  alert( JSON.stringify(data) );
				}

			});

		} catch (e) {

			alert(e);

		}
		
	}
	
};

app.initialize();