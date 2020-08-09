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
        let collection = db.collection('users');
        let query = collection;

        for(param in params){
            query = query.where(param, '==', params[param]);
        }

        return await query.get().then(async querySnapshot => {
            let userData;
            await querySnapshot.forEach(documentSnapshot => {
                if(documentSnapshot.empty){
                    return false;
                }else{
                    userData = documentSnapshot.data();
                    userData.id = documentSnapshot.id;
                    return true;
                }
            });
            return userData;
        });

    };

}