if (Meteor.isServer) {
    Meteor.methods({
        strangeUsers: function () {
            this.unblock();
            return Meteor.http.call("GET", "http://jsonplaceholder.typicode.com/photos");
        }
    });
}

//invoke the server method
if (Meteor.isClient) {
    Meteor.call("strangeUsers", function(error, results) {
      if(error) 
        console.log(error);
      else
        console.log(results.content); //results.data should be a JSON object
    });
}