// const PatientModel = require('../Models/Patient/p_Model')
// const DoctorModel = require('../Models/Doctor/dr_Model')
//********** login function***********
exports.login=(req,res)=>{
    //assign cookie to the 
    
    console.log('this is the login function');
    res.send('<h1> <br/> login page </h1>')
}

// ****************** signup function************
exports.signup=(req,res)=>{
    //Create user in database 
    console.log('this is the signup function');
    res.send('<h1> <br/>  sign up page </h1>')
}

//****************** logout function***************/
exports.logout=(req,res)=>{
    //delete the cookies here
    console.log('this is the logout function');
        res.send('<h1> <br/> you have licked log out </h1>')
}
