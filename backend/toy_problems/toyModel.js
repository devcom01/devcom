const connection = require('../database/index')



module.exports={

getAllToyProblems:()=>{
    let sql="SELECT * FROM toy_problems"
    return connection.query(sql)
},
getToyproblemsbasedonRank:(level,rank)=>{
let sql=`select*from toy_problems where level=JSON_array("${level}") AND toy_problems.rank=${rank} order by points;`
return connection.query(sql)
}


}





