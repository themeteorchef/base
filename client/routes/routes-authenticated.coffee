Router.map(->
    ###
        @route('exampleAuthenticatedRoute',
            path: '/example'
            template: 'example'
            layoutTemplate: 'customLayoutExample'
            onBeforeAction: ->
                # Code to run before route goes here.
        )
    ###
)
