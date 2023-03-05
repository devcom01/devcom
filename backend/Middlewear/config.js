const { initializeApp, cert } =require ("firebase-admin/app");
const { getAuth } =require ("firebase-admin/auth");
require('dotenv').config()

const app = initializeApp({
    credential: cert(process.env.FIREBASE_CREDENTIALS["service_account_key"]),
});



const auth = getAuth(app);
module.export=auth;