//could be myuser = Backbone.Model.extend (is not doing associations)



app.models.User = Backbone.Model.extend({

  

  full_name: function() {
    return this.attributes.first_name + " " + this.attributes.last_name;
  }

});

//initialize: function(){
	//this.bind('invalid, showError')
//},
//validate that a model has certain attributes

//validate: function(){
	//if(typeOf firstName == undefined || firstName == null || firstName.length)
	//return "invalid";
//is the length of the title //greater than zero
//}
// //showError: function(model, error){
// 	$('#errors').append(error).slideDown();
// }