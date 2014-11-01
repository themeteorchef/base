Router.route('signup',
  path: '/signup'
  template: 'signup'
  onBeforeAction: ->
    Session.set 'currentRoute', 'signup'
    @next()
)

Router.route('login',
  path: '/login'
  template: 'login'
  onBeforeAction: ->
    Session.set 'currentRoute', 'login'
    @next()
)

Router.route('recover-password',
  path: '/recover-password'
  template: 'recoverPassword'
  onBeforeAction: ->
    Session.set 'currentRoute', 'recover-password'
    @next()
)

Router.route('reset-password',
  path: '/reset-password/:token'
  template: 'resetPassword'
  onBeforeAction: ->
    Session.set 'currentRoute', 'reset-password'
    Session.set 'resetPasswordToken', @params.token
    @next()
)
