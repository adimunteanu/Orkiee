# CoffeeScript
SimpleListModel=(items)->
    @items=ko.observableArray(items)
    @itemToAdd=ko.observable ('')
    @addItem=(->
        if @itemsToAdd!=""
            @items.push @itemToAdd()
            @itemToAdd ""
            return
    ).bind(this)
    return
ko.applyBindings new SimpleListModel([
    "Alpha"
    "Beta"
    "Gamma"
])