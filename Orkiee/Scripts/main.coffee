# CoffeeScript
# CoffeeScript
class project
    constructor: (data) ->
        @id = ko.observable data.id 
        @name = ko.observable data.name || 'blank'
        @percent = ko.observable data.percent || '0%'
        @project_class = ko.observable "slider_" + @id().toString()
        @createSlider = =>
            slider_properties={
                range : "min"
                min: 0
                max: 100
                value: 0
                slide: (event,ui) =>
                    @percent(ui.value)
            }
            div = $(".slider_" + @id())
            console.log(div)
            div.slider(slider_properties)
 
class projectsView
    constructor: ->
        slider_properties={
            range : "min"
            min: 0
            max: 100
            value: 0
            slide: (event,ui)->
                $(".amount").val(ui.value)
        }
        $(".slider").slider(slider_properties)
        $(".amount").val( $(".slider").slider("value"))
        @projects = ko.observableArray []
        @new_title = ko.observable ''
        @addProject = =>
            data = {
                id: @projects.length
                name: @new_title(),
                percent: '0%'
            }
            new_project = new project(data)
            @projects.push(new_project)
            setTimeout(new_project.createSlider, 200)
        @username = ko.observable ''
        @password = ko.observable ''

    
window.myview  = => new projectsView

window.onload = ->
    window.my_view = new myview()
    ko.applyBindings(my_view)


    
