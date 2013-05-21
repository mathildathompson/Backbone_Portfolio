app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  className: 'project',
  //project div is on the index page
  template: _.template($('#project-template').html()),
  events: {
    'dblclick .project-name': 'editProjectName',
    'keypress .edit-title': 'updateTitle',
    'dblclick .body': 'editBody',
    'keypress .edit-body': 'updateBody',
    'click .remove-project': 'editRemoveProject',
  },
  //pick up the double click for that event, 
  //this action, on this object, do this function

  //extend takes all the scary stuff out of inheritance

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  //in this case, this is the project view of backbone
  //el is the raw DOM element in your page
  //take en empty div and fill it with the content from a template
  // render a template and put the resulting html in the view 
  // find the elemnt and change the html to be what my template looks like and put stuff from model into template

  editProjectName: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    if(event.which !== 13 || !new_title) {
      return;
    }
    this.model.set('title', new_title);
    this.model.save();
    this.$el.find('.edit-title').val('').hide().prev('h3').show().html(new_title);
  },

  editBody: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-body').show().focus().prev('div.body').hide();
  },

  updateBody: function() {
    var new_body = this.$el.find('.edit-body').val().trim();
    if(event.which !== 13 || !new_body) {
      return;
    }

    this.model.set('body', new_body);
    this.model.save();
    this.$el.find('.edit-body').val('').hide().prev('div.body').show().html(new_body);
  },

   editRemoveProject: function() {
    this.$el.find('.info').fadeToggle();
  },

});

// project is a div element in the dom, this section of the page is going to be looked after by this view, bind the view to the CSS selector DOm element