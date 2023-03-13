const express = require("express")
const cors = require("cors")
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