
Template.view.modes = function () {
    return MODES;
};
Template.view.activeMode = function () {
    return Session.get("mode");
};