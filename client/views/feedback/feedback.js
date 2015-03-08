Template.feedback.helpers({

});

Template.feedback.events({
  "click .submit-feedback": function(event) {
    console.log('feedback submitted');
    return false;
  }
});
