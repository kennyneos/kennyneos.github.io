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
            html += "<tr><th>Name</th><th>Phone Number</th></tr>";
            
            // LOOP THROUGH EACH RECORD RETURN FROM PHP
            $.each(json, function(index, value){
                
                var n = value.name;
                var pn = value.phone_number;
                console.log(pn);
                
                html += "<tr>";
                html += "<td data-label='Name'>" + n + "</td>";   // CREATE CELL TO CONTAIN n
                html += "<td data-label='Phone'>" + pn + "</td>";   // CREATE CELL TO CONTAIN pn
                html += "</tr>";
            });
            
            html += "</table>";
             
            $("#content").html(html);   // PUT DATA IN html IN #CONTENT
        });  /// END of $.ajax call
    
});  /// END OF $(function()

