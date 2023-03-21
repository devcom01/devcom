const connection = require("../database/index")

module.exports = {
   //add a user
   addNewDeveloper: (id, email,first_name,last_name, pseudo,role, position, stack, experience, description, url,image) => {
      let sql = `INSERT INTO developers (firebase_id,developer_email,first_name,last_name,pseudo,role,position,tech_stack,description,cv,image_url) VALUES ("${id}","${email}","${first_name}","${last_name}","${pseudo}","${role}",${position},JSON_ARRAY(JSON_OBJECT("stack","${stack}","experience","${experience}")),"${description}",JSON_OBJECT("cv","${url}"),"${image}")`
     
      return connection.query(sql)
   },
   //  add a new stack
   addnewstack: (id, stack, experience) => {
      let sql = `select JSON_ARRAY_APPEND((select tech_stack from developers where firebase_id="${id}"),'$',JSON_OBJECT("stack","${stack}","experience",${experience}));`
      return connection.query(sql)
   },
   //get all users 
   getAlldevelopers: () => {
      return connection.query("SELECT * from developers");
   },


   // get One developer

   getOneDev : (id)=>{
      return connection.query(`SELECT * FROM developers where developer_email='${id}'`)
     
   },
   //based stack and minimum experience required
   getSpecificDevelopers: (stack, experience) => {
      let sql = `select * from developers where regexp_like(tech_stack,"${stack}") and  available=True and JSON_EXTRACT(tech_stack,"$[0].experience")>=${experience}`
      return connection.query(sql)
   },


   //based on stack and availability
   getAllMatchingdevelopers: () => {
      let sql = `SELECT developers.tech_stack,job_offer.tech_stack ,developers.firebase_id,companies_company_firebase_id
       FROM developers
       ,job_offer
       where regexp_like(developers.tech_stack,job_offer.tech_stack) AND developers.available=True`;

      return connection.query(sql)
   },
   //based on description
   getMatchingdevelopersbasedonDescription: (description) => {
      let sql = `SELECT * from developers where regexp_like(developers.description,"${description}")`
      return connection.query(sql)
   },

   //matching job offers based on stack, experience and role
    getMatchingJobOffers:()=>{
let sql = `    SELECT d.*, j.*
FROM (
    SELECT firebase_id, developer_email, first_name, last_name,description,developers.role, t1.stack, t1.experience,tech_stack as developer_tech_stack
    FROM developers 
    CROSS JOIN JSON_TABLE(JSON_EXTRACT(tech_stack, '$.skills'),
                          '$[*]'
                          COLUMNS (stack VARCHAR(255) PATH '$.stack',
                                   experience VARCHAR(255) PATH '$.experience')
    ) t1
) d
INNER JOIN (
    SELECT job_offer_id, companies_company_firebase_id, job_offer_description,job_offer_role,tech_stack,
           (SELECT company_name FROM companies WHERE companies_company_firebase_id=company_firebase_id) as company_name, t2.stack, t2.experience
    FROM job_offer
    CROSS JOIN JSON_TABLE(JSON_EXTRACT(tech_stack,"$.skills"),
                           '$[*]'
                           COLUMNS (stack VARCHAR(255) PATH '$.stack',
                                    experience VARCHAR(255) PATH '$.experience')
    ) t2
) j
ON d.stack = j.stack AND d.experience >= j.experience and d.role=j.job_offer_role`
return connection.query(sql)
   },
   //!based on rank (future recomendation system)
   getDevelopersBasedonRank:(rank)=>{
      let sql =`SELECT *FROM developers WHERE developers.rank=${rank} order by points desc`
      return connection.query(sql)
   },

   //BASED ON ROLE / STACK / MIN_EXPERIENCE_REQUIRED/ DESCRIPTION / AVIALABILITY
   getMatchingSystem: () => {
      let sql =`
      select  job_offer_description,job_offer_role,job_offer.tech_stack,job_offer_date,job_offer_id,developers.firebase_id,companies_company_firebase_id
   ,(select company_name  from companies where companies_company_firebase_id=company_firebase_id ) as company_name
       from developers,job_offer 
         where job_offer.job_offer_role=developers.role
         And regexp_like(developers.tech_stack,JSON_EXTRACT(job_offer.tech_stack,"$[0].stack"))  
         and developers.available=true`
         return connection.query(sql)
   },

getAllJobOffers:()=>{
   let sql=`SELECT job_offer.*,(select  company_name from companies where companies_company_firebase_id=companies.company_firebase_id ) as company_name FROM job_offer`;
   return connection.query(sql)
}


}

