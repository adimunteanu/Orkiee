# CoffeeScript
MyViewModel= ->
    @produce=[
        'Apple'
        'Banana'
        'Celery'
        'Corn'
        'Orange'
        'Spinach'
    ]
    @selectedProduce=ko.observableArray([
        'Corn'
        'Orange'
    ])
    @selectedAllProduce=ko.pureComputed(
        read: ->
            @selectedProduce().length == @produce.length
        write:(value) ->
            @selectedProduce if value then @produce.slice(0) else [] 
            return
        owner:this
    )
    return
ko.applyBindings new MyViewModel