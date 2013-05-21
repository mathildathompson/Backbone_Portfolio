describe("A Project", function() {
 
  var project;
 
  beforeEach(function() {
    project = new app.models.Project({
      title: "My amazing test project"
    });
  });
 
  it("should be able to retreive the title", function() {
    expect(project.get("title")).toEqual("My amazing test project");
  });
 
 
  it("should not have an id because its not persisted", function(){
    expect(project.id).toBeUndefined();
  });
 
  it("should  have a cid", function(){
  	expect(project.cid).not.toBe(null);
  });
 
  it("should throw an error if i try and set the URL to empty string",function() {
  
  });
  describe("Persistance in local storage", function(){
  	beforeEach(function(){
  		// var productList = new app.collections.ProjectList();
  		// projectList.add(project);
  		// projectList.sync();
  	});
  it("should have an id", function(){
  	// expect(project.id).not_be null
  });
  });
  describe("Setting an attribute",function(){
  	beforeEach(function(){
  			project.set({
  				"title" : "Cool Beans"
  			});
  	});
 
  it('should be update the title', function(){
  	expect(project.get("title")).toEqual("Cool Beans Changed");
  });
 
  });
 
  // describe("validation", function(){
  // // 	beforeEach(function() {
  // //   project = new app.models.Project({
  // //     title: "My amazing test project"
  // //     url: ""
  // //   });
  // // });
  // 	it("should raise an error because it didnt validate", function() {
  // 		expect(project.validate()).toThrow();
  // 	});
  // });
 
});