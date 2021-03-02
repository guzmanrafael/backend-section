const { CommentService } = require("../../../src/services");
const { CommentRepositoryMock } = require("../../mocks");
const {
  CommentModelMock: { comment, comments },
  IdeaModelMock: { idea },
} = require("../../mocks");

describe("Comment Service Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a comment by id", async () => {
    const CommentRepository = CommentRepositoryMock;
    CommentRepository.get.mockReturnValue(comment);

    const _commentService = new CommentService({ CommentRepository });
    const expected = await _commentService.get(comment._id);
    expect(expected).toMatchObject(comment);
  });

  it("Should update a comment by id", async () => {
    const CommentRepository = CommentRepositoryMock;
    CommentRepository.update.mockReturnValue(comment);

    const _commentService = new CommentService({ CommentRepository });
    const expected = await _commentService.repository.update(
      comment._id,
      comment
    );
    expect(expected).toMatchObject(comment);
  });

  it("Should delete a comment by id", async () => {
    const CommentRepository = CommentRepositoryMock;
    CommentRepository.delete.mockReturnValue(true);

    const _commentService = new CommentService({ CommentRepository });

    const expected = await _commentService.repository.delete(comment._id);
    expect(expected).toEqual(true);
  });

  it("Should return a Ideas comments by Idea Id", async () => {
    const CommentRepository = CommentRepositoryMock;
    CommentRepository.getIdeaComments.mockReturnValue(comments);

    const _commentService = new CommentService({ CommentRepository });
    const expected = await _commentService.getIdeaComments(idea._id);
    expect(expected).toMatchObject(comments);
  });

  it("Should create a comment", async () => {
    const CommentRepository = CommentRepositoryMock;
    CommentRepository.createdComment.mockReturnValue(comment, idea._id);

    const _commentService = new CommentService({ CommentRepository });
    const expected = await _commentService.createdComment(comment, idea._id);
    expect(expected).toMatchObject(comment);
  });
});
