import { Template } from 'meteor/templating';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.specialChars = '&gt;';
});

Template.hello.helpers({
  specialChars() {
    return Template.instance().specialChars;
  }
});
