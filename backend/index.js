
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const express = require("express");
const cors = require("cors")
const app = express();
const port = 3001;
app.use(cors({origin:"*"}))

app.use(express.json());


const twilioClient = require("twilio")(
  process.env.TWILIO_API_KEY_SID,
  process.env.TWILIO_API_KEY_SECRET,
  { accountSid: process.env.TWILIO_ACCOUNT_SID }
);

const findOrCreateRoom = async (roomName) => {
  try {

    await twilioClient.video.v1.rooms(roomName).fetch();
  } catch (error) {

    if (error.code == 20404) {
      await twilioClient.video.v1.rooms.create({
        uniqueName: roomName,
        type: "go",
      });
    } else {
    
      throw error;
    }
  }
};

const getAccessToken = (roomName) => {

  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY_SID,
    process.env.TWILIO_API_KEY_SECRET,
  
    { identity: uuidv4() }
  );
 
  const videoGrant = new VideoGrant({
    room: roomName,
  });

   token.addGrant(videoGrant);
  return token.toJwt();
};
app.use(express.static('./'))
app.post("/join-room", async (req, res) => {
  if (!req.body || !req.body.roomName) {
    return res.status(400).send("Must include roomName argument.");
  }
  const roomName = req.body.roomName;
  findOrCreateRoom(roomName);
  const token = getAccessToken(roomName);
  res.send({
    token: token,
  });
});

const connection = require("./database/index")
const developerRouter=require("./developers/devRouter")
const companiesRouter=require("./companies/companiesRouter")
const toyRouter=require("./toy_problems/toyRouter")
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/developers',developerRouter)
app.use('/api/companies',companiesRouter)
app.use('/api/toy',toyRouter);
app.listen(3000, ()=>{ console.log("listenning")})

