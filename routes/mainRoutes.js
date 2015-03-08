// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/validation', {
  name: 'validation',
  action: function () {
    this.render('validation');
    SEO.set({ title: 'Patient Validation - ' + Meteor.App.NAME });
  }
});

Router.route('/feedback', {
  name: 'feedback',
  action: function () {
    this.render('feedback');
    SEO.set({ title: 'Patient Feedback - ' + Meteor.App.NAME });
  }
});
