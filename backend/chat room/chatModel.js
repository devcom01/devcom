const connection=require('../database/index')

module.exports={
  addChat:()=>{
    let sql =`INSERT INTO chats (messages,developers_firebase_id,Rooms_idRooms) VALUES(JSON_ARRAY(JSON_OBJECT("id","${id}","messages","${messages}"),"${devId}",)`
  }
}