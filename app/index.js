document.getElementById("addTopic").addEventListener("click", function() {

    const topic = "shop1";
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

document.getElementById("sendN").addEventListener("click", function(){
    const requestData = document.getElementById("token");
    const headers = {
        'Authorization': 'key=AAAAD3rw-Rg:APA91bG4zeV4RiSqlR7r5Xv-RCrXkHZ4zp9d0X8_X19ZZtZvLZlQXTQEgxAhB6OXvXwCWxPAXjfY2Y5coE8E4ROz0KBCjYyDGQiwo8WGZQr15NmrbWUkTUpihieNFWJOcdUOqHYz79k4',
        'Content-Type': 'application/json'
    };
    const title = document.getElementById("title");
    const body = document.getElementById("message");
    const confirmLink = document.getElementById("accept");
    const declineLink = document.getElementById("decline");

    if(requestData == undefined || requestData == null) {
        window.alert("Please enter a valid token");
        return false;
    };
    if(title == undefined || title == null) {
        window.alert("Please enter a valid title");
        return false;
    };
    if(body == undefined || body == null) {
        window.alert("Please enter a valid message");
        return false;
    };
    if(confirmLink == undefined || confirmLink == null) {
        window.alert("Please enter a valid link");
        return false;
    };
    if(declineLink == undefined || declineLink == null) {
        window.alert("Please enter a valid link");
        return false;
    };

    var dataString = "{\"to\":\""+requestData+"\",\"data\":{\"notification\":{\"body\":\""+ body +"\",\"title\":\"" + title +"\",\"confirm\":\"" + confirmLink + "\",\"decline\":\""+ declineLink +"\"}},\"priority\":10}";

    const options = {
        url: 'https://fcm.googleapis.com/fcm/send',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    $.post({
        type: method,
        url: url,
        headers: headers,
        body: dataString
    }).done(function(response) {
        console.log(response);
    })
});