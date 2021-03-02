const BaseRepository = require("./base.repository");
let _comment = null;

class CommentRepository extends BaseRepository {
  constructor({ Comment }) {
    super(Comment);
    _comment = Comment;
  }

  async getIdeaComments(ideaId) {
    return await _comment.find({ ideaId });
  }

  async createdComment(comment) {
    return await _comment.create(comment);
  }
}

module.exports = CommentRepository;
