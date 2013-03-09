Template.controls.games = function () {
    return Games.find({}, { sort: { name: 1 } });
};

Template.controls.modes = function () {
    return MODES.array;
};
Template.controls.activeMode = function () {
    return Session.get("mode");
};

Template.controls.activeGame = function () {
    return Session.get("game");
};

Template.controls.events({
    'click #modeSelector': function (event) {
        var mode = $(event.target).attr("rel");
        var result = $.grep(MODES.array, function (e) { return e.value == mode; });

        if (result.length > 0) {
            Session.set("mode", mode);
        } else {
            console.log("mode " + mode + " not found, mode switch disabled");
        }
        
        return false;
    }
});
Template.controls.events({
    'click #modeToggle': function (event) {
        var mode = Template.controls.activeMode();
       
        for (i = 0; i < MODES.array.length; i++) {
            if (MODES.array[i].value == mode) {
               
                mode = (i + 1 == MODES.array.length ? MODES.array[0].value : MODES.array[i + 1].value);
                Session.set("mode", mode);
                return;
            }
        }

       return false;
    }
});

Template.controls.events({
    'click #gameSelector': function (event) {
        var game = $(event.target).attr("rel");

        half.setGame(game);

        return false;
    }
});