(function() {
  var MyViewModel;

  MyViewModel = function() {
    this.acceptedNumericValue = ko.observable(123);
    this.lastInputWasValid = ko.observable(true);
    this.attemptedValue = ko.pureComputed({
      read: this.acceptedNumericValue,
      write: function(value) {
        if (isNaN(value)) {
          this.lastInputWasValid(false);
        } else {
          this.lastInputWasValid(true);
          this.acceptedNumericValue(value);
        }
      },
      owner: this
    });
  };

  ko.applyBindings(new MyViewModel);

}).call(this);

//# sourceMappingURL=test.js.map
