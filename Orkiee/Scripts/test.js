(function() {
  var project, projectsView;

  project = (function() {
    function project(data) {
      console.log(data);
      this.name = ko.observable(data.name || 'blank');
      this.percent = ko.observable(data.percent || '0%');
    }

    return project;

  })();

  projectsView = (function() {
    function projectsView() {
      this.projects = ko.observableArray([]);
      this.new_title = ko.observable('');
      this.addProject = (function(_this) {
        return function() {
          var data, new_project;
          console.log(_this.new_title());
          data = {
            name: _this.new_title(),
            percent: '0%'
          };
          console.log(data);
          new_project = new project(data);
          return _this.projects.push(new_project);
        };
      })(this);
      this.username = ko.observable('');
      this.password = ko.observable('');
    }

    return projectsView;

  })();

  window.myview = (function(_this) {
    return function() {
      return new projectsView;
    };
  })(this);

  window.onload = function() {
    window.my_view = new myview();
    return ko.applyBindings(my_view);
  };

}).call(this);

//# sourceMappingURL=test.js.map
