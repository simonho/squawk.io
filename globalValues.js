// ============= GLOBAL VARIABLES ====================================================
// This file is intend to be a placeholder for all the static and test data only.
// Remember to remove these data when we go live!!!
// ===================================================================================

var gGroupArray = { "groups": [
        {
            "groupName": "nocal",
            "groupGuid": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j" // from Dan
        },
        {
            "groupName": "socal",
            "groupGuid": "0293919-1bee-9fe7-357c-b0e0b3cs7s12" // simon makeup
        },
        {
            "groupName": "pnw",
            "groupGuid": "0293919-1bee-9fe7-357c-b0e0b3cs7s13" // simon makeup
        },
        {
            "groupName": "mw",
            "groupGuid": "0293919-1bee-9fe7-357c-b0e0b3cs7s14" // simon makeup
        },
        {
            "groupName": "all",
            "groupGuid": "0293919-1bee-9fe7-357c-b0e0b3cs7s15" // simon makeup
        }

    ]
}


var gInboundMessageArray = { "messages": [
     {
         "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8111",
         "messageState": "new",
         "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g5d",
         "conversationClass": 0,
         "userClass":0,
         "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
         "fromUserDisplayName": "idp100",
         "fromUserIcon": "images/idp100.jpg",
         "messageSentTime": "2012-12-21 03:00:00",
         "audioUrl": "http://someurl.com/someAudioFile.wav",
         "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j"
     },
     {
         "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8112",
         "messageState": "heard",
         "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g5d",
         "conversationClass": 0,
         "userClass": 0,
         "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
         "fromUserDisplayName": "idp100",
         "fromUserIcon": "images/idp100.jpg",
         "messageSentTime": "2012-12-21 03:01:00",
         "audioUrl": "http://someurl.com/someAudioFile.wav",
         "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j"
     }
    ,
    {
        "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8113",
        "messageState": "new",
        "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g5d",
        "conversationClass": 0,
        "userClass": 0,
        "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
        "fromUserDisplayName": "idp100",
        "fromUserIcon": "images/idp100.jpg",
        "messageSentTime": "2012-12-21 03:02:00",
        "audioUrl": "http://someurl.com/someAudioFile.wav",
        "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j"
    },
    {
        "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8333",
        "messageState": "new",
        "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g5d",
        "conversationClass": 0,
        "userClass": 1, // userClass = 1 means Reply from CC
        "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
        "fromUserDisplayName": "idp100",
        "fromUserIcon": "images/idp100.jpg",
        "messageSentTime": "2012-12-21 03:02:00",
        "audioUrl": "http://someurl.com/someAudioFile.wav",
        "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j"
    },
    {
        "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8114",
        "messageState": "new",
        "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g52", // makeup conversationId
        "conversationClass": 0,
        "userClass": 0,
        "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
        "fromUserDisplayName": "idp101",
        "fromUserIcon": "images/idp101.jpg",
        "messageSentTime": "2012-12-21 03:10:00",
        "audioUrl": "http://someurl.com/someAudioFile.wav",
        "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j"
    },
     {
         "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8115",
         "messageState": "new",
         "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g52", // makeup conversationId
         "conversationClass": 0,
         "userClass": 0,
         "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
         "fromUserDisplayName": "idp101",
         "fromUserIcon": "images/idp101.jpg",
         "messageSentTime": "2012-12-21 03:11:00",
         "audioUrl": "http://someurl.com/someAudioFile.wav",
         "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j"
     }
    ,
    {
        "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8116",
        "messageState": "new",
        "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g52", // makeup conversationId
        "conversationClass": 0,
        "userClass": 0,
        "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
        "fromUserDisplayName": "idp101",
        "fromUserIcon": "images/idp101.jpg",
        "messageSentTime": "2012-12-21 03:12:00",
        "audioUrl": "http://someurl.com/someAudioFile.wav",
        "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j"
    },
    {
         "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8117",
         "messageState": "new",
         "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g52", // makeup conversationId
         "conversationClass": 0,
         "userClass": 0,
         "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
         "fromUserDisplayName": "idp101",
         "fromUserIcon": "images/idp101.jpg",
         "messageSentTime": "2012-12-21 03:13:00",
         "audioUrl": "http://someurl.com/someAudioFile.wav",
         "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j"
     },
     {
         "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8118",
         "messageState": "new",
         "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g52", // makeup conversationId
         "conversationClass": 0,
         "userClass": 0,
         "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
         "fromUserDisplayName": "idp101",
         "fromUserIcon": "images/idp101.jpg",
         "messageSentTime": "2012-12-21 03:14:00",
         "audioUrl": "http://someurl.com/someAudioFile.wav",
         "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j"
    }
    ,
    {
        "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8119",
        "messageState": "new",
        "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g52", // makeup conversationId
        "conversationClass": 0,
        "userClass": 0,
        "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
        "fromUserDisplayName": "idp101",
        "fromUserIcon": "images/idp101.jpg",
        "messageSentTime": "2012-12-21 03:15:00",
        "audioUrl": "http://someurl.com/someAudioFile.wav",
        "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s1j"
    },
    {
        "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8120",
        "messageState": "new",
        "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g53", // makeup conversationId second
        "conversationClass": 0,
        "userClass": 0,
        "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
        "fromUserDisplayName": "idp103",
        "fromUserIcon": "images/idp103.jpg",
        "messageSentTime": "2012-12-21 03:31:00",
        "audioUrl": "http://someurl.com/someAudioFile.wav",
        "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s13"
    },
     {
         "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8121",
         "messageState": "new",
         "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g53", // makeup conversationId second
         "conversationClass": 0,
         "userClass": 0,
         "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
         "fromUserDisplayName": "idp103",
         "fromUserIcon": "images/idp103.jpg",
         "messageSentTime": "2012-12-21 03:32:00",
         "audioUrl": "http://someurl.com/someAudioFile.wav",
         "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s13"
     }
    ,
    {
        "messageId": "06898919-1bee-9fe7-357c-b0e0b3cb8122",
        "messageState": "new",
        "conversationId": "65438919-1bee-9fe7-357c-b0e0b3cb9g53", // makeup conversationId second
        "conversationClass": 0,
        "userClass": 0,
        "fromUserId": "19298919-1bee-9fe7-357c-b0e0b3cs6a9a",
        "fromUserDisplayName": "idp103",
        "fromUserIcon": "images/idp103.jpg",
        "messageSentTime": "2012-12-21 03:33:00",
        "audioUrl": "http://someurl.com/someAudioFile.wav",
        "intendedParty": "0293919-1bee-9fe7-357c-b0e0b3cs7s13"
    }

]
}

// ===============================================