

$(function() {
    alert(localStorage.getItem("username"))
    $("#submit").click(function() {
            
        
        var u = localStorage.getItem("username");
        var g = $("input[name='given']:checked").val();
        var d = $("#days").val();
        var r = $("#remarks").val();
        var a = $("#approver").val();
        var df = $(".datefrom").val();
        var dt = $(".dateto").val();
        
        var err='';
        
        if (df=='')
            {
          
        err+= '- Date From \n';
                $(".datefrom").addClass("yellow");
                
            }
        if (dt=='')
            {
          
        err+= '- Date To \n';
                
            }
        if (r=='')
            {
          
        err+= '- Remarks \n';
                
            }
        
        
        
        
        
        if (err=='')
            {
        
        //doesnt work here
        var myObj ={username : u, given : g, days: d, remarks : r, approver : a, datefrom : df, dateto : df};
        $.ajax({
           
            method: "POST",
            url: "php/create.php",
            data: myObj,
            dataType: 'json'
        })
          
            .done(function( json ) {
           
            if (json.success==true){
        var str="form submitted successfully";
            }
            else{
                var str="Failed to submit form";
            }
            alert (str);
            
      
                 
                 
}); // END OF AJAX
                
                
            }
        else{
            
            
            alert ("Please Fill Up: \n \n" + err);
            
        }
}); // END OF #create-button CLICK
}); // END OF $(function()