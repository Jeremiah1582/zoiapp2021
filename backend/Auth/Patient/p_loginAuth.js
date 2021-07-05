const PatientModel = require('../Models/Patient')
const DoctorModel = require('../Models/Doctor')

module.exports=isLoggedin=(req,res,next)=>{
    console.log('isLoggedin middleware activated');
}