// grab the mongoose module
var mongoose = require('mongoose');

var memberSchema = mongoose.Schema({
    name: { type: String, default: '' },
    phone: String
  },
  {
  	collection : 'members',
  	timestamps : true 
  });

module.exports = mongoose.model('Member', memberSchema);
 