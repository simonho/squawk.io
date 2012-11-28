
// ============= GLOBAL VARIABLES ===============
var stringForTag = "";
var selectedConversationId = "";
// ===============================================

$(document).ready(function () {
    // ============== CODES FROM DAN FOR RECORDING BUTTON ================
    var recordButton = $('#audio-record-btn');
    recordButton.mousedown(function () {
        var self = $(this);
        if (self.hasClass('btn-success')) {
            self.removeClass('btn-success', (function () {
                self.addClass('btn-info');
                self.html('Recording Now, Release Mouse to Stop..');
            })());
        }

    });
    recordButton.mouseup(function () {
        var self = $(this);
        if (self.hasClass('btn-info')) {
            self.removeClass('btn-info', (function () {
                self.addClass('btn-success');
                self.html('Push and Hold to Record');
            })());
        }

    });
    // ===================================================================


    $("#btnLogin").button();
    $("#btnTag").button();

    $("#tagArea").hide();
    $("#messagesArea").hide();

    $("#tag").click(function () {
        $("#tagArea").slideToggle('slow');
    });

    $("#btnLogin").click(function () {
        alert("login clicked");
        CallService();
    });

    $("#norcalDiv").click(function () {
        getConversationFromMessages(gInboundMessageArray.messages, "0293919-1bee-9fe7-357c-b0e0b3cs7s1j");
    });

    $("#socalDiv").click(function () {
        getConversationFromMessages(gInboundMessageArray.messages, "0293919-1bee-9fe7-357c-b0e0b3cs7s12");
    });

    $("#pnwDiv").click(function () {
        getConversationFromMessages(gInboundMessageArray.messages, "0293919-1bee-9fe7-357c-b0e0b3cs7s13");
    });

    $("#mwDiv").click(function () {
        getConversationFromMessages(gInboundMessageArray.messages, "0293919-1bee-9fe7-357c-b0e0b3cs7s14");
    });

    $("#allDiv").click(function () {
        getConversationFromMessages(gInboundMessageArray.messages, "all");
    });

    $("#txtTag").keypress(function (event) {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        // enter key is keycode 13. please see this reference http://www.asciitable.com/
        if (keycode == '13') {
            stringForTag += $("#txtTag").val() + " , ";
            $("#tagString").html(stringForTag);
            $("#txtTag").val(""); // clear the textbox

            var selectedTr = "", i;
            $.each($('#conversationTable  tr'), function () {
                var self = $(this);
                if (self.attr("id") == selectedConversationId) {
                    self.find("td.tags").html(stringForTag);
                }

            });

        }

    });

    $('#conversationTable').on('click', 'tr', function (e) {
        var self = $(this);
        var id = self.attr('id');
        selectedConversationId = id; // set the selected Id to global variable so that we can use it from other functions.
        e.preventDefault();
        $.each($('#conversationTable  tr'), function () {
            var self = $(this);
            self.attr('bgcolor', '#ffffff'); // default to White

        });
        self.attr('bgcolor', '#f58400'); // Orange for selected row.

        var messages = getAllMessageInConversationId(gInboundMessageArray.messages, self.attr('id'));
        if (messages != null) {
            $("#idpThumbnail").html('<img src="' + messages[0].fromUserIcon + '" alt="sender Icon" />  <b>'
               + messages[0].fromUserDisplayName) + '</b>';
            $("#messagesArea").show('slow');
            $("#messageTable tr:not(:first)").remove(); // Clear All rows except the first row

            var i;
            stringForTag = "";
            $("#tagString").html("");
            // Use linq.js to OrderByDescending
            messages = Enumerable.From(messages)
            .OrderByDescending(function (x) { return x.messageSentTime }).ToArray();

            for (i = 0; i < messages.length; i++) {
                var thisMessage = new messageRowTempalte(i + 1, messages[i].messageId, messages[i].messageSentTime, messages[i].audioUrl, messages[i].messageState, messages[i].userClass);
                var myRow = thisMessage.makeRow();
                $("#messageTable tr:last").after(myRow);
            }
        }

    });

});

// New function! Still working on it!!!
function returnConversationByRegion(messages, regionId) {
    var resultByRegion = new Array();
    var groupByconversationResult = Enumerable.From(messages)
    .GroupBy("$.conversationId", "$.messageSentTime",
        function (key, group) { return { groupById: key, sentTime: group.Min(), count: group.Count()} },
        function (key) { return key.toString() }).ToArray();
    alert("totalConversations = " + groupByconversationResult.length);
    // Try to Map GroupBy dataset to individual message
    Enumerable.From(groupByconversationResult).ForEach(function (grpObj) {
        var theMessage = getMessageByConversation(messages, grpObj.groupById, grpObj.sentTime);

        if (theMessage.intendedParty == regionId) {
            resultByRegion.push(theMessage);
        }

    });

    alert("filteredByNorCal = " + resultByRegion.length);
    return resultByRegion;
}


function getConversationFromMessages(messages, regionId) {
    // Clear All rows except the first row
    $("#conversationTable tr:not(:first)").remove();
    // Use linq.js to do GroupBy conversationId
    var groupByconversationResult = Enumerable.From(messages)
    .GroupBy("$.conversationId", "$.messageSentTime",
        function (key, group) { return { groupById: key, sentTime: group.Min(), count: group.Count()} },
        function (key) { return key.toString() }).ToArray();

    Enumerable.From(groupByconversationResult).ForEach(function (grpObj) {
        var theMessage = getMessageByConversation(messages, grpObj.groupById, grpObj.sentTime);
        // Filter by Regions
        if (theMessage.intendedParty == regionId || regionId == "all") { 
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



   function CallService() {
       var sendThis = new Object();
       sendThis.username = $("#txtUserName").val();
       sendThis.pin = $("#txtPassword").val();
       sendThis.domain = "agentgrid.net";
       //$.support.cors = true;
       $.ajax({
           type: "POST",
           url: 'http://svn.agentgrid.net:3201/LoginEvent',
           //url : 'http://127.0.0.1:3201/LoginEvent',
           success: function (data) {
               console.log(data);
               //display the data on html.. for example
               //message(JSON.stringify(data));
               if (data.response == "success") {
               		alert(data.data.userDisplayName);
                   $("#loginArea").hide();
                   $("#userInfo").html("Welcome " + data.data.userDisplayName + "<br />" + data.responseMessage);
               }
               else {
                   $("#loginArea").show();
                   $("#userInfo").hide();
               }
               message(data.data.token);
               //connectWS(data.data.token);
               //init a websocket
               var sock = new InitWebSocket(data.data.token);
               sock.groupStatsPull();
           },
           error: function (err) {
           		alert('error: ' + err);
               console.log('error: ' + err)
           },
           data: JSON.stringify(sendThis)
                  
           });

   }
  
     function message(msg) {
         $('#logView').append(msg + '</p>');  
     }  


     function InitWebSocket(token) {
         console.log(token);
         var self = this;
         this.token = token;
         this.socket = io.connect('http://svn.agentgrid.net:3200/' + self.token);
         //this.socket = io.connect('http://localhost:3200/' + self.token);
         this.socket.on('connect', function () {
             console.log('socket.io connected');

         });
         this.socket.on('disconnect', function () {
             alert('Lost connection to the server. Trying to reconnect...');
             CallService();
         });
         return this;
     }

     InitWebSocket.prototype.groupStatsPull = function () {
         var self = this;
         this.socket.emit('GroupStatsPull', {
             token: self.token,
             groups: ['norcal', 'socal', 'pnw', 'mw','all']
         });
         this.socket.on('GroupStatsPush', function (data) {
             //handle the data
             var json = JSON.stringify(data);
             console.log(json);
             InitializeRegionStats(data.data);
         });
     }

   

   function InitializeRegionStats(regionArray) {
       var r = 0;
       //alert(regionArray.length);
       if (regionArray != null && regionArray.length > 0) {
           for (r = 0; r < regionArray.length; r++) {
               var regionObj = regionArray[r];
               var divId = $("#" + regionObj.group + "Div");
               var countsString = regionObj.group + "<br />" +
                                  regionObj.totaUnlAssigned + "/" + regionObj.totalUserOwned + "/" + regionObj.totalOpen;
               divId.html(countsString);

               if (regionObj.totaUnlAssigned > 0) {
                   blink(divId);
               }
           }
       }
   }



   function connectWS(token) {
       try {
           var socket;
           //var host = "ws://localhost:8000/socket/server/startDaemon.php";
           var host = "http://svn.agentgrid.net:3200/" + token;

           var socket = new WebSocket(host);
           message('<p class="event">Socket Status: ' + socket.readyState);
           socket.onopen = function () {
               message('<p class="event">Socket Status: ' + socket.readyState + ' (open)');
           }
           socket.onmessage = function (msg) {
               message('<p class="message">Received: ' + msg.data);
           }
           socket.onclose = function () {
               message('<p class="event">Socket Status: ' + socket.readyState + ' (Closed)');
           }
       } catch (exception) {
           message('<p>Error' + exception);
       }
   }

// Extend jquery with flashing for elements
   $.fn.flash = function (duration, iterations) {
       duration = duration || 1000; // Default to 1 second
       iterations = iterations || 1; // Default to 1 iteration
       
       for (var i = 0; i < iterations; i++) {
           //obj.click(function () { this.stop();});
           this.fadeOut('slow').fadeIn('slow');
       }
   }
   
   $('#side-nav-main li').click(function(e) {
	var self = $(this), id = self.attr('id');
	e.preventDefault();
	if (self.hasClass('nav-header')) {
		return;
	}
	$.each($('#side-nav-main li'), function() {
		var self = $(this);

		if (self.hasClass('active')) {
			//fadeId = self.attr('id');
			self.removeClass('active');
		}
	});

	self.addClass('active');
});

function callLoginEventFromDan() {
    var data = {
        user_name: user,
        user_pin: parseInt(pin),
        domain: domain
    };

    $.ajax({
        type: "POST",
        //url : 'http://svn.agentgrid.net:1337/LoginEvent',
        url: 'http://127.0.0.1:1337/LoginEvent',
        data: JSON.stringify(data),
        success: function (data) {

            console.log(data);
            if (data.response === "error") {
                alert('An error occured : ' + data.response);
                return;
            }

            sessionStorage['session'] = JSON.stringify(data);
            console.log('sessionStorage.getItem("session") : ' + sessionStorage.getItem('session'));
            window.location.href = data.data.redirectUrl;

        },
        error: function (error) {
            console.log(error)
        },
        dataType: "json"
    });
}






