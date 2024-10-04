const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "GET messages",
    data: {
        messages: [
            {
                user: "John",
                message: "Hello World"
            },
            {
                user: "Maria",
                message: "Hello Universe"
            }
        ]
    },
  });
});



module.exports = router;
