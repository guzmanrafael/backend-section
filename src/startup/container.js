const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../config");
const app = require(".");

// services
const {
  HomeService,
  UserService,
  IdeaService,
  CommentService,
  AuthService,
} = require("../services");

// controllers
const {
  UserController,
  IdeaController,
  CommentController,
  AuthController,
} = require("../controllers");

// routes
const {
  UserRoutes,
  IdeaRoutes,
  CommentRoutes,
  AuthRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes");

// models
const { User, Idea, Comment } = require("../models");

// repositories
const {
  UserRepository,
  IdeaRepository,
  CommentRepository,
} = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  });

module.exports = container;
