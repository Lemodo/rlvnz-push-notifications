$(document).ready(function(){
    $("#staticBackdrop").modal('show');
    });

document.getElementById("addTopic").addEventListener("click", function() {

    const topic = document.getElementById("topic").value;
    const topicToken = document.getElementById("topicToken").value;
    const method = "POST";
    const headers = {
        'Authorization': 'key=AAAAD3rw-Rg:APA91bG4zeV4RiSqlR7r5Xv-RCrXkHZ4zp9d0X8_X19ZZtZvLZlQXTQEgxAhB6OXvXwCWxPAXjfY2Y5coE8E4ROz0KBCjYyDGQiwo8WGZQr15NmrbWUkTUpihieNFWJOcdUOqHYz79k4'
    };
    const url = 'https://iid.googleapis.com/iid/v1/'+topicToken+'/rel/topics/'+topic;
    const options = {
        url: 'https://iid.googleapis.com/iid/v1/'+topicToken+'/rel/topics/'+topic,
        method: method,
        headers: headers
    };

    if(topicToken == undefined || topicToken == null) {
        window.alert('Please enter a token');
        return false;
    };

    $.post({
        type: method,
        url: url,
        headers: headers
    }).done(function(response) {
        console.log(response);
    })

});