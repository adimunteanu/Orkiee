(function() {
  var AppData;

  AppData = function() {
    this.firstName = ko.observable("John");
    this.lastName = ko.observable("Burns");
    this.prefix = ko.observable("Dr.");
    this.computedLog = ko.observable("Log: ");
    this.fullName = ko.pureComputed((function() {
      var value;
      value = this.prefix() + " " + this.firstName() + " " + this.lastName();
      this.computedLog(this.computedLog.peek() + value + ';');
      return value;
    }), this);
    this.step = ko.observable(0);
    this.next = function() {
      this.step(this.step() === 2 ? 0 : this.step() + 1);
    };
  };

  ko.applyBindings(new AppData);

}).call(this);

//# sourceMappingURL=test.js.map
