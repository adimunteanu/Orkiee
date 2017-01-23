project = function (data) {
    this.name = ko.observable(data.name);
    this.procent = ko.observable(data.procent);
}

$(document).ready(function () {
    function AppViewModel() {
        var self = this;

        self.projects = ko.observableArray();
        self.new_title = ko.observable('');
        self.addProject = function () {
            var new_project = new project({name: self.new_title(), procent: "0%"});
            self.projects.push(new_project);
        };
        self.username = ko.observable('');
        self.password = ko.observable('');

    }

    ko.applyBindings(new AppViewModel());
});

