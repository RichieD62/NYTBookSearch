const router = require("express").Router();
const booksController = require("../../controller/booksController");
const catchAllRoute = ("../../public/index.html")

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router.route("*")
    .get(catchAllRoute)


module.exports = router;
