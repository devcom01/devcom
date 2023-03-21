const {getAllToyProblems,getToyproblemsbasedonRank} =require('./toyModel')


exports.getAll=(async (req,res) => {
    try{
        let problems = await getAllToyProblems()
        res.status(200).json(problems[0])
    }
    catch(err){
        res.status(500).send(err)
    }
})

exports.getRankedandOrdred=(async (req,res)=>{
    let level = req.params.level
    let rank=req.params.rank
    try{
        let list=await getToyproblemsbasedonRank(level,rank)
        console.log(list[0].length)
        res.status(200).json(list[0])
    }
    catch(err){
        res.status(500).send(err)
    }    
    
})
