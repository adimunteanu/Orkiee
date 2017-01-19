$(document).ready(function(){
    function AppViewModel() {
        var self = this;

        self.projects = ko.observableArray();

        self.addProject = function () {
            var object = {
                name: 'Project',
                procent:'0%'
            }
            self.projects.push(object);
        };


    }

    ko.applyBindings(new AppViewModel());
});

