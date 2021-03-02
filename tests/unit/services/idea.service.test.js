const { IdeaService } = require("../../../src/services");
const { IdeaRepositoryMock } = require("../../mocks");
const {
  IdeaModelMock: { idea, ideas },
} = require("../../mocks");

describe("Idea Service Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a idea by id", async () => {
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.get.mockReturnValue(idea);

    const _ideaService = new IdeaService({ IdeaRepository });
    const expected = await _ideaService.get(idea._id);
    expect(expected).toMatchObject(idea);
  });

  it("Should create a idea", async () => {
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.create.mockReturnValue(idea);

    const _ideaService = new IdeaService({ IdeaRepository });
    const expected = await _ideaService.create();
    expect(expected).toMatchObject(idea);
  });

  it("Should return a idea collection", async () => {
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.getAll.mockReturnValue(ideas);

    const _ideasService = new IdeaService({ IdeaRepository });
    const expected = await _ideasService.getAll();
    expect(expected).toMatchObject(ideas);
  });

  it("Should update a idea by id", async () => {
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.update.mockReturnValue(idea);

    const _ideasService = new IdeaService({ IdeaRepository });
    const expected = await _ideasService.repository.update(idea._id, idea);
    expect(expected).toMatchObject(idea);
  });

  it("Should delete a idea by id", async () => {
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.delete.mockReturnValue(true);

    const _ideasService = new IdeaService({ IdeaRepository });

    const expected = await _ideasService.repository.delete(idea._id);
    expect(expected).toEqual(true);
  });

  it("Should return a user Ideas by author", async () => {
    const IdeaRepository = IdeaRepositoryMock;
    IdeaRepository.getUserIdeas.mockReturnValue(ideas);

    const _ideaService = new IdeaService({ IdeaRepository });
    const expected = await _ideaService.getUserIdeas(idea.author);
    expect(expected).toMatchObject(ideas);
  });
});
