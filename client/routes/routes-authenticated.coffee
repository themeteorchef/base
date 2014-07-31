Router.map(->
  @route('index',
    path: '/'
    template: 'index'
    onBeforeAction: ->
        # Code to run before route goes here.
  )
)
