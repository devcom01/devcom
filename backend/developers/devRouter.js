const developerRouter = require("express").Router()
const developerController = require("./devoloperController")

developerRouter.get("/", developerController.getAll)
developerRouter.get("/getOne/:id",developerController.getOneDev)
developerRouter.get("/specific/:stack/:experience", developerController.getSpecific)
developerRouter.get("/matching", developerController.getAllMatching)
developerRouter.get("/description", developerController.getMatchingDesc)
developerRouter.get("/connect/system", developerController.matchSystem)
developerRouter.post("/add", developerController.addDeveloper)
developerRouter.post("/newstack/:id", developerController.addStack)








module.exports = developerRouter;




