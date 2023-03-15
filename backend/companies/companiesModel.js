const connection = require("../database/index")

module.exports = {
    //sign up
    addNewCompany: (id, email) => {
        let sql = `INSERT INTO companies (company_firebase_id,company_email) values("${id}","${email}")`
        return connection.query(sql)
    },

    addNewJobOffer: (description, stack, experience, role, job_type, id) => {
        let sql = `INSERT INTO job_offer (job_offer_description,tech_stack,role,job_type,companies_company_firebase_id,job_offer_date) values("${description}",JSON_ARRAY(JSON_OBJECT("stack","${stack}","experience",${experience})),'${role}','${job_type}','${id}',now())  ; `
        return connection.query(sql)
    },
    
    getAllCompanies: () => {
        let sql = "SELECT * FROM companies"
        return connection.query(sql)
    },
    //based on stack
    getSpecificJobOffers: (stack1) => {
        let sql = `select * from job_offer where regexp_like(tech_stack,"${stack1}")`;
        return connection.query(sql)
    },
    //based on stack,experience and developers availability
    getMatchingCompanies: () => {
      
        let sql = `SELECT developers.tech_stack,job_offer.tech_stack ,developers.firebase_id,companies_company_firebase_id
        FROM developers
        ,job_offer
        where regexp_like(developers.tech_stack,job_offer.tech_stack) AND JSON_EXTRACT(developers.tech_stack,"$[0].experience")>=JSON_EXTRACT(job_offer.tech_stack,"$[0].experience") AND developers.available=True`;
        return connection.query(sql)
    },

    //based on role,descrption,stack,experience,avilability 
    getMatchingSystem: () => {
        let sql = ` select developer_email,role,developers.description,cv,developers.tech_stack,job_offer.tech_stack,job_offer_role,job_offer_date,companies_company_firebase_id,developers.firebase_id
        from developers,job_offer 
        where job_offer.job_offer_role=developers.role
        And regexp_like(job_offer.tech_stack,JSON_EXTRACT(developers.tech_stack,"$[0].stack"))  
        and JSON_EXTRACT(developers.tech_stack,"$[0].experience")>=JSON_EXTRACT(job_offer.tech_stack,"$[0].experience")
        and regexp_like(job_offer_description,developers.description) 
        and developers.available=true ;`
        return connection.query(sql)
    }


}