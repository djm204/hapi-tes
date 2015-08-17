var db = require('../../store/db');

function update(item){
	var id = item.id;
	return db('items')
		.where({id : id})
		.update({
			activated: 'false'
			});
}

module.exports = update;