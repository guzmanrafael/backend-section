const { IdeaRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { Idea } = require("../../../src/models");
let {
  IdeaModelMock: { ideas, idea },
} = require("../../mocks");

describe("Idea Repository Tests", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should return a idea by id", async () => {
    const _idea = { ...idea };
    mockingoose(Idea).toReturn(idea, "findOne");

    const _ideaRepository = new IdeaRepository({ Idea });
    const expected = await _ideaRepository.get(_idea._id);
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_idea);
  });

  it("Should return a idea collection", async () => {
    mockingoose(Idea).toReturn(ideas, "find");

    const _ideaRepository = new IdeaRepository({ Idea });
    const expected = await _ideaRepository.getAll();
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(ideas);
  });

  it("Should return a new idea", async () => {
    mockingoose(Idea).toReturn(idea, "save");
    const _ideaRepository = new IdeaRepository({ Idea });
    const expected = await _ideaRepository.create(idea);
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(idea);
  });

  it("Should update an especific idea by id", async () => {
    const _idea = { ...idea };
    mockingoose(Idea).toReturn(_idea, "findOneAndUpdate");
    const _ideaRepository = new IdeaRepository({ Idea });
    const expected = await _ideaRepository.update(idea._id, {
      idea: "update",
    });

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_idea);
  });

  it("Should delete an especific idea by id", async () => {
    mockingoose(Idea).toReturn(idea, "findOneAndDelete");
    const _ideaRepository = new IdeaRepository({ Idea });
    const expected = await _ideaRepository.delete(idea._id);
    expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
  });

  it("Should return a user Ideas by author", async () => {
    const _idea = { ...idea };
    mockingoose(Idea).toReturn(idea, "find");

    const _ideaRepository = new IdeaRepository({ Idea });
    const expected = await _ideaRepository.getUserIdeas(_idea.author);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_idea);
  });
});
