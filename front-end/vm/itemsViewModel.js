var Person = function(id, name){
	 
	 this.name = ko.observable(name);
	 this.id = ko.observable(id);
	 
	 
}

function viewModel() {
	var self = this;
	
	self.people = ko.observableArray();
	
	
	
	
	$.getJSON("/items", function(data) {
			var mappedPeople = $.map(data, function(item){ 
				
					console.log(item.id, item.name);
					var name = item.name;
					var id = item.id;
					
					var person = new Person(id, name);
					self.people.push(person);
					console.log(self.people.name);
					});
				/*for (var i = 0; i< data.length; i++)
				{
					var person = new Person(data[i].id, data[i].name);
					self.people.push(person);
					console.log(mappedPeople);
					//console.log(data[i].name + " " + data[i].id);
				}*/
				
		})
			.done(function(){
				console.log("done.");
			})
			.fail(function(){
				console.log("fail");	
			})
			.always(function(){
				console.log("finished.");
			}); ;
			
			

	
}
	

	