# CoffeeScript
class project
    constructor: (data) ->
        console.log(data)
        @name = ko.observable data.name || 'blank'
        @percent = ko.observable data.percent || '0%'
 
class projectsView
    constructor: ->
        
        @projects = ko.observableArray []
        @new_title = ko.observable ''
        @addProject = =>
            console.log(@new_title())
            data = {
                name: @new_title(),
                percent: '0%'
            }
            console.log(data)
            new_project = new project(data)
            @projects.push(new_project)
        
        @username = ko.observable ''
        @password = ko.observable ''

    
window.myview  = => new projectsView

window.onload = ->
    window.my_view = new myview()
    ko.applyBindings(my_view)