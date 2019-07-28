import Controller from '@ember/controller';
import { match, not, gte, and } from '@ember/object/computed';

export default Controller.extend({
  emailAddress: '',
  textMessage: '',
  successMessage: '',

  isValidEmail: match('emailAddress',  /^.+@.+\..+$/), // if empty and not valid => false
  isValidMessage: gte('textMessage.length', 5), // if less than 5 .length => false
  isValid: and('isValidEmail', 'isValidMessage'), // false && false => false
  isNotValid: not('isValid'), // not false => true

  actions: {

    sendMessage() {
      alert(`Email Address: ${this.get('emailAddress')} with message: ${this.get('textMessage')}`);
      this.set('emailAddress', '');
      this.set('textMessage', '');
      this.set('successMessage', "We got you message and we'll get in touch soon");
    }

  }

});
