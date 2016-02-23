import login from '../../modules/login';

Template.login.onRendered( () => {
  login( { form: '#login', template: Template.instance() } );
});

Template.login.events({
  'submit form': ( event ) => event.preventDefault()
});
