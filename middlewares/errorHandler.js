const finalError = [
  function (req, res, next) {
      res.status(404).json(
          error("Page Not Found!"))
  },

  function (err, req, res, next) { //try res.render without any views will thrown here
      if (res.statusCode == 200) res.status(500).json(
          error("Internal Server Error")
      )
  }
]

module.exports = {
  finalError
}