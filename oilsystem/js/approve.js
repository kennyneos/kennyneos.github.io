


    $(document).ready(function() {
        
        $.ajax({
            type: "POST",
            url: "php/approve.php",
            dataType: 'json',
            data: {access : window.localStorage.getItem('access'),
                  }
        })
            .done(function( jsons ) {
/// CREATE table TOP
            var html="<table>";
            html += "<caption>Customer Info</caption>";
            html += "<thead>";
            html += "<th>Username</th><th>Given/Claimed</th><th>Days</th><th>From</th><th>To</th><th>Remarks</th><th>Approver</th><th>Approved Status</th><th>Aggregate</th>";
            html += "</thead>";
            html += "<tbody>";
            var sum = 0;
            $.each(jsons, function( index, value ) {
                console.log(value);
                var json=value;
                var u=json.username;    
                var g=json.given;
                var d=json.days;
                var df=json.datefrom;
                var dt=json.dateto;
                var r=json.remarks;
                var a=json.approver;
                var as=json.approved_status;
                var ag=json.aggregate;
                html += "<tr>";
                html += "<td data-label='username'>" + u + "</td>";
                html += "<td data-label='Given/Claimed'>" + g + "</td>";
                html += "<td data-label='Days'>" + d + "</td>";
                html += "<td data-label='From'>" + df + "</td>";
                html += "<td data-label='To'>" + dt + "</td>";
                html += "<td data-label='Remarks'>" + r + "</td>";
                html += "<td data-label='Approver'>" + a + "</td>";
                html += "<td data-label='Approved Status'>" + as + "</td>";
                html += "<td data-label='Aggregate'>" + ag + "</td>"
                html += "</tr>";
                sum += parseFloat(ag);
            });
            html += "</tbody></table>";
            
            
            $('#content').append(html);
             $('#sum').append(sum);
            });
       
});