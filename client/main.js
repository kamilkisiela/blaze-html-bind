import { Template } from 'meteor/templating';

import './main.html';

Template.hello.helpers({
  raw() {
    return '>';
  },
  escaped() {
    return '&gt;';
  }
});
