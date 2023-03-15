const { addNewDeveloper, addnewstack, getAlldevelopers, getSpecificDevelopers, getAllMatchingdevelopers,getDevelopersBasedonRank, getMatchingdevelopersbasedonDescription,getMatchingSystem,getAllJobOffers,getMatchingJobOffers } = require("./devModel")


exports.addDeveloper = (async (req, res) => {
    let id = req.body.id
    let email = req.body.email
    let pseudo = req.body.pseudo
    let image_url=req.body.image_url
    let position = req.body.position
    let stack = req.body.stack
    let experience = req.body.experience
    let description = req.body.description
    let url = req.body.url
    let role =req.body.role
    try {
        let newdev = await addNewDeveloper(id, email, pseudo,role, position, stack, experience, description, url,image_url)
        res.status(200).json(newdev)
    }
    catch (err) {
        res.status(501).send(err)
    }
})

exports.addStack = (async (req, res) => {
    let id = req.params.id
    let stack = req.body.stack
    let experience = req.body.experience
    try {
        let newStack = await addnewstack(id, stack, experience)
        res.status(201).json(newStack[0])
    }
    catch (err) {
        res.status(501).send(err)
    }
})


exports.getAll = (async (req, res) => {
    try {
        let developers = await getAlldevelopers()
        //    console.log(developers[0].length)
        res.status(200).json(developers[0])
    }
    catch (err) {
        res.status(500).send(err)
    }
})
exports.getSpecific = (async (req, res) => {
    let stack = req.params.stack
    let experience = req.params.experience
    try {
        let specific = await getSpecificDevelopers(stack, experience)
        res.status(200).json(specific[0])
    }
    catch (err) {
        res.status(500).json(err)

    }
})
exports.getMatchingOffers=(async(req,res) => {
    try{
        let [matchy]=await getMatchingJobOffers()
    res.status(200).json(matchy)
    }
    catch (err) {
        res.status(500).send(err)
    }

})


exports.getDevelopersbyRank = (async (req, res)=>{
    let rank=req.params.rank
    try{
        let ranked=await getDevelopersBasedonRank(rank)
        res.status(201).json(ranked[0])
    }
    catch(err){
        res.status(500).json(err)
    }
})
exports.getJobOffers=(async (req, res)=>{
    try{
        let jobOffers=await getAllJobOffers()
        res.status(201).json(jobOffers[0])
    }
    catch(err){
        res.status(500).json(err)
    }
})
exports.getAllMatching = (async (req, res) => {
    try {
        let matchy = await getAllMatchingdevelopers()
        res.status(200).json(matchy[0])
    }
    catch (err) {
        res.status(500).json(err)
    }
})
exports.getMatchingDesc = (async (req, res) => {
    let description = req.body.description
    try {
        let matchy = await getMatchingdevelopersbasedonDescription(description)
        res.status(200).json(matchy[0])
    }
    catch (err) {
        res.status(500).json(err)
    }
    
})
exports.matchSystem=(async(req,res)=>{


try{
    let matchy = await getMatchingSystem()
    res.status(201).json(matchy[0])
}
catch(err){
    res.status(504).json(err)
}
})



