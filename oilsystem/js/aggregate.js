


    $(document).ready(function() {
        
        $.ajax({
            type: "POST",
            url: "php/aggregateoil.php",
            dataType: 'json',
            
        })
            .done(function( jsons ) {
/// CREATE table TOP
            console.log('this works')
            var html="<table>";
            html += "<caption>Aggregate OIL</caption>";
            html += "<thead>";
            html += "<th>Username</th><th>Aggregate</th>";
            html += "</thead>";
            html += "<tbody>";
            var sum = 0;
            $.each(jsons, function( index, value ) {
                console.log(value);
                var json=value;
                var u=json.username;    
                var ag=json.aggregate;
                html += "<tr>";
                html += "<td data-label='username'>" + u + "</td>";
                html += "<td data-label='Aggregate'>" + ag + "</td>"
                html += "</tr>";
        
            });
            html += "</tbody></table>";
            
            
            $('#content').append(html);
             $('#sum').append(sum);
            });
       
});