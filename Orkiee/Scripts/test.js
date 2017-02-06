(function() {
  var project, projectsView;

  project = (function() {
    function project(data) {
      this.id = ko.observable(data.id);
      this.name = ko.observable(data.name || 'blank');
      this.percent = ko.observable(data.percent || '0%');
      this.project_class = ko.observable("slider_" + this.id().toString());
      this.createSlider = (function(_this) {
        return function() {
          var div, slider_properties;
          slider_properties = {
            range: "min",
            min: 0,
            max: 100,
            value: 0,
            slide: function(event, ui) {
              return _this.percent(ui.value);
            }
          };
          div = $(".slider_" + _this.id());
          console.log(div);
          return div.slider(slider_properties);
        };
      })(this);
    }

    return project;

  })();

  projectsView = (function() {
    function projectsView() {
      var slider_properties;
      slider_properties = {
        range: "min",
        min: 0,
        max: 100,
        value: 0,
        slide: function(event, ui) {
          return $(".amount").val(ui.value);
        }
      };
      $(".slider").slider(slider_properties);
      $(".amount").val($(".slider").slider("value"));
      this.projects = ko.observableArray([]);
      this.new_title = ko.observable('');
      this.addProject = (function(_this) {
        return function() {
          var data, new_project;
          data = {
            id: _this.projects.length,
            name: _this.new_title(),
            percent: '0%'
          };
          new_project = new project(data);
          _this.projects.push(new_project);
          return setTimeout(new_project.createSlider, 200);
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
