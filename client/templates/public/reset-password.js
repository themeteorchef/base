import resetPassword from '../../modules/reset-password';

Template.resetPassword.onRendered( () => {
  resetPassword( { form: '#reset-password', template: Template.instance() } );
});

Template.resetPassword.events({
  'submit form': ( event ) => event.preventDefault()
});
