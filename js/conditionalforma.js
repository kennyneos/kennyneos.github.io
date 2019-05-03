
$( document ).ready(function() {
    console.log( "ready!" );
	var photoFile= localStorage.getItem('username');
	var role=localStorage.getItem('access');
	var content="";
	if ( role=='DYCO'|| role=='OPSWO' || role=='OC' || role=='CC' )
	{
        $(".admin").show();
	}
	else if (role=="management")
	{
        $(".admin").show();
	}
	else{
		content="You are a user";
        $(".admin").hide();
	}
	$("#content").html(content);
	
});
