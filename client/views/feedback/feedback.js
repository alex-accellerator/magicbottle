Template.pfeedback.helpers({

});

Template.pfeedback.events({
    "submit .new-feedback": function (event) {

      var text = event.target.text.value;

      Meteor.call("addTask", text);
      /*
      Tasks.insert({
        text: text,
        createdAt: new Date(), // current time
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
      });
      */

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
});
