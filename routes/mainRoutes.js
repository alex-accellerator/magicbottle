// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/splash', {
  name: 'splash',
  action: function () {
    this.render('splash');
    SEO.set({ title: 'Splashpage - ' + Meteor.App.NAME });
  }
});

Router.route('/login', {
  name: 'login',
  action: function () {
    this.render('login');
    SEO.set({ title: 'Login - ' + Meteor.App.NAME });
  }
});

Router.route('/patient', {
  name: 'patient',
  action: function () {
    this.render('patient');
    SEO.set({ title: 'Patient Info - ' + Meteor.App.NAME });
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
