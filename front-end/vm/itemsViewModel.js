var Person = function(id, name, activated){
	 
	 this.name = ko.observable(name);
	 this.id = ko.observable(id);
	 this.activated = ko.observable(activated);
	 
	 
}

function itemsViewModel() {
	var self = this;
	
	self.people = ko.observableArray();
	self.newUserName = ko.observable();
	
	
	$.getJSON("/items", function() {
				console.log("Successfully accessed GET - items");
			})
			.done(function(data){
				$.map(data, function(item){ 
				
					var name = item.name;
					var id = item.id;
					var activated = item.activated;
					
					var person = new Person(id, name, activated);
					console.log(activated);
					self.people.push(person);
					})
				console.log("Done.");
			})
			.fail(function(error){
				console.log("Failed: " + error.toString());	
			})
			.always(function(){
				console.log("Finished.");
			}); 
			
	/*self.addItem = function() {
		self.people.push(new Person({name: this.newUserName()}));
		self.newUserName("");
	};*/
	self.removePerson = function(person){ 
		self.people.destroy(person);
		self.update(person);
		};
	
	self.update = function(person){
		$.ajax({
			url: "/items",
			data: ko.toJSON({id: person.id()}),
			type: "post",
			contentType: "application/json",
			success: function() { console.log("Successfully deleted: "+ person.id());}
		});
		
	};	
	
	self.create = function() {
		var name = this.newUserName();
		console.log("create fired." + ko.toJSON(name));
		$.ajax({
			url:"/items", 
			data: ko.toJSON(name),
			type: 'put', 
			contentType: "application/json",
			success: function(data) {console.log(data)}
		});
		
	};
	
		
			

	
}
	

	