const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photoUrl: String,
    name: String,
  })
  module.exports = mongoose.model('Post', postSchema);