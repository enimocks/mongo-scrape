var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
  headline: {
    type: String,
    unique: true,
    required: true
  },
  summary: {
    type: String
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
