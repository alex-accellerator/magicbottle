Template.feedback.helpers({

});

Template.feedback.events({
  "click .submit-feedback": function() {
    console.log('feedback submitted');
    return false;
  }
});
