###
  Controller: Header
  Template: /client/includes/_header.html
###

# Created
Template.header.created = ->
  # Code to run when template is created goes here.

# Rendered
Template.header.rendered = ->
  # Code to run when template is rendered goes here.

# Helpers
Template.header.helpers(
  example: ->
    # Code to run for helper function.
)

# Events
Template.header.events(
  'click .logout': (e,t) ->
    Meteor.logout((error)->
      alert error.reason if error
    )
)
