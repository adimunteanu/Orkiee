(function() {
  var MyViewModel;

  MyViewModel = function() {
    this.produce = ['Apple', 'Banana', 'Celery', 'Corn', 'Orange', 'Spinach'];
    this.selectedProduce = ko.observableArray(['Corn', 'Orange']);
    this.selectedAllProduce = ko.pureComputed({
      read: function() {
        return this.selectedProduce().length === this.produce.length;
      },
      write: function(value) {
        this.selectedProduce(value ? this.produce.slice(0) : []);
      },
      owner: this
    });
  };

  ko.applyBindings(new MyViewModel);

}).call(this);

//# sourceMappingURL=test.js.map
