// grab the mongoose module
var mongoose = require('mongoose');

var commentsSchema = mongoose.Schema({
    discussion_id: { type: String, default: '' },
    slug: String,
    author_id: String,
    name: String,
    text: String,
  },
  { 
  	collection : 'comments',
  	timestamps : true 
  });

// define our model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Comment', commentsSchema);