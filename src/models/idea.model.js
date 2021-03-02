const mongoose = require("mongoose");
const { Schema } = mongoose;

const IdeaSchema = new Schema(
  {
    idea: { type: String, required: true },
    description: { type: String, required: true },
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

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("idea", IdeaSchema);
