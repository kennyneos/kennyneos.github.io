$(function() {
    $(".button").click(function() {
	  var un = $("input#username").val();
	  var pw = $("input#password").val();
	  var myObj ={username: un, password: pw};
	  $.ajax({
		  method: "POST",
		  url: "login.php",
		  data: myObj,
		  dataType: 'json'
		})
		.done(function( json ) {
			var s=json.success;
			if (s==1){
				var u=json.username;
				var r=json.role;
				localStorage.setItem('username',u);
				localStorage.setItem('role',r);
								
				window.location.replace("home.html");
			}
			else{
				var str="Log in failed";
				$('#msg').html(str);
			}
			
		});
    });
	$("#logout").click(function(){
		localStorage.setItem("username", null);
		localStorage.setItem("role", null);
		
		window.location.replace("login.html");
	});
  });