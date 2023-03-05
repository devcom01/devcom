const { addNewCompany, addNewJobOffer, getAllCompanies, getSpecificJobOffers, getMatchingCompanies, getMatchingSystem } = require("./companiesModel")

exports.getAll = (async (req, res) => {
    try {
        let companies = await getAllCompanies()
        res.status(200).json(companies[0])
    }
    catch (err) {
        res.status(500).send(err)
    }
})
exports.getSpecific = (async (req, res) => {
    let stack1 = req.params.stack1

    try {
        let specific = await getSpecificJobOffers(stack1)
        res.status(200).json(specific[0])
    }
    catch (err) {
        res.status(500).json(err)

    }
})

exports.getAllMatching = (async (req, res) => {
    console.log("test getAll");
    try {
        let matchy = await getMatchingCompanies()
        res.status(200).json(matchy[0])
    }
    catch (err) {
        res.status(500).json(err)
    }
})
exports.addcompany = (async (req, res) => {
    let id = req.body.id
    let email = req.body.email
    try {
        let newcompany = await addNewCompany(id, email)
        res.status(200).json(newcompany)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
exports.addJoboffer = (async (req, res) => {
    let description = req.body.description
    let stack = req.body.stack
    let experience = req.body.experience
    let role = req.body.role
    let job_type = req.body.job_type
    let id = req.body.id
    try {
        let newoffer = await addNewJobOffer(description, stack, experience, role, job_type, id)
        res.status(200).json(newoffer)
    }
    catch (err) {
        res.status(500).send(err)
    }
})
exports.getSystem = (async (req, res) => {

    try {
        let matchy = await getMatchingSystem()
        res.status(200).json(matchy[0])
    }
    catch (err) {
        res.status(500).json(err)
    }
})

