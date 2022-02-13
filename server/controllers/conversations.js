const Conversation = require("../models/Conversation");

//new conversation

const createNewConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const newConversation = await new Conversation({
      members: [senderId, receiverId],
    });
    await newConversation.save();
    res.status(200).send(newConversation);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//get conversation from user

const getUserConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).send(conversation);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//get conversation from 2 users
const getUserConversationfrom2Users = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createNewConversation,
  getUserConversation,
  getUserConversationfrom2Users,
};
