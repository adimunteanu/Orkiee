(function() {
  var MyViewModel;

  MyViewModel = function() {
    this.firstName = ko.observable("Planet");
    this.lastName = ko.observable("Earth");
    this.fullName = ko.pureComputed({
      read: function() {
        return this.firstName() + ' ' + this.lastName();
      },
      write: function(value) {
        var lastSpacePos;
        lastSpacePos = value.lastIndexOf(' ');
        if (lastSpacePos > 0) {
          this.firstName(value.substring(0, lastSpacePos));
          this.lastName(value.substring(lastSpacePos + 1));
        }
      },
      owner: this
    });
  };

  ko.applyBindings(new MyViewModel);

}).call(this);

//# sourceMappingURL=test.js.map
