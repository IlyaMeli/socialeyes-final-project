const Message = require("../models/Message");

//add

const addMessage = async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).send(savedMessage);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//get
const getMessage = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).send(messages);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { addMessage, getMessage };
