
LoadDummyData = function () {
    Games.remove({});
    Players.remove({});
    Tasks.remove({});

    p1 = Players.insert({ "name": "MHE" })
    p2 = Players.insert({ "name": "FER" })
    p3 = Players.insert({ "name": "HLI" })

    players = [p1, p2];
    players2 = [p1, p3];

    //data.createGame(players,true);
    data.createGame(players, true);
    data.createGame(players, true);
    data.createGame(players, true);
    data.createGame(players, true);
    data.createGame(players, true);
    data.createGame(players2,false);

    return true;
}


var data = {};
data.createGame = function (players,withPoints) {
    var taskid;
    var orderNbr = 1;

    var gameid = Games.insert({
        "timestamp": new Date().toISOString(),
        "active" : true,
        "name": new Date().toISOString(),
        "players": players
        
    });


    //each round
    $(Round.events).each(function (index) {
        round = this;

        //each player
        for (i = 0; i < players.length; i++){
            player = Players.findOne(players[i]);

            point = withPoints ? lipsum.numberWithZeroFreq(80,0.3) : null;
            
            taskid = Tasks.insert({
                "game": gameid
                , "round": round
                , "order": orderNbr++
                , "points": point
                , "player" : player
            })

            //console.log(Tasks.findOne(taskid));
        };
    });

    return true;

};