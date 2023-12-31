var db = require('../config/connection')
var collection = require('../config/collection')
const bcrypt = require('bcrypt')

module.exports={
  doSignUp:(userData)=>{
    return new Promise(async(resolve,reject)=>{
      userData.Password = await bcrypt.hash(userData.Password,10)
      db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
        userData._id = data.insertedId;
        resolve(userData);
      })
    })
      

  }
}