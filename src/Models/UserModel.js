function UserModel(){

    this.name = "Willian Rodrigues";
    this.email = "willian@willianwcr.com.br";

    this.sendEmail = function(){
        console.log("Sending email to " + this.email);
    }

}

module.exports = UserModel;