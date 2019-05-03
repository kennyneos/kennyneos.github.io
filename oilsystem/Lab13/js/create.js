$(function() {
 
    $("#login-button").on("click", function(){
        var n = $("#userid").val();
        var pw = $("#password").val();
        
        // DATA TO BE SENT OVER TO server
        var myObj = { name: n , password: pw} ;
        var url = "server/login.php";
        
        $.ajax({
            url: url,
            method: "POST",
            data: myObj,
            dataType: "json"
        })
        .done(function(json){  /// json == DATA RETURNED FROM SERVER
            if(json.success == true) {
                /// STORES NAME AND ROLE FOR FUTURE USAGE
                window.localStorage.setItem("name", json.name);
                window.localStorage.setItem("role", json.role);
                var str = "Login Successfully";
            }
            else {
                var str = "Login Fail";
            }
            
            
            
        });  /// END of $.ajax call
    
    }); ///
















    // DETECT Create BUTTON CLICK
    $("#create-button").on("click", function(){
        var n = $("input#name").val();
        var pn = $("#phone_number").val();

        ///var radioValue = $("input[name='gender']:checked"). val();
        ///$("#yourid).text();
    
        alert("n");
        // || == OR
       if(n === "" || pn === "") {  
           alert("Incomplete Data !!!");
           return;
       }
        
        // DATA TO BE SENT OVER TO server
        var myObj = { name: n , phone_number: pn} ;
        var url = "server/create.php";
        
        $.ajax({
            url: url,
            method: "POST",
            data: myObj,
            //data: { nanme: n , phone_number: pn},
            dataType: "json"
        })
        .done(function(json){  /// json == DATA RETURNED FROM SERVER
            alert("hoho");
            
            
            if(json.success == true) {
                var str = "Customer Created Successfully";
            }
            else {
                var str = "Fail to Create Customer";
            }
            
            alert(str);
            
        });  /// END of $.ajax call
    
    }); /// END OF Create BUTTON CLICK
    
    

});  /// END OF $(function()


$("#create-button")
$("#h1") == > ELEMENT WITH ID=h1
$(".h1") == > ELEMENTS WITH CLASS=h1
$("h1") == > ANY <h1> ELEMENTS





