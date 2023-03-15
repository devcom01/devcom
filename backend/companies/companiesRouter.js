const companiesRouter=require("express").Router();
const companiesController=require("./companiesController")

companiesRouter.get("/",companiesController.getAll)
companiesRouter.get("/matching",companiesController.getAllMatching)
companiesRouter.get("/specific/:stack1",companiesController.getSpecific)
companiesRouter.post("/add",companiesController.addcompany)
companiesRouter.post("/newoffer",companiesController.addJoboffer)
companiesRouter.get("/connect/system",companiesController.getSystem)





module.exports = companiesRouter