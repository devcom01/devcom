const connection = require("../database/index")

module.exports = {
   //add a user
   addNewDeveloper: (id, email, pseudo,role, position, stack, experience, description, url) => {
      let sql = `INSERT INTO developers (firebase_id,developer_email,pseudo,role,position,tech_stack,description,cv) VALUES ("${id}","${email}","${pseudo}","${role}",${position},JSON_ARRAY(JSON_OBJECT("stack","${stack}","experience",${experience})),"${description}",JSON_OBJECT("cv","${url}"))`
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
   //based stack and minimum experience required
   getSpecificDevelopers: (stack, experience) => {
      let sql = `select * from developers where regexp_like(tech_stack,"${stack}") and  available=True and JSON_EXTRACT(tech_stack,"$[0].experience")>=${experience}`
      return connection.query(sql)
   },


   //based on stack and ava ilability
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

   //BASED ON ROLE / STACK / MIN_EXPERIENCE_REQUIRED/ DESCRIPTION / AVIALABILITY
   getMatchingSystem: () => {
      let sql =`
      select  job_offer_description,company_email,job_offer.tech_stack,job_offer_date,job_offer_id,developers.firebase_id,company_firebase_id
       from developers,job_offer ,companies
         where job_offer.job_offer_role=developers.role
         And regexp_like(developers.tech_stack,JSON_EXTRACT(job_offer.tech_stack,"$[0].stack"))  
         and JSON_EXTRACT(developers.tech_stack,"$[0].experience")>=JSON_EXTRACT(job_offer.tech_stack,"$[0].experience")
         and regexp_like(job_offer_description,developers.description) 
         and developers.available=true`
       return connection.query(sql)
   },




}