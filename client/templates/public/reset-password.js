import { resetPassword } from '../../modules/login';

Template.resetPassword.onRendered( () => {
  resetPassword({
    form: "#reset-password",
    template: Template.instance()
  });
});

Template.resetPassword.events({
  'submit form': ( event ) => event.preventDefault()
});
