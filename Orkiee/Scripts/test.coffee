# CoffeeScript
AppData= ->
    @firstName=ko.observable "John"
    @lastName=ko.observable "Burns"
    @prefix=ko.observable "Dr."
    @computedLog=ko.observable "Log: "
    @fullName=ko.pureComputed((->
        value = @prefix() + " " + @firstName() + " " + @lastName()
        @computedLog @computedLog.peek() + value + ';' 
        return value
    ),this)
    @step=ko.observable(0)
    
    @next= ->
        @step if @step()==2 then 0 else @step()+1
        return
    return
ko.applyBindings new AppData