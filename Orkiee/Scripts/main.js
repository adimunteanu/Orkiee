project = function (data) {
    this.name = ko.observable(data.name);
    this.procent = ko.observable(data.procent);
}

$(document).ready(function () {
    function AppViewModel() {
        var self = this;

        self.projects = ko.observableArray();

        self.addProject = function () {
            var new_project = new project({name: "Project", procent: 0});
            self.projects.push(new_project);
        };


    }

    ko.applyBindings(new AppViewModel());
});

