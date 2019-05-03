/// retrieve.js
$(function() {
    
        var url = "server/retrieve.php";
        
        $.ajax({
            url: url,
            method: "POST",
            data: "",
            dataType: "json"
        })
        .done(function(json){  /// json == DATA RETURNED FROM SERVER
            /// DISPLAY THE CONTENT ON THE HTML
            
            // ATTACHED A STYLE SHEET
            $("head").append("<link rel='stylesheet' href='css/retrieve.css' />");
            
            //alert("php returned success");
            console.log(json);
            
            var html = "<table>";
            html += "<caption>Customer Info</caption>";
            html += "<tr><th>Name</th><th>Phone Number</th><th>Update</th></tr>";
            
            
            // LOOP THROUGH EACH RECORD RETURN FROM PHP
            $.each(json, function(index, value){
                
                var n = value.name;
                var pn = value.phone_number;
                var cid= value.customer_id;
                console.log(pn);
                
                html += "<tr>";
                html += "<td data-label='Name'>" + n + "</td>";   // CREATE CELL TO CONTAIN n
                html += "<td data-label='Phone'>" + pn + "</td>";   // CREATE CELL TO CONTAIN pn
                html += "<td><button class='update' id='" + cid + "'>Update</button></td>"; 
                
                html += "</tr>";
            });
            
            html += "</table>";
             
            $("#content").html(html);   // PUT DATA IN html IN #CONTENT
        });  /// END of $.ajax call
    
        $("#content").on("click", ".update", function(){

            var cid = $(this).attr("id");
            alert(cid);
            
            var url = "server/retrieve-single.php";
            var mydata = { customer_id : cid};
            $.ajax({
                url: url,
                method: "POST",
                data: mydata,
                dataType: "json"
            })
            .done(function(json){
                 var html="<form><fieldset><legend>Update Personal Information</legend>";
                html += "<div>";
                 html += "<label>Name: </label>";
                 html += "<input id='name' type='text' value='" + json.name + "' />";
                 html += "</div>";

                 html += "<div>";
                 html += "<label>Phone Number: </label>";
                 html += "<input id='phone_number' type='text' value='" + json.phone_number + "' />";
                 html += "</div>";

                 html += "<input id='customer_id' type='hidden' value='" + json.customer_id + "' />";
                html += "</fieldset>";

                html += "<div>";
                html += "<input type='button' id='update-action' value='Go' />";
                html += "</div>";

                html += "</form>";
                
                alert(html);
                $('#content').html(html);
                

                
             });
        
        });// CLICK
    
    
    $("#content").on("click", "#update-action", function(){

            var cid = $("#customer_id").val(); // GET from HIDDEN FIELD
            var n = $("#name").val();
            var pn = $("#phone_number").val();
            
            var url = "server/update.php";
            var mydata = { customer_id : cid , name : n , phone_number: pn};
            $.ajax({
                url: url,
                method: "POST",
                data: mydata,
                dataType: "json"
            })
            .done(function(json){
                if(json.success == true ) {
                    var str = "Update Success";
                }
                else {
                    var str = "Update Failed";
                }
                
                alert(str);
                window.location.replace("update-customer.html"); // GOTO PAGE
                

                
             });
        
        });// CLICK
    
    
    
});  /// END OF $(function()

