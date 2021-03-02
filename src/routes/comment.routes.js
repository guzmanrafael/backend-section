const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function ({ CommentController }) {
  const router = Router();

  router.get("/:commentId/unique", [AuthMiddleware], CommentController.get);
  router.get(
    "/:ideaId",
    [AuthMiddleware, ParseIntMiddleware],
    CommentController.getIdeaComments
  );
  router.post("/:ideaId", [AuthMiddleware], CommentController.createdComment);
  router.patch("/:commentId", [AuthMiddleware], CommentController.update);
  router.delete("/:commentId", [AuthMiddleware], CommentController.delete);

  return router;
};
