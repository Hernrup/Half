
Handlebars.registerHelper('getPoints', function (game, round, player) {
    
    var t = Tasks.findOne({ "game": game, "round.id": round, "player._id": player });
    var points;
    if (t) {
        points = t.points;
    }
    aggregated = getAggregatedPoints(game, round, player);
    cls = points === 0 ? "circle" : "";
    html = '<span class="' + cls + '">' + aggregated + '</span>'

    return html;
});


Handlebars.registerHelper('getPlayerName', function (id) {

    var t = Players.findOne(id);
    var name = t ? t.name : "";

    return name;
});

Handlebars.registerHelper('getGameName', function (id) {

    var t = Games.findOne(id);
    var name = t ? t.name : "";

    return name;
});

Handlebars.registerHelper('formatPoints', function (points) {

    points = points == null ? "" : points;
    cls = points === 0 ? "circle" : "";

    html = '<span class="' + cls + '">' + points + '</span>'

    return html;
});