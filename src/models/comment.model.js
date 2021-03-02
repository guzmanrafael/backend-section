const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    comment: { type: String, required: true },
    ideaId: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      autopopulate: true,
    },
  },
  {
    timestamps: true,
  }
);

CommentSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("comment", CommentSchema);
