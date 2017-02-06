(function() {
  var SimpleListModel;

  SimpleListModel = function(items) {
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable('');
    this.addItem = (function() {
      if (this.itemsToAdd !== "") {
        this.items.push(this.itemToAdd());
        this.itemToAdd("");
      }
    }).bind(this);
  };

  ko.applyBindings(new SimpleListModel(["Alpha", "Beta", "Gamma"]));

}).call(this);

//# sourceMappingURL=test.js.map
