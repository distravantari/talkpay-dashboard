var BASE_URL = "https://talklogic.herokuapp.com";
var authorization = "";
var analyticsClient = "";
var analyticsChat = "";
var analyticsCustomer = "";
var analyticsEvents = "";
var analyticsChatUser = "";

$(window).ready(function() {
    if (typeof(Storage) !== "undefined" && typeof(window.sessionStorage.getItem('token')) !== "undefined") {
        authorization = window.sessionStorage.getItem("token");
        if (authorization == null || authorization == "") {
            window.sessionStorage.setItem("page", "dashboard.html");
            window.location = "/login.php";
        }
    } else {
        console.log("STORAGE SESSION UNSUPPORTED");
    }
    getAnalyticsChat();
    getAnalyticsCustomer();
    getAnalyticsClient();
    getAnalyticsEvents();
    getAnalyticsChatUser();
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(demo.initDashboardPageCharts()), 3000);
    });
});

function getAnalyticsChat() {
    var output;
    var request = new XMLHttpRequest();
    request.open("GET", BASE_URL + "/api/v1/analytics/chat");
    request.setRequestHeader("Authorization", authorization);
    request.onload = request.onerror = function() {
        try {
            data = JSON.parse(request.responseText);
        } catch(e) {
            output = "Error: " + e;
        }
        if (request.status !== 200) {
            output = "Error: got non-200 status code (" + request.status + ")";
        }else{
            output = data.data;
            analyticsChat = output;
        }
    }
    request.send();
}

function getAnalyticsClient() {
    var output;
    var request = new XMLHttpRequest();
    request.open("GET", BASE_URL + "/api/v1/analytics/clients");
    request.setRequestHeader("Authorization", authorization);
    request.onload = request.onerror = function() {
        try {
            data = JSON.parse(request.responseText);
        } catch(e) {
            output = "Error: " + e;
        }
        if (request.status !== 200) {
            output = "Error: got non-200 status code (" + request.status + ")";
        }else{
            output = data.data;
            analyticsClient = output;
        }
    }
    request.send();
}

function getAnalyticsCustomer() {
    var output;
    var request = new XMLHttpRequest();
    request.open("GET", BASE_URL + "/api/v1/analytics/customer");
    request.setRequestHeader("Authorization", authorization);
    request.onload = request.onerror = function() {
        try {
            data = JSON.parse(request.responseText);
        } catch(e) {
            output = "Error: " + e;
        }
        if (request.status !== 200) {
            output = "Error: got non-200 status code (" + request.status + ")";
        }else{
            output = data.data;
            analyticsCustomer = output;
        }
    }
    request.send();
}

function getAnalyticsEvents() {
    var output;
    var request = new XMLHttpRequest();
    request.open("GET", BASE_URL + "/api/v1/event/analytics");
    request.setRequestHeader("Authorization", authorization);
    request.onload = request.onerror = function() {
        try {
            data = JSON.parse(request.responseText);
        } catch(e) {
            output = "Error: " + e;
        }
        if (request.status !== 200) {
            output = "Error: got non-200 status code (" + request.status + ")";
        }else{
            output = data.data;
            analyticsEvents = output;
        }
    }
    request.send();
}

function getAnalyticsChatUser() {
    var output;
    var request = new XMLHttpRequest();
    request.open("GET", BASE_URL + "/api/v1/chats/analytics");
    request.setRequestHeader("Authorization", authorization);
    request.onload = request.onerror = function() {
        try {
            data = JSON.parse(request.responseText);
        } catch(e) {
            output = "Error: " + e;
        }
        if (request.status !== 200) {
            output = "Error: got non-200 status code (" + request.status + ")";
        }else{
            output = data.data;
            analyticsChatUser = output;
        }
    }
    request.send();
}

