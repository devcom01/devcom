const {
  addToChat,
  deleteFromChat,
  saveMessages,
  createRoom,
  getRoombyName,
} = require("./chatRoomModels");

const io = require("socket.io")();

io.on("connection", (socket) => {
  // console.log(socket.id);
  socket.on("joinRoom", (data) => {
    console.log(data);
    socket.join(data.room);
    // io.to(data.room).emit('messagejoin', `${data.name}, ${data.lastname} joined the room`)
    // console.log(socket.rooms);

    // socket.emit("joinedRoom",socket.id)
    // console.log("roooms",socket.rooms);
    addToChat(data.id, data.room, socket.id);
  });

  socket.on("sendmessage", (data) => {
    console.log(data);
    socket.to(data.room).emit("messageSent", data)
    saveMessages(data.id, data.room,data.messages)
  });

  socket.on("createroom", async (data) => {
    // console.log(data);
    try {
      const creation = await createRoom(data.room);
      //  console.log(creation);
      // const get= await getRoombyName(data.room)
      // console.log(creation[0]);
      const id = await getRoombyName(data.room);
      // console.log(id[0][0]);
      socket.join(id[0][0].room_id);
      addToChat(data.id, id[0][0].room_id, socket.id);
    } catch (err) {
      console.log(err);
    }
    // socket.join(data.room)
  });
  socket.on("disconnect", () => {
    // console.log("user disconnected : " + socket.id);
    deleteFromChat(socket.id)
    .then((response) => console.log(response))
    .catch((error) => console.log);
  });
  // socket.on("sendMessage", (message) => {
    //   // console.log("messageSent : " +JSON.stringify( message))
    //   socket.to(message.room).emit("receiveMessage", message);
    //   // console.log("iddddddddddddddddddddd",message.id[0]);
  //   addToRoom(message.id[0].firebase_id, message.room, message.message)
  //     .then((response) => console.log("added", response[0]))
  //     .catch((error) => console.log(error));
  // });

  // socket.on("leaveRoom", (data) => {
    //   deleteParticipants(data)
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log);
    //   // console.log('======>',data);
    //   // socket.leave(data.rooms)
    //   // deleteParticipants(data.author.firebase_id,data.room)
    //   // .then(response => {
      //   //   socket.emit("leavedRoom", "OK")
      //   // })
      //   // .catch(error =>{
        //   //   socket.emit("leavedRoom", error)
        //   // })
        // });
      });
      
      // // envoyer un message à tous les clients connectés
      // io.emit('chat message', 'Bienvenue sur le chat !');
      
      // // recevoir un message d'un client
      // socket.on('chat message', (msg) => {
//   console.log(`message reçu : ${msg}`);
//   // renvoyer le message à tous les clients connectés
//   io.emit('chat message', msg);
// });

module.exports = io;

