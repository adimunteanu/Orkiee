# CoffeeScript
AppViewModel=->
    @firstName= ko.observable "Bob"
    @lastName= ko.observable "Smith"
    
    @fullName=ko.computed((->
        @firstName() + " " + @lastName()
    ),this)
    return
ko.applyBindings(AppViewModel)