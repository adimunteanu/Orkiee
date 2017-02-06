(function() {
  var AppViewModel;

  AppViewModel = function() {
    this.firstName = ko.observable("Bob");
    this.lastName = ko.observable("Smith");
    this.fullName = ko.computed((function() {
      return this.firstName() + " " + this.lastName();
    }), this);
  };

  ko.applyBindings(AppViewModel);

}).call(this);

//# sourceMappingURL=test.js.map
