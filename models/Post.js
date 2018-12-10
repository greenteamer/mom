const mongoose = require('mongoose');


const schema = new mongoose.schema({
  name: {
    type: 'string',
    required: true,
  },
  text: 'string',
  created_at: Date,
  updated_at: Date,
});

const Post = mongoose.model('Post', schema);

module.exports = Post; 
