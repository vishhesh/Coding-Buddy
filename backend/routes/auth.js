const user = require('../models/user.model');
const userSession = require('../models/userSession.model');
const fetch = require('node-fetch');

module.exports = (app) => {

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return true;
        return false;
    }

    app.post("/api/auth/signup", (req, res, next) => {
        if (req.body.name == null || req.body.name == ""){
            res.send({
                success : false,
                message : "Name is required!"
            });
        }
        else if (req.body.email == null || req.body.email == ""){
            res.send({
                success : false,
                message : "Email is required!"
            });
        }
        else if (req.body.codeforcesId == null || req.body.codeforcesId == ""){
            res.send({
                success : false,
                message : "Codeforces handle required!"
            });
        }
        else if (ValidateEmail(req.body.email) == false){
            res.send({
                success : false,
                message : "Invalid Email!"
            });
        }
        else if(req.body.password == null || req.body.password == ""){
            res.send({
                success : false,
                message : "Password required!"
            });
        }
        else{
            let query = "http://codeforces.com/api/user.info?handles=" + req.body.codeforcesId;
            fetch(query)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.status !== "OK") {
                    res.send({
                        success : false,
                        message : "Invalid Codeforces handle!"
                    });
                }
                else {
                    
                }
            })
        }
    })
}