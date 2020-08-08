const db = require('./database');
const uuid4 = require('uuid4');

module.exports.createId = async function createId(table){
    let newId = uuid4();
    const user = await db.collection(table)
    .doc(newId).get().then(querySnapshot => {
        if(querySnapshot.empty) return false;
        return true;
    });
    if(!user){
        return createId(table);
    }else{
        return newId;
    }
};