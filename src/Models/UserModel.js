const db = require('../../database');

module.exports = function(){

    let id;
    let name;
    let email;

    this.constructor = function(){
        
    };

    this.save = function(){
        
    };

    this.findOne = async function(params){
        console.log(params);

        let query = "";
        
        for(let param in params){
            query += '.where("' + param + '", "==", "' + params[param] + '")';
            console.log(params[param]);
        }

        console.log(query);
            
        return await db.collection('users')
        .bind(eval(query))
        .get().then(async querySnapshot => {
            let userData;
            await querySnapshot.forEach(documentSnapshot => {
                if(documentSnapshot.empty){
                    return false;
                }else{
                    userData = documentSnapshot.data();
                    userData.id = documentSnapshot.id;
                }
            });
            console.log(userData);
            return userData;
        });

    };

}