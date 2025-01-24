const db = require('../models');

function getMessage(room) {
   // select * from Messages where 'room'= room
  return db.Message.findAll({
    where:{
        room:room
    }
  })
    .then((newMessage) => {
      return newMessage;  // Return the inserted message
    })
    .catch((error) => {
      console.error('Error saving message:', error);
      throw error;
    });
}

module.exports = getMessage;
