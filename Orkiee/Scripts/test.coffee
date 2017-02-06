# CoffeeScript
MyViewModel= ->
    @firstName=ko.observable "Planet"
    @lastName=ko.observable "Earth"
    @fullName=ko.pureComputed(
        read: ->
            @firstName() + ' ' + @lastName()
        write:(value)->
            lastSpacePos= value.lastIndexOf ' '
            if lastSpacePos > 0
                @firstName(value.substring(0,lastSpacePos))
                @lastName(value.substring(lastSpacePos+1))
                return
        owner : @
    )
    return
ko.applyBindings (new MyViewModel)