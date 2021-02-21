module.exports = {
    index: index,
    products: products,
    about: about,
    contact: contact,
    account: account
  };
  
  function index(req, res) {
    res.render("index");
  }

  function products(req, res) {
    res.render("products");
  }

  function about(req, res) {
    res.render("about");
  }

  function contact(req, res) {
    res.render("contact");
  }

  function account(req, res) {
    res.render("account");
  }


  
  