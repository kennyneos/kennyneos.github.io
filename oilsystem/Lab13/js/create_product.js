$(function() {
    // WILL EXECUTE ONLY AFTER THE HTML IS LOADED
    
    // DETECT Create BUTTON CLICK
    $("#create-button").on("click", function(){
        var n = $("input#name").val();
 
       if(n === "" ) {  
           alert("Incomplete Data !!!");
           return;
       }
        
        // DATA TO BE SENT OVER TO server
        var myObj = { name: n } ;
        var url = "server/create_pruduct.php";
        
        $.ajax({
            url: url,
            method: "POST",
            data: myObj,
            dataType: "json"
        })
        .done(function(json){  /// json == DATA RETURNED FROM SERVER
            alert("hoho");
            
            
            if(json.success == true) {
                var str = "Product Created Successfully";
            }
            else {
                var str = "Fail to Create Product";
            }
            
            alert(str);
            
        });  /// END of $.ajax call
    
    }); /// END OF Create BUTTON CLICK
    
    

});  /// END OF $(function()


//$("#create-button")
//$("#h1") == > ELEMENT WITH ID=h1
//$(".h1") == > ELEMENTS WITH CLASS=h1
//$("h1") == > ANY <h1> ELEMENTS





