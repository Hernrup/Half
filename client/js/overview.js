Template.overview.tasks = function () {
    return Tasks.find({ game: Session.get("game") }, { sort: { name: 1 } });
};
Template.overview.activeTask = function () {
    return Tasks.findOne({ game: Session.get("game") }, { sort: { points: 0, order: 1 } });
};

Template.overview.round = function () {
    return Round;
};
Template.overview.game = function () {
    id = Session.get("game") || "";
    game = Games.findOne(id);
   
    return game;
};

getAggregatedPoints = function (game, round, player) {

    var t = Tasks.findOne({ "game": game, "round.id": round, "player._id": player });
    var points;
    var tp;
    var points_p;
    var aggregated;

    if (t) {
        points = t.points;
        if (round - 1 > 1) {
            points_p = getAggregatedPoints(game, round - 1, player);
        }
    }

    points_p = points_p == null ? 0 : points_p;

    if (points == null) {
        aggregated = "";
    } else if (points != 0) {
        aggregated = Math.ceil(points_p + points);
    }
    else {
        aggregated = Math.ceil(points_p / 2);
    }

    return aggregated;
}