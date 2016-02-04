import { signup } from '../../modules/signup';

Template.signup.onRendered( () => {
  signup( { form: "#signup", template: Template.instance() } );
});

Template.signup.events({
  'submit form': ( event ) => event.preventDefault()
});
