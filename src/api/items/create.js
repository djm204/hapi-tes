var db = require('../../store/db');
var Promise = require('bluebird');


function put(item){
	return db("items")
		.insert({name: item, activated: true})
		.then(function (newIds) {return Promise.resolve(newIds[0]); });
}

module.exports = put;