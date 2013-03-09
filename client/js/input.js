Template.input.tasks = function () {
    return Tasks.find({ game: Session.get("game") }, { sort: { order: 1 } });
};
Template.input.activeTask = function () {
    return Tasks.findOne(Session.get("task"));
};

Template.input.events({
    'click #prevTask': function (event) {
        half.gotoPrevTask();
        return false;
    },
    'click #nextTask': function (event) {
        half.gotoNextTask();
        return false;
    },
    'click #serverTask': function (event) {
        half.gotoServerTask();
        return false;
    },
    'click #inputButtonAdd': function (event) {
        half.addToTask();
        return false;
    },
    'click #inputButtonSubtract': function (event) {
        half.subtractToTask();
        return false;
    },
    'click #inputButtonHalf': function (event) {
        half.halfTask();
        return false;
    }
});


half.gotoServerTask = function () {
    task = Tasks.findOne({ game: Session.get("game") }, { sort: { points: 0, order: 1 } });
    Session.set("task", task._id);
}
half.gotoNextTask = function () {
    task = Template.input.activeTask();
    order = task.order + 1;
    task = Tasks.findOne({ game: Session.get("game"), order: order });
    if (task)
        Session.set("task", task._id);
}

half.gotoPrevTask = function () {
    task = Template.input.activeTask();
    order = task.order - 1;
    task = Tasks.findOne({ game: Session.get("game"), order: order });
    if (task)
        Session.set("task", task._id);
}

half.addToTask = function () {
    task = Template.input.activeTask();
    points = task.points + task.round.value;
    Tasks.update({ _id: task._id }, { $set: { points: points } });
}
half.subtractToTask = function () {
    task = Template.input.activeTask();
    points = task.points - task.round.value;
    Tasks.update({ _id: task._id }, { $set: { points: points } });
}
half.halfTask = function () {
    task = Template.input.activeTask();
    Tasks.update({ _id: task._id }, { $set: { points: 0 } });
}
