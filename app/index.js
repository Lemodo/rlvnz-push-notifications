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
    const message = document.getElementById("message");
    const confirmLink = document.getElementById("accept");
    const declineLink = document.getElementById("deny");

    if(requestData == undefined || requestData == "") {
        window.alert("Please enter a valid token");
        console.log("problem with token input");
        return false;
    };
    if(title == undefined || title == "") {
        window.alert("Please enter a valid title");
        console.log("problem with title");
        return false;
    };
    if(message == undefined || message == "") {
        window.alert("Please enter a valid message");
        console.log("problem with message");
        return false;
    };
    if(confirmLink == undefined || confirmLink == "") {
        console.log("problem with accept link");
        window.alert("Please enter a valid link");
        return false;
    };
    if(declineLink == undefined || declineLink == "") {
        console.log("problem with accept link");
        window.alert("Please enter a valid link");
        return false;
    };

    var dataString = "{\"to\":\""+requestData+"\",\"data\":{\"notification\":{\"body\":\""+message+"\",\"title\":\"" + title +"\",\"confirm\":\"" + confirmLink + "\",\"decline\":\""+ declineLink +"\"}},\"priority\":10}";

    const method = 'POST';

    $.post({
        url: "https://fcm.googleapis.com/fcm/send",
        type: method,
        headers: headers,
        data: dataString
    }).done(function(response) {
        console.log(response);
    })
});