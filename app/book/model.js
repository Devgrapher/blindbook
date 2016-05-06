// grab the mongoose module
var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name: { type: String, default: '' },
    tags: [{ type: String }],
    donation_date: { type: Date, default: Date.now },
    owner: String,
    borrower: String,
    return_date: Date
  },
  {
  	collection : 'books',
  	timestamps : true 
  });

// define our model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Book', bookSchema);
