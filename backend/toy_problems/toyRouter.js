const toyRouter=require("express").Router();
const toyController = require('./toyController');

toyRouter.get('/',toyController.getAll)
toyRouter.get('/:level/:rank',toyController.getRankedandOrdred)








module.exports=toyRouter;