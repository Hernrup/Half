
if (Meteor.isServer) {
    Meteor.startup(function () {
        
    });
}

Meteor.publish("games", function () {
    return Games.find();
});
Meteor.publish("players", function () {
    return Players.find();
});
Meteor.publish("tasks", function () {
    return Tasks.find();
});
