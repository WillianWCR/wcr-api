const db = require('../../database');

function UserModel(){

    this.id;
    this.name;
    this.email;

    this.sendEmail = function(){
        console.log("Sending email to " + this.email);
    }

    this.save = function(){
        db.collection('users').doc(this.id)
    }

}

module.exports = UserModel;