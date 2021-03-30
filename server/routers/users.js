const { Router } = require("express");
const router = Router();

router
  // routes will be specified at the app-level
  .route("/") // equivalent to /users
  .get((request, response) => {
    response.json({ user: "Monical" });
  })
  .post((request, response) => {
    response.json(request.body);
  });
// don't forget to export the router Object
module.exports = router;
