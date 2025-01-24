const db = require('../models');

function saveMessage(message, username, room) {
  return db.Message.create({
    message,
    username,
    room,
  })
    .then((newMessage) => {
      return newMessage;  // Return the inserted message
    })
    .catch((error) => {
      console.error('Error saving message:', error);
      throw error;
    });
}

module.exports = saveMessage;
