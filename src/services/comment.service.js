const BaseService = require("./base.service");
let _commentRepository = null;

class CommentService extends BaseService {
  constructor({ CommentRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
  }

  async getIdeaComments(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "IdeaId must be sent";
      throw error;
    }

    const comments = await _commentRepository.getIdeaComments(ideaId);
    if (!comments) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea does not exist";
      throw error;
    }

    return comments;
  }

  async createdComment(comment, ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "IdeaId must be sent";
      throw error;
    }

    comment.ideaId = ideaId;

    return await _commentRepository.createdComment(comment);
  }
}

module.exports = CommentService;
