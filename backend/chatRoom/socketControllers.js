const {
  addToChat,
  deleteFromChat,
  saveMessages,
  createRoom,
  getRoombyName,
} = require("./chatRoomModels");

const io = require("socket.io")();
const connectedUser={} 
io.on("connection", (socket) => {
  // console.log(socket.id);
  socket.on("joinRoom", (data) => {
    console.log(data);
    socket.join(data.room);
    
    addToChat(data.id, data.room, socket.id);
    const date=new Date
    const hours = date.getHours()
    const minutes = date.getMinutes()
    io.to(data.room).emit('join', `${data.name}, ${data.lastname} joined the room at ${date}`)
    const username = {
      name : data.name,
      lastname : data.lastname
    }
    socket.username=username
    connectedUser[data.room] = username
    if(!connectedUser[data.room]){
      connectedUser[data.room] =[]
    }
    connectedUser[data.room]={...username}
    io.to(data.room).emit('user list', connectedUser[data.room])
    console.log('hetha howa elli connecté',connectedUser[data.room]);
    
    // console.log(socket.rooms);

    // socket.emit("joinedRoom",socket.id)
    // console.log("roooms",socket.rooms);
  });

  socket.on("sendmessage", (data) => {
    console.log('this is server ',data);
    saveMessages(data.id, data.room, data.messages) 
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

  socket.on('leavRoom', data=>{
    socket.leave(data.room);
      deleteFromChat(socket.id)
    io.to(data.room).emit('left',`${data.name}, ${data.lastname} left the room at ${new Date}`);
  })
  socket.on("disconnect", () => {
    // console.log("user disconnected : " + socket.id);
    const room = Object.keys(socket.rooms)[1]
    console.log('----->', socket.rooms);
    if(connectedUser[room]){
      const index = connectedUser[room].indexOf(socket.username);
      if(index!==-1){
        connectedUser[room].splice(index, 1)
        io.to(room).emit("user list", connectedUser[room])
      }
    }
    deleteFromChat(socket.id)
    // .then((response) => console.log(response))
    // .catch((error) => console.log);

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

