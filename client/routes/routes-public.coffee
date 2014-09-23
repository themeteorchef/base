Router.map(->

  @route('signup',
    path: '/signup'
    template: 'signup'
    onBeforeAction: ->
      # Code to run before route goes here.
  )

  @route('login',
    path: '/login'
    template: 'login'
    onBeforeAction: ->
      # Code to run before route goes here.
  )

  @route('recover-password',
    path: '/recover-password'
    template: 'recoverPassword'
    onBeforeAction: ->
      # Code to run before route goes here.
  )

  @route('reset-password',
    path: '/reset-password/:token'
    template: 'resetPassword'
    onBeforeAction: ->
      Session.set 'resetPasswordToken', @params.token
  )
)
