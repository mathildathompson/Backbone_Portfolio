app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  className: 'bio',
  template: _.template($('#user-template').html()),
  render: function() {
    // Get some HTML from somewhere
    //_.template creates a template
    var html = this.template({
      user: this.model
    });

    // Append it to this view's div#bio element
    // this.$el.html(html);

    // Attach it to the DOM
    $('#user-placeholder').html(this.$el.html(html));

    return this;
  }

});

// extend is a subclass method, like saying in rails, inherits from applications controller
// 1) render the template using underscore template function var html = _.template($('user-template').html())
// 2) pass the user into the template user : this.model
// 3) attach to the DOM, this.$el.html(html) (A JQuery object pointing to the div bio that we are creating in the view)
// 4) remember this is the tagName: 'div'
