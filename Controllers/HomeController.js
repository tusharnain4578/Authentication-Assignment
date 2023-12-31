const path = require("path");
const fs = require("fs");

class HomeController {
  homeView = (req, res) => {
    const lgSuccess = req.flash("lgSuccess");

    res.render("home", {
      name: req.session.user.name,
      email: req.session.user.email,
      lgSuccess: lgSuccess.length > 0 ? lgSuccess : null,
    });
  };
}

const Home = new HomeController();

module.exports = Home;
