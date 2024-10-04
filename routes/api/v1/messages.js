const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "GET messages",
    data: {
      messages: [
        {
          user: "John",
          message: "Hello World",
        },
        {
          user: "Maria",
          message: "Hello Universe",
        },
      ],
    },
  });
});

router.get("/:id", (req, res, next) => {
  const messageId = parseInt(req.params.id, 10);
  const messages = [
    {
      user: "John",
      message: "Hello World",
    },
    {
      user: "Maria",
      message: "Hello Universe",
    },
  ];

  if (messageId > 0 && messageId <= messages.length) {
    res.status(200).json({
      status: "success",
      message: `GETTING message with ID ${messageId}`,
      data: {
        message: messages[messageId - 1],
      },
    });
  } else {
    res.status(404).json({
      status: "fail",
      message: "Message not found",
    });
  }
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "POST message",
    data: {
      message: {
        user: req.body.user,
        message: req.body.message,
      },
    },
  });
});

//  PUT: /api/v1/messages/:id
router.put("/:id", (req, res, next) => {
  const messageId = parseInt(req.params.id, 10);
  const messages = [
    {
      user: "John",
      message: "Hello World",
    },
  ];
});

module.exports = router;
