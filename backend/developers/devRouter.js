const developerRouter = require("express").Router()
const developerController = require("./devoloperController")

developerRouter.get("/", developerController.getAll)
developerRouter.get("/specific/:stack/:experience", developerController.getSpecific)
developerRouter.get("/matching/offers", developerController.getMatchingOffers)
developerRouter.get("/description", developerController.getMatchingDesc)
developerRouter.get("/connect/system", developerController.matchSystem)
developerRouter.get("/rank/:rank", developerController.getDevelopersbyRank)
developerRouter.get("/job/offers",developerController.getJobOffers)
developerRouter.post("/add", developerController.addDeveloper)
developerRouter.post("/newstack/:id", developerController.addStack)








module.exports = developerRouter;




