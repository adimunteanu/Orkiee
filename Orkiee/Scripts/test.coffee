# CoffeeScript
MyViewModel= ->
    @acceptedNumericValue = ko.observable(123)
    @lastInputWasValid = ko.observable(true)
    @attemptedValue = ko.pureComputed(
        read: @acceptedNumericValue
        write: (value) ->
            if isNaN(value)
                @lastInputWasValid false
            else
                @lastInputWasValid true
                @acceptedNumericValue value
            return
        owner: this)
    return
ko.applyBindings new MyViewModel