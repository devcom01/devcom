const chatRoomRouter = require("express").Router()
const chatRoomController = require("./chatRoomControllers")




chatRoomRouter.get("/participant/:room",chatRoomController.getParticipants )
chatRoomRouter.get("/userconnected/:room",chatRoomController.getConnectedUsers)
chatRoomRouter.get("/getStack",chatRoomController.getStacks)




module.exports = chatRoomRouter