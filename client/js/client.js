
Meteor.subscribe("games");
Meteor.subscribe("players");
Meteor.subscribe("tasks");

half = {};

Meteor.startup(function () {

    //set game
    if (!Session.get("game")) {
        
    }

    //set mode
    if (!Session.get("mode")) {
        Session.set("mode", MODES.INPUT.value);
    }

    //set task
    if (!Session.get("task")) {
        Session.set("task", null);
    }

    half.setGame = function (game) {
        Session.set("game", game);
        half.gotoServerTask();
    }

});
