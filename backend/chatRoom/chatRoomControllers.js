const { getMessages, getConnectedUsers, getStackButton} = require("./chatRoomModels");

exports.getParticipants = async (req, res) => {
  try {
    let message = await getMessages(req.params.room);
    res.status(200).send(message[0]);
  } catch {
    (error) => console.log("somthing goes wrong ", error);
  }
};

exports.getConnectedUsers = async (req, res) => {
  console.log(req.params.room);
  try {
    let room = await getConnectedUsers(req.params.room);
    res.status(200).json(room[0]);
  } catch (error) {
    console.log("somthing goes wrong ", error);
  }
};

exports.getStacks = async(req,res)=>{
  try{
    let stack = await getStackButton ()
    res.status(200).json(stack[0])
  }catch(err){
    res.status(500).json("something goes wrong",err)
  }
}

