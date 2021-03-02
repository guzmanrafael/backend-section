const { CommentRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { Comment } = require("../../../src/models");
let {
  CommentModelMock: { comment },
  IdeaModelMock: { idea },
} = require("../../mocks");

describe("Comment Repository Tests", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should return a comment by id", async () => {
    const _comment = { ...comment };
    mockingoose(Comment).toReturn(comment, "findOne");

    const _commentRepository = new CommentRepository({ Comment });
    const expected = await _commentRepository.get(_comment._id);
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_comment);
  });

  it("Should update an especific comment by id", async () => {
    const _comment = { ...comment };
    mockingoose(Comment).toReturn(_comment, "findOneAndUpdate");
    const _commentRepository = new CommentRepository({ Comment });
    const expected = await _commentRepository.update(comment._id, {
      comment: "update",
    });

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_comment);
  });

  it("Should delete an especific comment by id", async () => {
    mockingoose(Comment).toReturn(comment, "findOneAndDelete");
    const _commentRepository = new CommentRepository({ Comment });
    const expected = await _commentRepository.delete(comment._id);
    expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
  });

  it("Should return a Ideas Comments by Idea id", async () => {
    mockingoose(Comment).toReturn(comment, "find");

    const _commentRepository = new CommentRepository({ Comment });
    const expected = await _commentRepository.getIdeaComments(idea._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(comment);
  });
});
