$(document).ready(function () {
    $("#btnLogin").click(function () {

        getConversationFromMessages(gInboundMessageArray.messages);

        var messages = getAllMessageInConversationId(gInboundMessageArray.messages, '65438919-1bee-9fe7-357c-b0e0b3cb9g5d');
        if (messages != null) {
            alert(messages.length);
        }
    });
});


    function getConversationFromMessages(messages) {
        var groupByconversationResult = Enumerable.From(messages)
    .GroupBy("$.conversationId", "$.messageSentTime",
        function (key, group) { return { groupById: key, sentTime: group.Min(), count: group.Count()} },
        function (key) { return key.toString() }).ToArray();

        Enumerable.From(groupByconversationResult).ForEach(function (grpObj) {
            var theMessage = getMessageByConversation(messages, grpObj.groupById, grpObj.sentTime);
            
            if (theMessage != "") {
                var conversation = new conversationRowTemplate(
                theMessage.conversationId,
                theMessage.fromUserIcon,
                theMessage.fromUserId,
                theMessage.fromUserDisplayName,
                theMessage.intendedParty,
                theMessage.messageSentTime,
                grpObj.count);


                var myRow = conversation.makeRow();
                $("#conversationTable tr:last").after(myRow);
                
            }
            
        });

        
    }

    function getAllMessageInConversationId(messages,convasationGuid) {
        var messagesResult = Enumerable.From(messages)
        .Where("$.conversationId ==  '" + convasationGuid + "'").ToArray();
        return messagesResult;
    }

    function getMessageByConversation(messages, conGuid, sentTime) {
        var result="", i;
        for (i = 0; i < messages.length; i++) {
            if (messages[i].conversationId == conGuid && messages[i].messageSentTime == sentTime) {
                result = messages[i];
                break;
            }
        }
        return result;
    }

function CallService() {
       var sendThis = new Object();
       sendThis.username = $("#txtUserName").val();
       sendThis.pin = $("#txtPassword").val();
       sendThis.domain = "agentgrid.net";
       //$.support.cors = true;
       $.ajax({
           type: "POST",
           url: 'http://svn.agentgrid.net:3201/LoginEvent',

           success: function (data) {
               console.log(data);

               if (data.response == "success") {
                   alert("ajax success...");
                   alert(data.data.userDisplayName);
                   $("#loginArea").hide();
                   $("#userInfo").html("Welcome " + data.data.userDisplayName + "<br />" + data.responseMessage);
               }
               else {
                   $("#loginArea").show();
                   $("#userInfo").hide();
               }

           },
           error: function (err) {
               alert('error: ' + err);
               console.log('error: ' + err)
           },
           data: JSON.stringify(sendThis)

       });

   }