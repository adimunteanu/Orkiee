$(document).ready(function(){
    function AppViewModel() {
        var self = this;

        self.projects = ko.observableArray();

        self.addProject = function () {
            var object = ko.observable({
                name: 'New Project',
                procent: '0%'
            });
            object.name = ko.observable();
            self.projects.push(object);
        };


    }

    ko.applyBindings(new AppViewModel());
});

