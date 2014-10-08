Router.map(->

  @route('signup',
    path: '/signup'
    template: 'signup'
    onBeforeAction: ->
      Session.set 'currentRoute', 'signup'
  )

  @route('login',
    path: '/login'
    template: 'login'
    onBeforeAction: ->
      Session.set 'currentRoute', 'login'
  )

  @route('recover-password',
    path: '/recover-password'
    template: 'recoverPassword'
    onBeforeAction: ->
      Session.set 'currentRoute', 'recover-password'
  )

  @route('reset-password',
    path: '/reset-password/:token'
    template: 'resetPassword'
    onBeforeAction: ->
      Session.set 'currentRoute', 'reset-password'
      Session.set 'resetPasswordToken', @params.token
  )
)
