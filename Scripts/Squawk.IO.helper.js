
// =========================================================
// THIS IS A COLLECTIONS OF HELPER FUNCTIONS FOR SQUAWK.IO
// The library will be called from Command Center App.
// Simon Ho 11/11//2012
// =========================================================

function blink(selector) {
    $(selector).fadeOut('slow', function () {
        $(this).fadeIn('slow', function () {
            blink(this);
        });
    });
}

function generateGUID() {
    var d = new Date().getTime();
    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return guid;
};

function messageRowTempalte(rowNumber, guid, dateTimeStamp, audioUrl, messageState, userClass) {
    this.rowNumber = rowNumber;
    this.guid = guid;
    this.dateTimeStamp = dateTimeStamp;
    this.audioUrl = audioUrl;
    this.messageState = messageState;
    this.userClass = userClass;
}

messageRowTempalte.prototype.makeRow = function () {
    var rawHtml = '<tr id="' + this.guid + '" style="text-align:center;"';
    rawHtml += getBgColorByState(this.messageState);
    rawHtml += '>';
    rawHtml += '<td>' + this.rowNumber + '</td>';
    rawHtml += '<td style="text-align:center;">' + getDeviceByClass(this.userClass) + '</td>';
    rawHtml += '<td>' + this.guid + '</td>';
    rawHtml += '<td>' + this.dateTimeStamp + '</td>';
    rawHtml += '<td><a href="' + this.audioUrl + '"><img src="images/playIcon.jpg" /></a></td>';
    rawHtml += '</tr>';
    return rawHtml;
};

function getDeviceByClass(userClass) {
    var deviceClass = "";
    if (userClass == 1) {
        deviceClass = '<img src="images/computerIcon.png" alt="command center" />';
    }
    else {
        deviceClass = '<img src="images/mobilePhone.png" alt="mobile device" />';
    }
    return deviceClass;
}

function getBgColorByState(state) {
    var bgcolor = "";
    if (state == "new") {
        bgcolor = ' class="newMessage" '; // Blue
    }
    else if (state == "heard") {
        bgcolor = ' class="heardMessage" '; // Gray
    }
    else {
        bgcolor = ' class="normalMessage" '; // White
    }
    return bgcolor;
}


function conversationRowTemplate(guid, imgPath, userId, userName, group, dateTimeStamp, messageCount) {
    this.guid = guid;
    this.imgPath = imgPath;
    this.userId = userId;
    this.userName = userName;
    this.group = group;
    this.dateTimeStamp = dateTimeStamp;
    this.messageCount = messageCount;
}

conversationRowTemplate.prototype.makeRow = function () {
    var rawHtml = '<tr id="' + this.guid + '">';
    rawHtml += '<td><img src="' + this.imgPath + '" alt="icon" /></td>';
    rawHtml += '<td>' + this.userName + '</td>';
    rawHtml += '<td>' + this.dateTimeStamp + '</td>';
    rawHtml += '<td>' + this.guid + '</td>';
    rawHtml += '<td class="tags">&nbsp;</td>';
    rawHtml += '<td>' + groupLookupByGuid(this.group) + '</td>';
    rawHtml += '<td>(' + this.messageCount + ')</td>';
    rawHtml += '</tr>';
    return rawHtml;
};


function getMessageByConversation(messages, conGuid, sentTime) {
    var result = "", i;
    for (i = 0; i < messages.length; i++) {
        if (messages[i].conversationId == conGuid && messages[i].messageSentTime == sentTime) {
            result = messages[i];
            break;
        }
    }
    return result;
}

function getAllMessageInConversationId(messages, convasationGuid) {
    var messagesResult = Enumerable.From(messages)
        .Where("$.conversationId ==  '" + convasationGuid + "'").ToArray();
    return messagesResult;
}

function groupLookupByGuid(inputGuid) {
    var result = "", i;
    for (i = 0; i < gGroupArray.groups.length; i++) {
        if (gGroupArray.groups[i].groupGuid == inputGuid) {
            result = gGroupArray.groups[i].groupName;
            break;
        }
    }
    return result;
}







function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function groupRowTemplate(guid, groupName, memberCount) {
    this.guid = guid;
    this.groupName = groupName;
    this.memberCount = memberCount;
}

groupRowTemplate.prototype.makeRow = function () {
    var rawHtml = '<tr id=' + this.guid + ' class="row-selectable">';
    rawHtml += '<td>' + this.groupName + '</td><td>' + this.memberCount + '</td>';
    rawHtml += '<td><button id=' + this.guid + ' class="btn btn-small btn-primary" type="button">Edit Members</button></td></tr>';
    return rawHtml;
}
function orTemplate(id, or) {
    this.id = id;
    this.or = or;
}

orTemplate.prototype.makeList = function () {
    var rawHtml = '<li id ="' + this.id + '">';
    rawHtml += '<a href="#">' + this.or + '</a>';
    rawHtml += '</li>';
    return rawHtml;
}
orTemplate.prototype.makeSelect = function () {
    var rawHtml = '<option id="' + this.id + '">';
    rawHtml += this.or;
    rawHtml += '</option>';
    return rawHtml;
}

