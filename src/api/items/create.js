var db = require('../../store/db');
var Promise = require('bluebird');


function put(item){
	return db("items")
		.insert(item)
		.then(function (newIds) {return Promise.resolve(newIds[0]); });
}

module.exports = put;