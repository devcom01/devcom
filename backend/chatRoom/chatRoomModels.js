const connection = require("../database/index");

module.exports = {
  addToChat: (firebaseId, roomId, socketId) => {
    const sql = `INSERT INTO chatroom (rooms_room_id, developers_firebase_id,socket_id) VALUES (?, ?,?);`;
    const values = [roomId, firebaseId, socketId];
    return connection.query(sql, values);
  },
  deleteFromChat: (socketId) => {
    return connection.query(`DELETE FROM chatroom WHERE socket_id = ?`, [
      socketId,
    ]);
  },
  saveMessages: (firebaseId, roomId, message) => {
    const sql = `INSERT INTO conversations (rooms_room_id, developers_firebase_id, message) VALUES ("${roomId}", "${firebaseId}","${message}");`;
    // const values = [roomId, firebaseId, message];
    return connection.query(sql);
  },
  getMessages: (roomId) => {
    const sql = `SELECT c.message, c.sent , d.firebase_id, d.first_name, d.last_name, room_id
        FROM conversations c
        INNER JOIN rooms r ON rooms_room_id=room_id
        INNER JOIN developers d ON c.developers_firebase_id=d.firebase_id
        WHERE room_id=${roomId}
        ORDER BY c.sent ASC
        Limit 15`;
    return connection.query(sql);
  },
  getConnectedUsers: (roomId) => {
    const sql = `SELECT ch.developers_firebase_id, ch.rooms_room_id, d.first_name, d.last_name, rooms.name
    FROM chatroom ch
    INNER JOIN rooms  ON ch.rooms_room_id=room_id
    INNER JOIN developers d ON ch.developers_firebase_id=d.firebase_id
    Where room_id=${roomId}`;
    return connection.query(sql)
  },

  getStackButton : ()=>{
    return connection.query("SELECT * FROM rooms LIMIT 13 ")
  },
  createRoom : (roomName)=>{
    const sql=`INSERT INTO rooms (name) VALUES (?)`
    const values =[`${roomName}`]
    return connection.query(sql, values)
  },
  getRoombyName : (roomName)=>{
    const sql = `SELECT room_id from rooms where name = "${roomName}"`
    return connection.query(sql)
  }
  
};
