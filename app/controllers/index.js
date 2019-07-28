// import { computed, observer } from '@ember/object/computed';
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
  // set state
  // isDisabled: true,
  headerMessage: 'Coming Soon!',
  responseMessage: '',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  // get the state
  // actualEmailAddress: computed('emailAddress', function() {
  //   console.log('actualEmailAddress function is called: ', this.get('emailAddress'))
  // }),

  // watch if the state is change
  // emailAddressChanged: observer('emailAddress', function() {
  //   console.log('observer is called', this.get('emailAddress'))
  // })

  // isDisabled: computed('emailAddress', function() {
  //   return this.get('emailAddress') === '';
  // })

  // above method can be shortened to below - first import empty() from ember/object/computed
  // isDisabled: empty('emailAddress')

  actions: {

    saveInvitation() {

      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }

});
