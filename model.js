var Games = new Meteor.Collection("games");
var Players = new Meteor.Collection("players");
var Tasks = new Meteor.Collection("tasks");

var Round = {
    events : [
        { "id": 1, "name": "20", "value": 20, "multiValue": false },
        { "id": 2, "name": "19", "value": 19, "multiValue": false },
        { "id": 3, "name": "T", "value": 0, "multiValue": true },
        { "id": 4, "name": "18", "value": 18, "multiValue": false },
        { "id": 5, "name": "17", "value": 17, "multiValue": false },
        { "id": 6, "name": "D", "value": 0, "multiValue": true },
        { "id": 7, "name": "16", "value": 16, "multiValue": false },
        { "id": 8, "name": "15", "value": 15, "multiValue": false },
        { "id": 9, "name": "Σ", "value": 41, "multiValue": false },
        { "id": 10, "name": "B", "value": 25, "multiValue": false }
    ]
}

var MODES = {
    INPUT: { value: "1", name: "Input", code: "I", icon: "icon-comments" }
    ,OVERVIEW: { value: "2", name: "View", code: "O", icon: "icon-comments" }
    //,STATISTICS: { value: "3", name: "Stats", code: "S", icon: "icon-comments" }
}
MODES.array = [
    MODES.INPUT
    , MODES.OVERVIEW
    //, MODES.STATISTICS
]

