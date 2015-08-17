var Person = function(id, name){
	 
	 this.name = ko.observable(name);
	 this.id = ko.observable(id);
	 
	 
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
					
					var person = new Person(id, name);
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
	
	self.create = function() {
		var name = this.newUserName();
		$.ajax({
			url:"/items", 
			data: ko.toJSON(name),
			type: 'put', 
			contentType: "application/json",
			success: function(data) {console.log(data)}
		});
		
	};
	
	self.update = function(){
		var name = this.name();
		console.log("update fired.");
		$.ajax({
			url: "/items",
			data: ko.toJSON(name),
			type: "POST",
			contentType: "application/json",
			success: function() { console.log("Successfully deleted: "+ this.name())}
		});
		
	};		
			

	
}
	

	